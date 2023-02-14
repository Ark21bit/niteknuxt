<template>   
    <main class="flex my-auto auto-rows-auto bg-[url(~/assets/img/bg_404.svg)] bg-no-repeat bg-right-bottom">
        <div class="flex items-center mx-auto gap-y-5 max-w-[306px] text-center flex-col md:-translate-x-1/2 mt-32">
            <p class="text-7xl font-black text-[#009DD9]">404</p>        
            <p class="text-2xl font-black text-[#003771]">Извините, страница которую вы ищите отсутствует!</p>        
            <p class="text-black text-base">Веб-страница могла быть удалена, ссылка могла быть изменена или временно недоступна.</p>
            <NuxtLink to="/" class="btn_secondary w-full">Вернуться на главную</NuxtLink>        
        </div>
    </main>   
 
</template>

<script setup>

</script>

<style scoped>

</style>