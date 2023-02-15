import { defineStore } from 'pinia'

const baseUrl = "http://localhost:3000"

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export const useAccountStore = defineStore('accountStore',{
    state:() =>({
        login:null,
        id:null,
        isSuccess:true,
    }),
    actions:{
        async getAccount(email, password) {
            await useFetch(`http://localhost:3000/accounts?email=${email}&password=${password}`).then(res=>{
                console.log(res.data.value)
                this.login = res.data.value[0].login
                this.id = res.data.value[0].id
            }).catch(err => console.log(err))
        },
        async addAccount(email, login, password) {            
            await useFetch( 'http://localhost:3000/accounts', {
                method: 'POST',
                body: {
                    id: Math.round(Math.random() * 100000000),
                    email: email,
                    login: login,
                    password: password
                }
            })
            .then(res => {
                this.getAccount(email, password)
                this.isSuccess = true
            })
            .catch(err => {this.isSuccess = false})             
        },
    }    
});