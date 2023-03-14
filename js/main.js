const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Benvenuto in Vue.js!',
            image: 'https://vuejs.org/images/logo.png'
        }
    }
}).mount('#app')


/*La directive v-bind permette di  stampare un link dentro ad un attributo html in modo dinamico (ovvero generato da Vue).*/

