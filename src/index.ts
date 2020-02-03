import { Hooks } from './hooks'
import Chart, { ChartConfiguration, ChartUpdateProps } from 'chart.js'
import {
    isHook,
    ServerData,
    isChartisan,
    Chartisan as Base
} from '@chartisan/chartisan'

export { Hooks as ChartisanHooks }

/**
 * Used as an alias.
 *
 * @type {CC}
 */
export type CC = ChartConfiguration

/**
 * Base chart class for ChartJS.
 *
 * @export
 * @class Chart
 * @extends {Base}
 */
export class Chartisan extends Base<CC> {
    /**
     * The chart canvas.
     *
     * @type {HTMLCanvasElement}
     * @memberof Chartisan
     */
    canvas?: HTMLCanvasElement

    /**
     * Stores the chart instance.
     *
     * @type {Chart}
     * @memberof Chartisan
     */
    chart?: Chart

    /**
     * Helper to mutate an array manually (this is used
     * because chartjs can only handle animations when the
     * original array is modified).
     *
     * @static
     * @template T
     * @param {T[]} dest
     * @param {T[]} src
     * @param {(dest: T[], src: T[], index: number) => void} [action]
     * @memberof Chartisan
     */
    static mutateArray<T>(
        dest: T[],
        src: T[],
        action?: (dest: T[], src: T[], index: number) => void
    ) {
        let i: number
        for (i = 0; i < src.length; i++) {
            if (i < dest.length) {
                if (action) {
                    action(dest, src, i)
                    continue
                }
                dest[i] = src[i]
                continue
            }
            dest.push(src[i])
        }
        while (i < dest.length) dest.pop()
    }

    /**
     * Formats the data of the request to match the data that
     * the chart needs (acording to the desired front-end).
     *
     * @protected
     * @param {ServerData} response
     * @returns {CC}
     * @memberof Chartisan
     */
    protected formatData(response: ServerData): CC {
        return {
            type: 'bar',
            data: {
                labels: response.chart.labels,
                datasets: response.datasets.map(({ name, values }) => ({
                    label: name,
                    data: values
                }))
            },
            options: {}
        }
    }

    /**
     * Renews the canvas for another chart to be used.
     *
     * @protected
     * @memberof Chartisan
     */
    protected renewCanvas() {
        if (this.canvas) this.body.removeChild(this.canvas)
        this.canvas = document.createElement('canvas')
        this.canvas.style.width = '100%'
        this.canvas.style.height = '100%'
        this.body.appendChild(this.canvas)
    }

    /**
     * Handles a successfull response of the chart data.
     *
     * @protected
     * @param {CC} data
     * @memberof Chartisan
     */
    protected onUpdate(data: CC) {
        if (this.chart) this.chart.destroy()
        this.renewCanvas()
        this.chart = new Chart(this.canvas!, data)
    }

    /**
     * Handles a successfull response of the chart data
     * in the background (possibly, updating the values
     * of the chart without creating a new one).
     *
     * @protected
     * @param {CC} data
     * @param {ChartUpdateProps} [options]
     * @memberof Chartisan
     */
    protected onBackgroundUpdate(data: CC, options?: ChartUpdateProps) {
        if (this.chart) {
            // Update the chart options.
            this.chart.options = {
                ...this.chart.options,
                ...data.options
            }
            // Update the labels.
            if (this.chart.data.labels && data.data?.labels) {
                Chartisan.mutateArray(this.chart.data.labels, data.data.labels)
            }
            // To update the data arrays, it need to be performed
            // to the original one. If the original one is not modified
            // no animation will be performed. Therefore, please don't
            // try beeing smarter here.
            if (this.chart.data.datasets && data.data?.datasets) {
                Chartisan.mutateArray(
                    this.chart.data.datasets,
                    data.data.datasets,
                    (dest, src, i) => {
                        Chartisan.mutateArray<
                            (number | null | undefined) | Chart.ChartPoint
                        >(dest[i].data!, src[i].data!)
                    }
                )
            }
            this.chart.update(options)
        } else this.onUpdate(data)
    }

    /**
     * This returns a base 64 encoded string of the
     * chart in it's current state.
     *
     * @returns {(string | undefined)}
     * @memberof Chartisan
     */
    toImage(): string | undefined {
        return this.chart?.toBase64Image()
    }

    /**
     * Returns an HTML string of a legend for that chart.
     * The legend is generated from the legendCallback in the options.
     *
     * @memberof Chartisan
     */
    legend(): string | undefined {
        return (this.chart?.generateLegend() as string) ?? undefined
    }
}

declare global {
    /**
     * Extends the Window interface.
     *
     * @interface Window
     */
    interface Window {
        /**
         * The chartisan class to initiate it as a global variable
         * bound to the window var.
         *
         * @type {isChartisan}
         * @memberof Window
         */
        Chartisan: isChartisan<CC>

        /**
         * Determines the hooks of the chart.
         *
         * @type {isHook<CC>}
         * @memberof Window
         */
        ChartisanHooks: isHook<CC>
    }
}

window.Chartisan = Chartisan
window.ChartisanHooks = Hooks
