
<template>
  <div id="app">

    <div id="nav">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/chartjs">vue-chartjs</router-link></li>
        <li><router-link to="/charts">vue-charts</router-link></li>
        <li><router-link to="/chartkick">vue-chartkick</router-link></li>
      </ul>
    </div>
    <textarea rows="20" cols="100" v-model="text"></textarea>
    <br>
    <text-reader @load="text = $event"></text-reader>
    <button  v-on:click="regEx">CONVERT to regEX.</button>
    <router-view />
  </div>
</template>

<script>
  import TextReader from "./TextReader";
  export default {
    name: "App",
    data: () => ({
      text: "" ,
      regularExpression: "",
      blood_sugar_dict:{},

      glucose_match: [],
      date_match: []
    }),

    components: {TextReader},

    methods:{
      regEx: function () {
        console.log(this.text)
        // let glucose_regex = new RegExp(/((?<=Glucose\|)\d+\.\d)/mgi);
        // let date_regex = new RegExp(/(?:|)(?:|)(20\d{10})(?=(<CR>))/mgi);
        // this.glucose_match = this.text.match(glucose_regex);
        // this.date_match = this.text.match(date_regex);
        // let blood_sugar_dict;
        //
        // for (let i = 0; i<this.date_match.length; i++) {
        //   this.date_match[i] = this.insert(this.date_match[i], 4, "-")
        //   this.date_match[i] = this.insert(this.date_match[i], 7, "-")
        //   this.date_match[i] = this.insert(this.date_match[i], 10, " ")
        //   this.date_match[i] = this.insert(this.date_match[i], 13, ":")
        //   this.date_match[i] = new Date(this.date_match[i])
        // }
        // blood_sugar_dict = this.date_match.reduce((obj, k, i) => ({...obj, [k]: this.glucose_match[i] }), {})
        //
        // for (const [key, value] of Object.entries(blood_sugar_dict)){
        //   this.blood_sugar_dict[key] = value;
        // }

      },
      insert(str, index, value) {
        return str.substr(0, index) + value + str.substr(index);
      }
    }
  }
</script>