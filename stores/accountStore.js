import { defineStore } from 'pinia'

const baseUrl = "http://nitek/public/api"

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export const useAccountStore = defineStore('accountStore',{
    state:() =>({
        login:null,
        isSuccess:true,
        api_token:null,
    }),
    actions:{
        async getAccount(email, password) {
            await useFetch( `${baseUrl}/user/login`, {
                method: 'POST',
                body: {
                    password:password,
                    email:email
                }
            })
            .then(res => {
                this.api_token = res.data.value.api_token
                this.login = res.data.value.login
                this.isSuccess = true
            })
            .catch(err => {this.isSuccess = false})  
        },
        async addAccount(email, login, password) {            
            await useFetch( `${baseUrl}/registration`, {
                method: 'POST',
                body: {
                    email: email,
                    login: login,
                    password: password
                }
            })
            .then(res => {
                this.api_token = res.data.value.api_token
                this.login = res.data.value.login
                this.isSuccess = true
            })
            .catch(err => {this.isSuccess = false})             
        },
        async logout() {            
            await useFetch( `${baseUrl}/user/logout`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${this.api_token}`,
                },
            })
            .then(res => {
                this.api_token = null
                this.login = null
            })             
        },
    }    
});