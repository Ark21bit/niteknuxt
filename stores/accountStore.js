import { defineStore } from 'pinia'


export const useAccountStore = defineStore('accountStore',{
    state:() =>({
        account:{},
    }),
    actions:{
        async getAccount() {
            await useFetch(`http://localhost:3000/accounts`).then(res=>{
                this.account = res.data.value
            })
        },
    }    
});