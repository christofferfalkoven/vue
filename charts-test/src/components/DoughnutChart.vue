<script>
    import { Doughnut } from 'vue-chartjs'

    export default {
        extends: Doughnut,
        data () {
            return {
                datacollection: {
                    //Data to be represented on x-axis
                    labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
                    datasets: [
                        {

                            label: 'Scenario box',
                            backgroundColor: [
                                '#41B883',
                                '#E46651',
                                '#00D8FF',
                                '#f87979',
                            ],
                            pointBackgroundColor: 'white',
                            borderWidth: 1,
                            pointBorderColor: '#249EBF',
                            //Data to be represented on y-axis
                            data: [40, 20, 80, 10]
                        }
                    ]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            },
                            gridLines: {
                                display: true
                            }
                        }],
                        xAxes: [{
                            gridLines: {
                                display: false
                            }
                        }]
                    },
                    legend: {
                        display: true
                    },
                    responsive: true,
                    maintainAspectRatio: false
                },
            }
        },
        mounted () {
            this.renderChart(this.datacollection, this.options)
        }
    }
</script>