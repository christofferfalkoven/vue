<template>
    <section class="container">
        <h1>Lågnivåprogrammering</h1>

        <div class="columns">
            <div class="column">
                <h3>Line Chart</h3>
                <line-chart></line-chart>
            </div>
            <div class="column">
                <h3>Bar Chart</h3>
                <bar-chart></bar-chart>
            </div>
        </div>

        <div class="columns">
            <div class="column">
                <h3>Bubble Chart</h3>
                <bubble-chart></bubble-chart>
            </div>
            <div class="column">
                <h3>Reactivity - Live update upon change in datasets</h3>
            </div>

        </div>

        <div class="columns">
            <div class="column">
                <h3>Doughnut Chart</h3>
                <doughnut-chart></doughnut-chart>
            </div>
            <div class="column">
                <h3>Radar Chart</h3>
                <radar-chart></radar-chart>
            </div>
        </div>

        <div class="columns">
            <div class="column">
                <h3>Pie Chart</h3>
                <pie-chart></pie-chart>
            </div>


        </div>
    </section>
</template>

<script>
    import LineChart from '../components/LineChart'
    import BarChart from '../components/BarChart'
    import BubbleChart from '../components/BubbleChart'
    import DoughnutChart from '../components/DoughnutChart'
    import Reactive from '../components/Reactive'
    import RadarChart from '../components/RadarChart'
    import PieChart from '../components/PieChart'

    export default {
        name: 'VueChartJS',
        components: {
            LineChart,
            BarChart,
            BubbleChart,
            DoughnutChart,
            RadarChart,
            PieChart,
            Reactive
        }
    }
</script>