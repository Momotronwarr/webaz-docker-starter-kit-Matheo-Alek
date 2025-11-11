Vue.createApp({
  data() {

    return {
      triche : false
    };
  },
  computed: {
    message_triche(){
        if (this.triche != false) {
      return "Ça va t'attraper estpèce de gros ticheur"
    }
    
  },
},

methods: {
  
}
}).mount('#app');