import '@chartisan/chartisan/dist/style.css'
import { ChartisanOptions, isChartisan, Chartisan } from '@chartisan/chartisan'

/**
 * Base chart class for ChartJS.
 *
 * @export
 * @class Chart
 * @extends {Base}
 */
export class Chart extends Chartisan {
    /**
     * The chart canvas.
     *
     * @type {HTMLCanvasElement}
     * @memberof Chartisan
     */
    canvas: HTMLCanvasElement

    /**
     * Creates an instance of Chartisan.
     *
     * @param {ChartisanOptions} options
     * @memberof Chartisan
     */
    constructor(options: ChartisanOptions) {
        super(options)
        this.canvas = document.createElement('canvas')
        // this.controller.appendChild(this.canvas)
    }

    /**
     * Runs when the chart gets updated.
     *
     * @protected
     * @memberof Chartisan
     */
    protected onUpdate(response: JSON) {
        console.log(response)
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
        Chartisan: isChartisan
    }
}

window.Chartisan = Chart
