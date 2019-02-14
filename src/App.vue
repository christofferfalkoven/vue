<template>
    <div class="section">
        <div class="container">
            <div id="app">
                <textarea rows="20" cols="100" v-model="text"></textarea>
                <br>
                <text-reader @load="text = $event"></text-reader>
                <simple-upload></simple-upload>
                <button v-on:click="count++">You clicked me {{ count }} times.</button>


            </div>

            <button  v-on:click="regEx">CONVERT to regEX.</button>
            <chart-test>

            </chart-test>
        </div>
    </div>
</template>

<script>
    import SimpleUpload from './SimpleUpload.vue';
    import TextReader from "./TextReader";
    import ChartTest from "./ChartTest";


    export default {
        name: "App",
        data: () => ({
            text: "" ,
            regularExpression: "",
            count : 0,
            blood_sugar_dict:{},
            num_of_low:0,
            num_of_high:0,
            num_of_good:0
        }),

        components: {SimpleUpload, TextReader, ChartTest},

        methods:{
            regEx: function () {

                let glucose_regex = new RegExp(/((?<=Glucose\|)\d+\.\d)/mgi);
                let date_regex = new RegExp(/(?:|)(?:|)(20\d{10})(?=(<CR>))/mgi);
                let glucose_match = this.text.match(glucose_regex);
                let date_match = this.text.match(date_regex);
                let blood_sugar_dict;

                this.num_of_low = 0;
                this.num_of_high = 0;
                this.num_of_good = 0;
                for(let i = 0; i<glucose_match.length; i++){
                    if (glucose_match[i] < 4){
                        this.num_of_low += 1;
                    }
                    if (glucose_match[i] > 13){
                        this.num_of_high += 1;
                    }
                    else{
                        this.num_of_good += 1;
                    }
                }


                for (let i = 0; i<date_match.length; i++) {
                    date_match[i] = this.insert(date_match[i], 4, "-")
                    date_match[i] = this.insert(date_match[i], 7, "-")
                    date_match[i] = this.insert(date_match[i], 10, " ")
                    date_match[i] = this.insert(date_match[i], 13, ":")
                    date_match[i] = new Date(date_match[i])
                }
                //this.text= date_match.reduce((obj, k, i) => ({...obj, [k]: glucose_match[i] }), {})
                blood_sugar_dict = date_match.reduce((obj, k, i) => ({...obj, [k]: glucose_match[i] }), {})

                //this.blood_sugar_dict = blood_sugar_dict
                //console.log(blood_sugar_dict)
                //for (let i = 0; blood_sugar_dict.length(); i++)
                for (const [key, value] of Object.entries(blood_sugar_dict)){
                    this.blood_sugar_dict[key] = value;
                }
                //this.$refs.myComponent.data = [this.num_of_low, this.num_of_high, this.num_of_good];
                //console.log(this.blood_sugar_dict)
               // console.log(blood_sugar_dict)
                //console.
                //this.blood_sugar_dict =
            },
            insert(str, index, value) {
                return str.substr(0, index) + value + str.substr(index);
            }
        }
    }
</script>