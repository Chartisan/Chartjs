import { Hooks } from './hooks'
import '@chartisan/chartisan/style.css'
import Chart, { ChartConfiguration } from 'chart.js'
import {
    isHook,
    ServerData,
    isChartisan,
    ChartisanOptions,
    Chartisan as Base
} from '@chartisan/chartisan'

/**
 * Base chart class for ChartJS.
 *
 * @export
 * @class Chart
 * @extends {Base}
 */
export class Chartisan extends Base<ChartConfiguration> {
    /**
     * The chart canvas.
     *
     * @type {HTMLCanvasElement}
     * @memberof Chartisan
     */
    canvas: HTMLCanvasElement

    /**
     * Stores the chart instance.
     *
     * @type {Chart}
     * @memberof Chartisan
     */
    chart?: Chart

    /**
     * Creates an instance of Chartisan.
     *
     * @param {ChartisanOptions} options
     * @memberof Chartisan
     */
    constructor(options: ChartisanOptions<ChartConfiguration>) {
        super(options)
        this.canvas = document.createElement('canvas')
        this.canvas.style.width = '100%'
        this.canvas.style.height = '100%'
    }

    /**
     * Formats the data of the request to match the data that
     * the chart needs (acording to the desired front-end).
     *
     * @protected
     * @param {ServerData} response
     * @returns {ChartConfiguration}
     * @memberof Chartisan
     */
    protected formatData(response: ServerData): ChartConfiguration {
        return {
            type: 'bar',
            data: {
                labels: response.chart.labels,
                datasets: response.datasets.map(dataset => ({
                    label: dataset.name,
                    data: dataset.values
                }))
            },
            options: {}
        }
    }

    /**
     * Handles a successfull response of the chart data.
     *
     * @protected
     * @param {ChartConfiguration} data
     * @memberof Chartisan
     */
    protected onUpdate(data: ChartConfiguration) {
        console.log(data)
        this.controller.appendChild(this.canvas)
        this.chart = new Chart(this.canvas, data)
        console.log('Chart created...')
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
        Chartisan: isChartisan<ChartConfiguration>

        /**
         * Determines the hooks of the chart.
         *
         * @type {isHook<ChartConfiguration>}
         * @memberof Window
         */
        ChartisanHooks: isHook<ChartConfiguration>
    }
}

window.Chartisan = Chartisan
window.ChartisanHooks = Hooks
