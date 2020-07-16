import { colorPalette, Hooks as BaseHooks } from '@chartisan/chartisan'
import {
  ChartType,
  Scriptable,
  ChartColor,
  ChartDataSets,
  ChartTitleOptions,
  ChartLegendOptions,
  ChartTooltipOptions,
  ChartAnimationOptions,
  ChartLayoutPaddingObject,
} from 'chart.js'
import { CC } from './index'

/**
 * Used as the interface for the types hook.
 */
export interface DatasetHook extends ChartDataSets {
  type: ChartType | string
}

export class Hooks extends BaseHooks<CC> {
  /**
   * Used to set the color color of a dataset.
   */
  colors(colors: (ChartColor | ChartColor[] | Scriptable<ChartColor>)[] = colorPalette): this {
    return this.custom(({ data }) => {
      if (data.data?.datasets)
        data.data.datasets = data.data.datasets.map((dataset, index) => ({
          ...dataset,
          backgroundColor: colors[index % colors.length],
        }))
      return data
    })
  }

  /**
   * Set the pie border colors of the datasets.
   */
  borderColors(colors: (ChartColor | ChartColor[] | Scriptable<ChartColor>)[] = colorPalette): this {
    return this.custom(({ data }) => {
      if (data.data?.datasets)
        data.data.datasets = data.data.datasets.map((dataset, index) => ({
          ...dataset,
          borderColor: colors[index % colors.length],
        }))
      return data
    })
  }

  /**
   * Set the pie colors of the datasets.
   */
  pieColors(colors: ChartColor[] = colorPalette): this {
    return this.custom(({ data }) => {
      if (data.data?.datasets) {
        data.data.datasets = data.data.datasets.map((dataset, _, array) => {
          const d = new Array(dataset.data?.length ?? array?.length).fill('')
          return {
            ...dataset,
            // borderColor: d.map((_, i) => colors[i % colors.length]),
            backgroundColor: d.map((_, i) => colors[i % colors.length]),
          }
        })
      }
      return data
    })
  }

  /**
   * Set the pie border colors of the datasets.
   */
  pieBorderColors(colors: ChartColor[] = colorPalette): this {
    return this.custom(({ data }) => {
      if (data.data?.datasets) {
        data.data.datasets = data.data.datasets.map((dataset, _, array) => {
          const d = new Array(dataset.data?.length ?? array?.length).fill('')
          return {
            ...dataset,
            borderColor: d.map((_, i) => colors[i % colors.length]),
          }
        })
      }
      return data
    })
  }

  /**
   * Used to make the chart responsive.
   */
  responsive(value = true): this {
    return this.options({ options: { maintainAspectRatio: !value } })
  }

  /**
   * Set the chart legend options. If a boolean is
   * supplied, it will be used as the display value.
   */
  legend(legend: boolean | ChartLegendOptions = {}): this {
    if (typeof legend === 'boolean') legend = { display: legend }
    return this.options({ options: { legend } })
  }

  /**
   * Determines if the chart will show the axes.
   */
  displayAxes(display = true, strict = false): this {
    return this.options(
      strict
        ? { options: { scale: { display } } }
        : {
            options: {
              scales: { xAxes: [{ display }], yAxes: [{ display }] },
            },
          }
    )
  }

  /**
   * Creates a minimalist chart.
   */
  minimalist(value = true): this {
    this.legend({ display: !value })
    return this.displayAxes(!value)
  }

  /**
   * Determines the padding of the chart.
   */
  padding(padding: number | ChartLayoutPaddingObject = 5): this {
    return this.options({ options: { layout: { padding } } })
  }

  /**
   * Set the dataset options. If a single string is provided, all the datasets
   * will will be specified to the desired type. If an array is provided, if the
   * inner element is a string, it will be used as a type, otherwise, the options
   * will be applied, in both cases, to the nth position. Keep in mind that if the
   * array length is less than the datasets, it will start from the start again.
   */
  datasets(types: ChartType | (ChartType | DatasetHook)[], general = 'bar'): this {
    return this.custom(({ data }) => {
      data.type = typeof types === 'string' ? types : general
      if (Array.isArray(types) && data.data?.datasets) {
        const t = types.map((e) => (typeof e === 'string' ? { type: e } : e))
        data.data.datasets = data.data.datasets.map((dataset, index) => ({
          ...dataset,
          ...t[index % t.length],
        }))
      }
      return data
    })
  }

  /**
   * Sets a title to the chart.
   */
  title(title: string | ChartTitleOptions = {}): this {
    return this.options({
      options: {
        title: typeof title === 'string' ? { text: title, display: true } : { display: true, ...title },
      },
    })
  }

  /**
   * Set the chart to begin at zero.
   */
  beginAtZero(beginAtZero = true, axe: 'x' | 'y' = 'y'): this {
    return this.options({
      options: { scales: { [`${axe}Axes`]: [{ ticks: { beginAtZero } }] } },
    })
  }

  /**
   * Set the chart to begin at zero.
   */
  precision(precision: number, axe: 'x' | 'y' = 'y'): this {
    return this.options({
      options: { scales: { [`${axe}Axes`]: [{ ticks: { precision } }] } },
    })
  }

  /**
   * Set the chart to begin at zero.
   */
  stepSize(stepSize: number, axe: 'x' | 'y' = 'y'): this {
    return this.options({
      options: { scales: { [`${axe}Axes`]: [{ ticks: { stepSize } }] } },
    })
  }

  /**
   * Sets the tooltip options for the chart.
   */
  tooltip(tooltips: boolean | ChartTooltipOptions): this {
    if (typeof tooltips === 'boolean') tooltips = { enabled: tooltips }
    return this.options({ options: { tooltips } })
  }

  /**
   * Sometimes you need a very complex legend. In these cases,
   * it makes sense to generate an HTML legend. Charts provide
   * a generateLegend() method on their prototype that returns an
   * HTML string for the legend. To configure how this legend
   * is generated, you can change the legendCallback config property.
   */
  legendCallback(legendCallback: (chart: Chart) => string): this {
    return this.options({ options: { legendCallback } })
  }

  /**
   * Configures the animations of chart.js.
   */
  animation(animation: ChartAnimationOptions): this {
    return this.options({ options: { animation } })
  }
}
