<template>
    <div class="flex mt-12 max-w-xl mx-auto w-full flex-col h-full">
        <h2 class="h2 mb-6 text-center">Авторизация</h2>
        <form @submit.prevent="getAccount" class="flex flex-col gap-4 md:gap-6">
            <input type="email" placeholder="Электронная почта" class="input_primary" v-model="form.email">        
            <input type="password" placeholder="Пароль" class="input_primary" v-model="form.password">
            <label for=""><input type="checkbox" v-model="form.save"> запомнить меня</label>
            <button type="submit" class="btn_primary w-full max-w-[306px] mt-6 m-auto max-md:mt-4" >Войти</button>
        </form>
    </div>    
</template>

<script setup>
    import { useAccountStore } from "~/stores/accountStore";   

    const accountStore = useAccountStore();
    
    const form = ref({email:"user@mail.ru", password:"user12"});

    const getAccount = async ()=>{
        await accountStore.getAccount(form.value.email, form.value.password, form.value.save);                 
    }    
</script>
