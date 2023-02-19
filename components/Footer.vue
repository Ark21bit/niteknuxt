<template>
    <footer class="Prose bg-[#F3F5F9] p-12 mt-6 border-t border-black">
        <div>
            <div class="flex max-md:flex-col gap-4 justify-between">
                <div class="flex flex-col gap-4 text-xl text-[#26263A]">
                    <div class="flex flex-col gap-1">
                        <a href="tel:+79311062361">+7 931 106 23 61</a>
                        <p class="text-xs">Аренда спецтехники</p>
                    </div>
                    <div class="flex flex-col gap-1">
                        <a href="tel:+7(831)217-00-08">+7 (831) 217-00-08</a>
                        <p class="text-xs">Отдел персонала</p>
                    </div>                    
                </div>
                <div class="flex gap-5 md:gap-10 max-sm:w-full max-sm:py-3">
                    <NuxtLink to="/Catalog" class="router-link text-sm uppercase">Каталог</NuxtLink>
                    <NuxtLink to="/About" class="router-link text-sm uppercase">О нас</NuxtLink>
                    <NuxtLink to="/Services" class="router-link text-sm uppercase">Услуги</NuxtLink>                    
                </div>
            </div>
            <div class="flex md:gap-4 gap-2 mt-6">
                <a href="#"><img class="hover:brightness-0 transition ease-linear duration-500" src="~/assets/img/icons/ok.svg" alt=""></a>
                <a href="#"><img class="hover:brightness-0 transition ease-linear duration-500" src="~/assets/img/icons/dsen.svg" alt=""></a>
                <a href="#"><img class="hover:brightness-0 transition ease-linear duration-500" src="~/assets/img/icons/telegram.svg" alt=""></a>
                <a href="#"><img class="hover:brightness-0 transition ease-linear duration-500" src="~/assets/img/icons/vk.svg" alt=""></a>
                <a href="#"><img class="hover:brightness-0 transition ease-linear duration-500" src="~/assets/img/icons/youtube.svg" alt=""></a>
            </div>            
            <div class="pt-6 border-t border-[#CCCCD1] mt-6">
                <p>© 2023 ООО “НИТЭК”. Все права защищены</p>                
            </div>
        </div>
    </footer>
</template>

<script setup>

</script>

