<template>
    <div class="flex mt-12 max-w-xl mx-auto w-full flex-col h-full">
        <h2 class="h2 mb-6 text-center">Регистрация</h2>
        <form @click.prevent="addAccount" class="flex flex-col gap-4 md:gap-6">
            <input type="email" placeholder="Электронная почта" class="input_primary">        
            <input type="text" placeholder="Логин" class="input_primary">
            <input type="password" placeholder="Пароль" class="input_primary">
            <button type="submit"  class="btn_primary w-full max-w-[306px] mt-6 m-auto max-md:mt-4" >Зарегистрироваться</button>
        </form>
    </div>    
</template>
<script setup>
    import { useAccountStore } from "~/stores/accountStore";

    const accountStore = useAccountStore();

    const addAccount = ()=>{
        accountStore.addAccount("email", "login", "password");
    }
    
</script>
