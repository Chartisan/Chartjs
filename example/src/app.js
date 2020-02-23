import { Chartisan, ChartisanHooks } from '@chartisan/chartjs'

const chart1 = new Chartisan({
    el: '#chart1',
    url: 'http://127.0.0.1:9000',
    hooks: new ChartisanHooks()
        .colors()
        .responsive()
        .beginAtZero()
        .legend({ position: 'bottom' })
        .title('This is a sample chart using chartisan!')
        .datasets([{ type: 'line', fill: false }, 'bar'])
})

const chart2 = new Chartisan({
    el: '#chart2',
    data: {
        chart: { labels: ['a', 'b', 'c'] },
        datasets: [
            { name: 'Sample 1', values: [1, 2, 3] },
            { name: 'Sample 2', values: [3, 2, 1] }
        ]
    },
    hooks: new ChartisanHooks()
        .colors(['#00ffff', 'green'])
        .beginAtZero()
        .responsive()
        .legend(false)
        .title('Example chart using static data.')
        .datasets([{ type: 'line', fill: false }, 'bar'])
})

window.update1 = function() {
    chart1.update({ background: true })
}
