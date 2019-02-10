<template>
    <div class="section">
        <div class="container">
            <div id="app">
                <textarea rows="20" cols="100" v-model="text"></textarea>
                <br>
                <text-reader @load="text = $event"></text-reader>
                <simple-upload></simple-upload>
                <button v-on:click="count++">You clicked me {{ count }} times.</button>
                <button v-on:click="regEx">CONVERT to regEX.</button>

            </div>
        </div>
    </div>
</template>

<script>
    import SimpleUpload from './SimpleUpload.vue';
    import TextReader from "./TextReader";

    export default {
        name: "App",
        data: () => ({ text: "" ,regularExpression: "", count : 0}),
        components: {SimpleUpload, TextReader},
        methods:{
            regEx: function () {

                let reggie = new RegExp(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})/mgi);
                console.log("yo");
                let fisfis = "201811090310".match(reggie);
                console.log(fisfis);
                console.log("yo2");
                let url = this.text.toString();
                let hej;
                //(?:(?:.*))
                hej = new RegExp(/(Glucose\|\d+\.\d)(?:([^:]*))(20\d{10})/mgi);
                let heej;
                heej = new RegExp(/((?<=Glucose\|)\d+\.\d)/mgi);
                let yo2;
                let heej2;
                // ||201811090310<CR>
                heej2 = new RegExp(/(?:|)(?:|)(20\d{10})(?=(<CR>))/mgi);
                yo2 = url.match(heej);
                let yo3;
                yo3 = url.match(heej2);
                console.log(yo3.length);
                console.log(yo2.length);
                console.log(yo2);
                console.log(yo3);
                // Glucose|6.2|mmol
                //let hej2 = new RegExp(/20[0-9]{10}/mgi)
                //let example = "Read on port: \\\\?\\hid#vid_1a79&pid_7410&mi_00#7&2b31b1d0&0&0000#{4d1e55b2-f16f-11cf-88cb-001111000030}<STX>4R|1706|^^^Glucose|16.2|mmol/L^P||F/M0/T1||201811090310<CR><ETB>B8<CR><LF>Read on port: \\\\\\\\?\\\\hid#vid_1a79&pid_7410&mi_00#7&2b31b1d0&0&0000#{4d1e55b2-f16f-11cf-88cb-001111000030}<STX>4R|1706|^^^Glucose|6.9|mmol/L^P||F/M0/T1||201711090221<CR><ETB>B8<CR><LF>\""
                // let re = new RegExp('Glucose');
                // this.text = this.text.match(hej);

                let yo;
                //let yo2;
                //let test;
                //test = hej2.exec(url)
                // let hej3 = new RegExp(/20[0-9]{10}/mgi)

                yo = url.match(hej)
                console.log(yo)
                let hej2;
                hej2 = new RegExp(/20[0-9]{10}/mgi)
                //yo2 = url.match(hej2)
                let blood_sugar_dict = {};
                blood_sugar_dict = yo3.reduce((obj, k, i) => ({...obj, [k]: yo2[i] }), {})


                console.log(blood_sugar_dict)
            }
        }
    }
</script>