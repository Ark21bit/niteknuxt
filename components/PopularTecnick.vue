<template>
    <div class="Prose-splash other_box">            
            <div class="headling wrapper">Популярная техника</div>
            <div class="catalog wrapper">
                <div class="card" v-for="n of 4">
                    <div class="img">
                        <img src="~/assets/img/image1.png" alt="">
                    </div>
                    <div class="text">
                        <div class="header">{{technics[n].title}}</div>
                        <p class="p-table" v-for="characterisitic of technics[n].characterisitics">{{characterisitic.title}} <span>{{characterisitic.value}}</span></p>   
                        <div class="btn_box">                            
                            <NuxtLink :to="`/Catalog/Product/${technics[n].id}`" class="btn_secondary">Подробнее</NuxtLink>
                            <button class="btn_primary">Заказать</button>
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
