<template>
    <div class="flex mt-12 max-w-xl mx-auto w-full flex-col h-full">
        <h2 class="h2 mb-6 text-center">Авторизация</h2>
        <form @submit.prevent="getAccount" class="flex flex-col gap-4 md:gap-6">
            <input type="email" placeholder="Электронная почта" class="input_primary" v-model="form.email">        
            <input type="password" placeholder="Пароль" class="input_primary" v-model="form.password">
            <button type="submit" class="btn_primary w-full max-w-[306px] mt-6 m-auto max-md:mt-4" >Войти</button>
        </form>
    </div>    
</template>

<script setup>
    import { useAccountStore } from "~/stores/accountStore";
    import { useAlertStore } from "~/stores/alertStore";    

    const accountStore = useAccountStore();
    const alertStore = useAlertStore();

    const router = useRouter();
    const form = ref({});

    const getAccount = async ()=>{
        await (accountStore.getAccount(form.value.email, form.value.password));
        if (accountStore.isSuccess) {            
            router.push({ path: "/account" })
        }else{
            alertStore.type = "danger"
            alertStore.message = "произошла ошибка"
            alertStore.isAlert = true  
        }            
    }    
</script>
