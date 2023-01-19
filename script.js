console.log('vue ok', Vue);

const app = Vue.createApp({

    data() {
        return {
            emailList: [],
            numberOfEmail: 10
        }
    },

    methods: {
        
        getEmailAddresses(numberOfEmail){
            for(i=0; i < numberOfEmail; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then( response => {
                    const email = response.data.response;
                    this.emailList.push(email);
                })
            }
        },
        

    },

    mounted() {
        this.getEmailAddresses(this.numberOfEmail);
    },
        
 });

app.mount('#root');