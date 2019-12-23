import { colorPalette, mergeOptions } from '@chartisan/chartisan'
import {
    ChartType,
    ChartDataSets,
    ChartTitleOptions,
    ChartConfiguration,
    ChartLegendOptions,
    ChartLayoutPaddingObject
} from 'chart.js'

/**
 * Represent a hook.
 *
 * @export
 * @type {Hook}
 */
export type Hook = (data: ChartConfiguration) => ChartConfiguration

/**
 * Used to get a color of a dataset.
 *
 * @export
 * @param {*} [colors=colorPalette]
 * @returns {Hook}
 */
export function Palette(colors = colorPalette): Hook {
    return function(chart: ChartConfiguration): ChartConfiguration {
        if (chart.data?.datasets)
            chart.data.datasets = chart.data.datasets.map((dataset, index) => ({
                ...dataset,
                borderColor: colors[index % colors.length],
                backgroundColor: colors[index % colors.length]
            }))
        return chart
    }
}

/**
 * Used to make the chart responsive.
 *
 * @export
 * @param {boolean} [maintainAspectRatio=true]
 * @returns {Hook}
 */
export function Responsive(maintainAspectRatio = true): Hook {
    return function(chart: ChartConfiguration): ChartConfiguration {
        return mergeOptions(chart, {
            options: { maintainAspectRatio }
        })
    }
}

/**
 * Set the chart legend options.
 *
 * @export
 * @param {ChartLegendOptions} [legend={}]
 * @returns {Hook}
 */
export function Legend(legend: ChartLegendOptions = {}): Hook {
    return function(chart: ChartConfiguration): ChartConfiguration {
        return mergeOptions(chart, {
            options: { legend }
        })
    }
}

/**
 * Determines if the chart will show the axes.
 *
 * @export
 * @param {boolean} [display=true]
 * @param {boolean} [strict=false]
 * @returns {Hook}
 */
export function DisplayAxes(display = true, strict = false): Hook {
    return function(chart: ChartConfiguration): ChartConfiguration {
        if (strict)
            return mergeOptions(chart, {
                options: { scale: { display } }
            })
        return mergeOptions(chart, {
            options: {
                scales: {
                    xAxes: [{ display }],
                    yAxes: [{ display }]
                }
            }
        })
    }
}

/**
 * Creates a minimalist chart.
 *
 * @export
 * @param {boolean} [value=true]
 * @returns {Hook}
 */
export function Minimalist(value = true): Hook {
    return function(chart: ChartConfiguration): ChartConfiguration {
        chart = Legend({ display: !value })(chart)
        return DisplayAxes(!value)(chart)
    }
}

/**
 * Determines the padding of the chart.
 *
 * @export
 * @param {(number | ChartLayoutPaddingObject)} [value=5]
 * @returns
 */
export function Padding(padding: number | ChartLayoutPaddingObject = 5) {
    return function(chart: ChartConfiguration): ChartConfiguration {
        return mergeOptions(chart, {
            options: { layout: { padding } }
        })
    }
}

/**
 * Used as the interface for the types hook.
 *
 * @export
 * @interface TypesHook
 * @extends {ChartDataSets}
 */
export interface DatasetHook extends ChartDataSets {
    type: ChartType | string
}

/**
 * Set the dataset options.
 *
 * @export
 * @param {((string | TypesHook)[])} types
 * @param {string} [general='bar']
 * @returns {Hook}
 */
export function Datasets(
    types: (string | DatasetHook)[],
    general = 'bar'
): Hook {
    const t = types.map(e => (typeof e === 'string' ? { type: e } : e))
    return function(chart: ChartConfiguration): ChartConfiguration {
        chart.type = general
        chart.data?.datasets
        if (chart.data?.datasets)
            chart.data.datasets = chart.data.datasets.map((dataset, index) => ({
                ...dataset,
                ...t[index % t.length]
            }))
        return chart
    }
}

/**
 * Sets a title to the chart.
 *
 * @export
 * @param {(string | ChartTitleOptions)} [titleOrOptions={}]
 * @returns {Hook}
 */
export function Title(title: string | ChartTitleOptions = {}): Hook {
    title =
        typeof title === 'string'
            ? { text: title, display: true }
            : { display: true, ...title }
    return function(chart: ChartConfiguration): ChartConfiguration {
        return mergeOptions(chart, {
            options: { title }
        })
    }
}

/**
 * Set the chart to begin at zero.
 *
 * @export
 * @param {boolean} [beginAtZero=true]
 * @returns {Hook}
 */
export function BeginAtZero(beginAtZero = true): Hook {
    return function(chart: ChartConfiguration): ChartConfiguration {
        return mergeOptions(chart, {
            options: { scales: { yAxes: [{ ticks: { beginAtZero } }] } }
        })
    }
}
