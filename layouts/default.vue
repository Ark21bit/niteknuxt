<template>    
    <Header @click="errorStore.isAlert = true" ></Header>
    <main class="Prose">
        <NuxtPage/>
    </main>
    <Footer/>
    <Transition >
        <Alert v-if="isAlert" :type="alertStore.type" class="fixed top-0 left-0 w-full ">{{ alertStore.message }}</Alert> 
    </Transition>   
</template>

<script setup>
import { useAlertStore } from "~/stores/alertStore";
import { useAccountStore } from "~/stores/accountStore";  
import { Alert } from 'flowbite-vue'

const alertStore = useAlertStore();
const accountStore = useAccountStore();
let isAlert = ref(false);

alertStore.$subscribe((mutation, state) => {
    isAlert.value = true

    setTimeout(() => {
        isAlert.value = false
        alertStore.isAlert = false
    }, 5000) 
})



</script>

<style>
    .v-enter-active,
    .v-leave-active {
      transition: transform 0.5s linear;
    }

    .v-enter-from,
    .v-leave-to {
      transform: translateY(-100%);
    }
</style>