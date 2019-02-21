<template>
<div>
    <template >
        <div>
            <button v-on:click="handle_click_chart" >Show this shit</button>
        </div>
        <div v-show="dspl">
            <chartjs-doughnut v-bind:labels="labels"  v-bind:datasets="datasets" v-bind:option="option"></chartjs-doughnut>
            <!--<button v-on:click="printshit">Show this shit</button>-->

        </div>

    </template>

</div>
</template>

<script>

//import Vue from 'vue';
export default {
    data: function(){
        return {
            dspl: false,
            num_of_low:3,
            num_of_high:2,
            num_of_good:1,
            labels: ["Low values", "High values", "In range"],
            datasets: [{
                //data: [1,0,0],
                //data: [num_of_low, num_of_high, num_of_good],
                data: [],
                backgroundColor: ["Red", "Yellow", "Blue"],
            }],
            option: {
                title: {
                    display: true,
                    position: 'bottom',
                    text: 'Blood sugar'
                }
            }
        }
    },
    created:function() {
        this.get_good();
        this.get_high();
        this.get_low();
    },
    methods: {

        handle_click_chart: function () {
            this.dspl ^= true;

        },
        get_low: function () {
            //console.log(this.num_of_low);
            //return this.num_of_low;
            this.datasets.push(1)
        },
        get_high: function () {
            //console.log(this.num_of_high);
            //return this.num_of_high;
            this.datasets.push(5)

        },
        get_good: function () {
            //console.log(this.num_of_good);
            //return this.num_of_good
            this.datasets.push(3)

        }
    }
};
</script>

//
//     export default {
//     data() {
//         return {
//             dspl: false,
//             labels: ["Low values", "High values", "In range"],
//             datasets: [{
//                 data: [19, 30, 50.42],
//                 //data: [this.$parent.num_of_low, this.$parent.num_of_high, this.$parent.num_of_good],
//                 //data: [this.$parent.num_of_low, this.$parent.num_of_high, this.$parent.num_of_good],
//                 //data:[],
//                 //data:[],
//                 //props: ['num_of_low', 'num_of_high', 'num_of_good'],
//                 //data:[this.num_of_low, this.num_of_high, this.num_of_good],
//                 //data:[this.get_low, this.get_high, this.get_good],
//                 backgroundColor: ["Red", "Yellow", "Blue"],
//             }],
//             option: {
//                 title: {
//                     display: true,
//                     position: 'bottom',
//                     text: 'Fruits'
//                 }
//             },
//
//         };
//     },
//     props: ['num_of_low', 'num_of_high', 'num_of_good'],
//     methods:{
//         handle_click_chart: function(){
//             this.dspl ^= true;
//             //console.log(this.datasets)
//             //this.$refs.component1.open
//             this.get_low();
//             this.get_high();
//             this.get_good();
//         },
//         printshit: function () {
//             console.log(this.$parent.num_of_low);
//             console.log(this.$parent.num_of_high);
//             console.log(this.$parent.num_of_good);
//         },
//         get_low:function () {
//             console.log(this.$parent.num_of_low)
//             return [this.$parent.$refs.num_of_low];
//         },
//         get_high:function () {
//             console.log(this.$parent.num_of_high)
//             return this.$parent.$refs.num_of_high;
//         },
//         get_good: function () {
//             console.log(this.$parent.num_of_good)
//
//             return this.$parent.$refs.num_of_good
//
//         }
//     }
// };