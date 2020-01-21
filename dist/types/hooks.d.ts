import { Hooks as BaseHooks } from '@chartisan/chartisan';
import { ChartType, ChartDataSets, ChartTitleOptions, ChartConfiguration, ChartLegendOptions, ChartLayoutPaddingObject, ChartColor, Scriptable } from 'chart.js';
/**
 * Used as the interface for the types hook.
 *
 * @export
 * @interface TypesHook
 * @extends {ChartDataSets}
 */
export interface DatasetHook extends ChartDataSets {
    type: ChartType | string;
}
export declare class Hooks extends BaseHooks<ChartConfiguration> {
    /**
     * Used to set the color color of a dataset.
     *
     * @param {*} [colors=colorPalette]
     * @returns {this}
     * @memberof Hooks
     */
    colors(colors?: (ChartColor | ChartColor[] | Scriptable<ChartColor>)[]): this;
    /**
     * Used to make the chart responsive.
     *
     * @param {boolean} [maintainAspectRatio=true]
     * @returns {this}
     * @memberof Hooks
     */
    responsive(value?: boolean): this;
    /**
     * Set the chart legend options. If a boolean is
     * supplied, it will be used as the display value.
     *
     * @param {(boolean | ChartLegendOptions)} [legend={}]
     * @returns {this}
     * @memberof Hooks
     */
    legend(legend?: boolean | ChartLegendOptions): this;
    /**
     * Determines if the chart will show the axes.
     *
     * @param {boolean} [display=true]
     * @param {boolean} [strict=false]
     * @returns {Hook}
     * @memberof Hooks
     */
    displayAxes(display?: boolean, strict?: boolean): this;
    /**
     * Creates a minimalist chart.
     *
     * @param {boolean} [value=true]
     * @returns {Hook}
     * @memberof Hooks
     */
    minimalist(value?: boolean): this;
    /**
     * Determines the padding of the chart.
     *
     * @param {(number | ChartLayoutPaddingObject)} [padding=5]
     * @returns
     * @memberof Hooks
     */
    padding(padding?: number | ChartLayoutPaddingObject): this;
    /**
     * Set the dataset options. If a single string is provided, all the datasets
     * will will be specified to the desired type. If an array is provided, if the
     * inner element is a string, it will be used as a type, otherwise, the options
     * will be applied, in both cases, to the nth position. Keep in mind that if the
     * array length is less than the datasets, it will start from the start again.
     *
     * @param {(ChartType | (ChartType | DatasetHook)[])} types
     * @param {string} [general='bar']
     * @returns {this}
     * @memberof Hooks
     */
    datasets(types: ChartType | (ChartType | DatasetHook)[], general?: string): this;
    /**
     * Sets a title to the chart.
     *
     * @param {(string | ChartTitleOptions)} [title={}]
     * @returns {this}
     * @memberof Hooks
     */
    title(title?: string | ChartTitleOptions): this;
    /**
     * Set the chart to begin at zero.
     *
     * @param {boolean} [beginAtZero=true]
     * @returns {this}
     * @memberof Hooks
     */
    beginAtZero(beginAtZero?: boolean): this;
}
