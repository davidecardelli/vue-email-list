console.log('vue ok', Vue);

const app = Vue.createApp({

    data() {
        return {
            emailList: [],
            numberOfEmail: 10
        }
    },
    methods: {       
        getRandomMail(numberOfEmail) {
            for(i=0; i < numberOfEmail; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then( res => {
                    const email = res.data.response;
                    this.emailList.push(email);
                })
            }
        },     
    },
    mounted() {
        this.getRandomMail(this.numberOfEmail);
    },       
 });

app.mount('#root');