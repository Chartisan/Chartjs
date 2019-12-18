declare class Chart extends Chartisan {
    canvas: HTMLCanvasElement
    constructor(options: ChartisanOptions)
    protected onUpdate(response: JSON): void
}
export { Chart }
