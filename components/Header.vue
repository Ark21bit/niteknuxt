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
        <div class="flex grow gap-5 md:gap-10 max-sm:w-full max-sm:py-3" :class="{'max-sm:hidden':!isNav } ">            
            <NuxtLink to="/" class="text-sm uppercase">Каталог</NuxtLink>
            <NuxtLink to="/" class="text-sm uppercase">Аренда</NuxtLink>
            <NuxtLink to="/" class="text-sm uppercase">Услуги</NuxtLink>
            <NuxtLink to="/" class="text-sm uppercase">Вход</NuxtLink>     
            <div class="flex ml-auto gap-2">
                <div class="text-sm uppercase text-[#003771]">ru</div>
                <div class="text-sm uppercase text-[#A2A5A8]">en</div>
                <div class="text-sm uppercase text-[#A2A5A8]">ch</div>
            </div>   
        </div>
    </header>
</template>

<script setup>
    let isNav = ref();
</script>

