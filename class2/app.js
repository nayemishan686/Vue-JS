new Vue({
    el: '#method',
    data:{
        myName : 'Nayem Hossain Ishan',
        learning: 'I am learning Vue JS right now'
    },
    methods:{
        AboutYou(){
            return `My Name is ${this.myName}`
        },

        MyAge(age){
            return `My age is ${age}`
        }
    }
})