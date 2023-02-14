import { defineStore } from 'pinia'

const baseUrl = "http://localhost:3000"

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export const useAccountStore = defineStore('accountStore',{
    state:() =>({
        account:{},
    }),
    actions:{
        async getAccount() {
            await useFetch(`https://vast-red-dove-kit.cyclic.app/accounts`).then(res=>{
                this.account = res.data.value
            })
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
            });
        },
    }    
});