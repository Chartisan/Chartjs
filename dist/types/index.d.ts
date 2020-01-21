import { Hooks } from './hooks';
import Chart, { ChartConfiguration, ChartUpdateProps } from 'chart.js';
import { isHook, ServerData, isChartisan, Chartisan as Base } from '@chartisan/chartisan';
export { Hooks as ChartisanHooks };
/**
 * Base chart class for ChartJS.
 *
 * @export
 * @class Chart
 * @extends {Base}
 */
export declare class Chartisan extends Base<ChartConfiguration> {
    /**
     * The chart canvas.
     *
     * @type {HTMLCanvasElement}
     * @memberof Chartisan
     */
    canvas?: HTMLCanvasElement;
    /**
     * Stores the chart instance.
     *
     * @type {Chart}
     * @memberof Chartisan
     */
    chart?: Chart;
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
    static mutateArray<T>(dest: T[], src: T[], action?: (dest: T[], src: T[], index: number) => void): void;
    /**
     * Formats the data of the request to match the data that
     * the chart needs (acording to the desired front-end).
     *
     * @protected
     * @param {ServerData} response
     * @returns {ChartConfiguration}
     * @memberof Chartisan
     */
    protected formatData(response: ServerData): ChartConfiguration;
    /**
     * Renews the canvas for another chart to be used.
     *
     * @protected
     * @memberof Chartisan
     */
    protected renewCanvas(): void;
    /**
     * Handles a successfull response of the chart data.
     *
     * @protected
     * @param {ChartConfiguration} data
     * @memberof Chartisan
     */
    protected onUpdate(data: ChartConfiguration): void;
    /**
     * Handles a successfull response of the chart data
     * in the background (possibly, updating the values
     * of the chart without creating a new one).
     *
     * @protected
     * @param {ChartConfiguration} data
     * @param {ChartUpdateProps} [options]
     * @memberof Chartisan
     */
    protected onBackgroundUpdate(data: ChartConfiguration, options?: ChartUpdateProps): void;
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
        Chartisan: isChartisan<ChartConfiguration>;
        /**
         * Determines the hooks of the chart.
         *
         * @type {isHook<ChartConfiguration>}
         * @memberof Window
         */
        ChartisanHooks: isHook<ChartConfiguration>;
    }
}
