<template>
    <div class=" grid-full Prose bg-[#EEF2F4] pt-8 md:pt-16 pb-4 md:pb-8">        
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 ">
            <h2 class="h2 md:mb-12 uppercase grid-full">Аренда спецтехники</h2>  
            <NuxtLink v-for="category in categorys" :to="path=`/Catalog?category=${category.id}`" class="flex flex-col p-5 bg-white rounded-2xl shadow-[0_4px_15px_0_rgba(0,0,0,0.1)]">
                <div class="mb-5 self-center max-md:hidden w-full"><img :src="`/img/auto/${category.img}`" class="aspect-video h-28 object-contain mx-auto" alt=""></div>
                <p class="text-lg font-bold">{{category.title}}</p>
                <p class=" font-light text-[#7A7A7A]">от 2000 ₽/час </p>
            </NuxtLink>
            
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 mt-2 md:mt-4 mb-4 md:mb-8">
        <h2 class="h2 md:mb-8 uppercase grid-full">Последние проекты</h2>  
        <div class="flex flex-col bg-white shadow-[0_4px_35px_0_rgba(0,0,0,0.1)] rounded-lg">
            <div class="self-center max-md:hidden aspect-[4/3]" ><img src="~/assets/img/project1.png" class="aspect-[4/3] object-cover w-full" alt=""></div>
            <div class="p-6">
                <p class="text-xl font-bold">Амурский ГПЗ вахтовый посёлок, г. Свободный</p>
                <p class=" font-light text-sm mt-4">Компания «НИТЭК» предоставила технику для строительства общественно-делового комплекса «Лахта Центр»</p>
            </div>
        </div>                
        <div class="flex flex-col bg-white shadow-[0_4px_35px_0_rgba(0,0,0,0.1)] rounded-lg">
            <div class="self-center max-md:hidden aspect-[4/3]" ><img src="~/assets/img/project1.png" class="aspect-[4/3] object-cover w-full" alt=""></div>
            <div class="p-6">
                <p class="text-xl font-bold">Амурский ГПЗ вахтовый посёлок, г. Свободный</p>
                <p class=" font-light text-sm mt-4">Компания «НИТЭК» предоставила технику для строительства общественно-делового комплекса «Лахта Центр»</p>
            </div>
        </div>                
        <div class="flex flex-col bg-white shadow-[0_4px_35px_0_rgba(0,0,0,0.1)] rounded-lg">
            <div class="self-center max-md:hidden aspect-[4/3]" ><img src="~/assets/img/project1.png" class="aspect-[4/3] object-cover w-full" alt=""></div>
            <div class="p-6">
                <p class="text-xl font-bold">Амурский ГПЗ вахтовый посёлок, г. Свободный</p>
                <p class=" font-light text-sm mt-4">Компания «НИТЭК» предоставила технику для строительства общественно-делового комплекса «Лахта Центр»</p>
            </div>
        </div>                
     </div>  
    <PopularTecnick/>
    <Advantages/>
    <Partners/>
    <AboutUs/>

</template>

<script setup>  
    useHead({
        title:"Аренда спецтехники",
        meta:[        
            {name:"description", content:"Спецтехника в аренду по всей России. Услуги аренды строительной техники."},
            {name:"keywords", content:"спецтехника, купить спецтехнику, аренда спецтехники, спецтехника россия"},
        ],   
    })

    const config = useRuntimeConfig() 
    let categorys = ref({});
    await useFetch(`${config.public.apiBase}/categorys`).then(res=>{
        categorys.value = res.data.value      
        if (route.query.category) {
            forms.value.categorys = route.query.category
        }else{
            forms.value.categorys = res.data.value.map(x=>{return x.id})        
        }
    }).catch(err=>{
        console.log(err)
    })
</script>