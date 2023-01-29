<template>
    <div class="Prose-splash other_box pt-20 pb-12 md:py-24">            
            <div class="headling mb-6 font-bold text-base wrapper max-md:hidden">Популярная техника</div>
            <div class="catalog grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-y-6 gap-x-6 h-fit md:gap-y-4 wrapper">
                <div class="card px-1.5 pb-3 md:p-3 pt-0 bg-white shadow-[0_4px_30px_0_rgba(0,0,0,0.1)] rounded-lg font-light text-sm " v-for="n of 4">
                    <div class="text-center">
                        <img src="~/assets/img/image1.png" alt="">
                    </div>
                    <div class="text p-3">
                        <div class="header mb-4 font-bold text-base text-black">{{technics[n].title}}</div>
                        <p class="flex gap-2 justify-between" v-for="characterisitic of technics[n].characterisitics">{{characterisitic.title}} <span>{{characterisitic.value}}</span></p>   
                        <div class="mt-4 flex gap-2 flex-wrap">                            
                            <NuxtLink :to="`/Catalog/Product/${technics[n].id}`" class="btn_secondary flex-1">Подробнее</NuxtLink>
                            <button class="btn_primary flex-1">Заказать</button>
                        </div>                        
                    </div>
                </div>                
            </div>
        </div>
</template>

<script setup>
    let technics = ref({})
    await useFetch('http://localhost:3000/technics').then(res=>{
        technics.value = res.data.value
    })
</script>
