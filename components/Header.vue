<template>
    <header class="flex items-center gap-x-10 px-6  border-b border-solid  max-sm:justify-between max-sm:flex-wrap border-[#A1A6AB]">        
        <NuxtLink to="/" class="logo-link shrink-0">
            <img src="~/assets/img/logo.svg" alt="">
        </NuxtLink>
        <button class="flex flex-col justify-between w-10 h-6 sm:hidden" @click="isNav = !isNav">
            <span class="h-1 w-full bg-black rounded-sm transition-all duration-500" :class="{'-rotate-[30deg] origin-top-right': isNav}"></span>
            <span class="h-1 w-full bg-black rounded-sm transition-all duration-500" :class="{'opacity-0': isNav}"></span>
            <span class="h-1 w-full bg-black rounded-sm transition-all duration-500" :class="{'rotate-[29deg] origin-top-right': isNav}"></span>
        </button>
        <nav class="flex grow gap-5 md:gap-10 max-sm:w-full max-sm:py-3" :class="{'max-sm:hidden':!isNav } ">            
            <NuxtLink to="/Catalog" class="router-link text-sm uppercase">Каталог</NuxtLink>
            <NuxtLink to="/About" class="router-link text-sm uppercase">О нас</NuxtLink>
            <NuxtLink to="/Services" class="router-link text-sm uppercase">Услуги</NuxtLink>
               
            <div class="flex ml-auto items-center gap-2">
                <div class="text-sm uppercase text-[#003771]">ru</div>
                <div class="text-sm uppercase text-[#A2A5A8]">en</div>
                <div class="text-sm uppercase text-[#A2A5A8]">ch</div>
                
            </div>   
            <div v-if="accountStore.login">{{ accountStore.login }}</div>
            <div v-else class="flex gap-3">
                <NuxtLink to="/Login" class="router-link text-sm uppercase">Вход</NuxtLink> 
                <NuxtLink to="/Signup" class="router-link text-sm uppercase">Регистрация</NuxtLink> 
            </div>
            
        </nav>
    </header>
</template>

<script setup>
    import { useAccountStore } from "~/stores/accountStore";

    let isNav = ref();
   
    const accountStore = useAccountStore();    
</script>

<style type="text/tailwindcss">

.router-link{
    @apply flex flex-col after:w-0 after:transition-all after:duration-500 after:ease-linear after:-ml-1.5 hover:after:w-[calc(100%+12px)] after:h-[1px] after:bg-black
}
</style>