import { defineStore } from 'pinia'


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
    }    
});