<script>
    //Importing Bar class from the vue-chartjs wrapper
    import { Bar } from 'vue-chartjs'
    //Exporting this so it can be used in other components
    export default {
        extends: Bar,
        data () {
            return {
                datacollection: {
                    //Data to be represented on x-axis
                    labels: ['PTHREADS', 'OMP', 'VECTOR'],
                    datasets: [
                        {
                            label: 'Scenario box',
                            backgroundColor: '#5C89C7',
                            pointBackgroundColor: 'white',
                            borderWidth: 1,
                            pointBorderColor: '#249EBF',
                            //Data to be represented on y-axis
                            data: [0.00114767, 0.15,2]
                        }
                    ]
                },
                //Chart.js options that controls the appearance of the chart
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
                        xAxes: [ {
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
                }
            }
        },
        mounted () {
            //renderChart function renders the chart with the datacollection and options object.
            this.renderChart(this.datacollection, this.options)
        }
    }
</script>