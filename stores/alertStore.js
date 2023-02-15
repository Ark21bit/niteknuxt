import { defineStore } from 'pinia'



export const useAlertStore = defineStore('alertStore',{
    state:() =>({        
        message: null,
        isAlert:false,
        type:null,
        
    })    
});