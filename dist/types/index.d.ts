import { Hooks } from './hooks';
import Chart, { ChartConfiguration, ChartUpdateProps } from 'chart.js';
import { isHook, ServerData, isChartisan, Chartisan as Base } from '@chartisan/chartisan';
export { Hooks as ChartisanHooks };
/**
 * Used as an alias.
 *
 * @type {CC}
 */
export declare type CC = ChartConfiguration;
/**
 * Base chart class for ChartJS.
 *
 * @export
 * @class Chart
 * @extends {Base}
 */
export declare class Chartisan extends Base<CC> {
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
     * @returns {CC}
     * @memberof Chartisan
     */
    protected formatData(response: ServerData): CC;
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
     * @param {CC} data
     * @memberof Chartisan
     */
    protected onUpdate(data: CC): void;
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
    protected onBackgroundUpdate(data: CC, options?: ChartUpdateProps): void;
    /**
     * This returns a base 64 encoded string of the
     * chart in it's current state.
     *
     * @returns {(string | undefined)}
     * @memberof Chartisan
     */
    toImage(): string | undefined;
    /**
     * Returns an HTML string of a legend for that chart.
     * The legend is generated from the legendCallback in the options.
     *
     * @memberof Chartisan
     */
    legend(): string | undefined;
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
        Chartisan: isChartisan<CC>;
        /**
         * Determines the hooks of the chart.
         *
         * @type {isHook<CC>}
         * @memberof Window
         */
        ChartisanHooks: isHook<CC>;
    }
}
