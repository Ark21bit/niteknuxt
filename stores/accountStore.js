import { defineStore } from 'pinia'
import { useAlertStore } from "~/stores/alertStore";
    
const alertStore = useAlertStore();  

const baseUrl = "http://nitek/public/api"

export const useAccountStore = defineStore('accountStore',{
    state:() =>({
        login:null,
        api_token:null,
    }),
    actions:{        
        async getAccount(email, password, save) {
            await useFetch( `${baseUrl}/user/login`, {
                method: 'POST',
                body: {
                    password:password,
                    email:email,                    
                }
            })
            .then(res => {
                this.api_token = res.data.value.api_token
                this.login = res.data.value.login 
                const router = useRouter()
                router.push({ path: "/Account" })  

                if (save) {
                    if (process.client) {
                        localStorage.login = res.data.value.login 
                        localStorage.api_token = res.data.value.api_token 
                        localStorage.auth = true
                    }
                }
                
                              
            })
            .catch(err => {
                alertStore.type = "danger"
                alertStore.message = "Произошла ошибка"
                alertStore.isAlert = true  
            })  
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
                alertStore.type = "info"
                alertStore.message = "Успешная регистрация"
                alertStore.isAlert = true  
                const router = useRouter()
                if (process.client) {
                    localStorage.login = res.data.value.login 
                    localStorage.api_token = res.data.value.api_token 
                    localStorage.auth = true
                }
                router.push({ path: "/Account" }) 
            })
            .catch(err => {
                alertStore.type = "danger"
                alertStore.message = "При добавлении аккаунта произошла ошибка"
                alertStore.isAlert = true  
            })             
        },
        async logout() {            
            await useFetch( `${baseUrl}/user/logout`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${this.api_token}`,
                },
            })
            .then(res => {
                const router = useRouter()
                if (process.client) {
                    localStorage.login = "" 
                    localStorage.api_token = ""
                    localStorage.auth = ""
                }
                this.api_token = null
                this.login = null
                router.push({ path: "/" }) 
            })             
        },
    }    
});