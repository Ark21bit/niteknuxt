import { defineStore } from 'pinia'


export const useAccountStore = defineStore('accountStore',{
    state:() =>({
        account:{"adasd":"dasd"},
    }),
    actions:{
        async getAccount() {
            await useFetch(`http://localhost:3000/accounts`).then(res=>{
                this.account = res.data.value
            })
        },
    }    
});