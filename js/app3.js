const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js',
        anotherMessage: 'Vue is awesome!',
        uid: 10,
        uid: 20,
        flag: true,
    },
    methods: {
        clickBtn(){
            console.log("hi");
        },
        eventMethod(num){
            console.log("event excute ", num);
        }
    }
})