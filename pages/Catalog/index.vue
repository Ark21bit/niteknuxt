<template >
    
    <TheBestOffer></TheBestOffer>
    <Breadcrumbs></Breadcrumbs>
    
    <div class="catalogs grid max-md:grid-cols-1 pt-7 md:pt-0 gap-6 pb-10 md:pb-20">
            <h2 class="h1 capitalize mb-3.5 md:mb-14 grid-full">Аренда Спецтехники</h2>

            <div class="flex flex-col gap-5 md:gap-10 mt-0.5 " id="accordion"> 
                <Dropdown :title="'Подбор техники'"> 
                    <div class="flex flex-wrap gap-1 pt-6 flex-col ">
                        <label v-for="category in categorys" class="p-4 font-light text-base rounded border"
                        :class="{'bg-[#fff]  border-[#000]':forms.categorys.includes(category.id), 'bg-[#F2F4F6] border-transparent':!forms.categorys.includes(category.id)}">                            
                            {{category.title}}
                            <input type="checkbox" class="hidden" v-model="forms.categorys" :value="category.id">
                        </label>                       
                    </div>  
                </Dropdown>  
                <Dropdown :title="'Грузоподъёмность/тонн'">
                    <div class="flex gap-2 flex-wrap pt-6 " v-if="filters.tonnages">
                        <label  v-for="tonnage in  filters.tonnages" :class="{'bg-[#fff] border-[#000]':forms.tonnage.includes(tonnage), 'bg-[#F2F4F6] border-transparent':!forms.tonnage.includes(tonnage)}"  :key="tonnage.id" class="border  border-solid flex p-4  rounded-lg w-fit cursor-pointer font-light text-base">{{tonnage}}<input type="checkbox" class="hidden" v-model="forms.tonnage" :value="tonnage"></label>                 
                    </div>    
                </Dropdown>                
                <Dropdown :title="'Производитель'">
                    <div class="flex gap-2 flex-wrap pt-6 " v-if="filters.manufacturers">
                        <label v-for="manufacturer in  filters.manufacturers" :class="{'bg-[#fff] border border-solid border-black p-4':true}" :key="manufacturer.id" class="border-transparent border border-solid flex p-4 bg-[#F2F4F6] rounded-lg w-fit cursor-pointer font-light text-base">{{manufacturer}}<input type="radio" class="hidden" v-model="forms.manufacturer" :value="manufacturer"></label>                            
                    </div>    
                </Dropdown>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-y-6 gap-x-6 h-fit md:gap-y-4 wrapper">
                <transition-group name="size">
                    <div class="px-1.5 pb-3 md:p-3 pt-0 bg-white shadow-[0_4px_30px_0_rgba(0,0,0,0.1)] rounded-lg font-light text-sm " v-for="technic of technicsFilter" :key="technic.id">
                        <div class="text-center">
                            <img src="~/assets/img/image1.png" alt="">
                        </div>
                        <div class="p-3">
                            <h3 class="mb-4 font-bold text-base text-black">{{technic.title}}</h3>
                            <p class="flex gap-2 justify-between" v-for="characterisitic of technic.characterisitics">{{characterisitic.title}} <span>{{characterisitic.value}}</span></p>                        
                            <div class="mt-4 flex gap-2 flex-wrap">
                                <NuxtLink :to="`/Catalog/${technic.id}`" class="btn_secondary flex-1">Подробнее</NuxtLink>
                                <button class="btn_primary flex-1">Заказать</button>
                            </div>                        
                        </div>
                    </div>  
                </transition-group >              
            </div>
        </div>
    <Advantages></Advantages>
    <Partners></Partners>    
</template>

<script setup>   

    useHead({
        title:"Каталог",
        meta:[        
            {name:"description", content:"Аренда спецтехники от собственника. Услуги аренды автовышки для строительных и монтажных работат. Автовышки 28,32,45 и 75 метров;"},
            {name:"keywords", content:"каталог товаров спецтехники, купить спецтехнику, аренда спецтехники"},
        ],   
    })

    const config = useRuntimeConfig()
    const route = useRoute()    

    /* блок обработки фильтров */
    let forms = ref({"tonnage": [], "categorys": []})
    let filters = ref({})
    await useFetch(`${config.public.apiBase}/filters`).then(res=>{
        filters.value = res.data.value
        forms.value.tonnage = res.data.value.tonnages
    })

    let technicsFilter = computed(()=>{
        return technics.value
        .filter((a)=>{return forms.value.tonnage.includes(a.characterisitics[2].value)})
        .filter((a)=>{return forms.value.categorys.includes(a.category_id)})        
    })

    /* блок обработки */
    
    let technics = ref({})
    await useFetch(`${config.public.apiBase}/technics`).then(res=>{
        technics.value = res.data.value
    })

    let categorys = ref({});
    await useFetch(`${config.public.apiBase}/categorys`).then(res=>{
        categorys.value = res.data.value        
        forms.value.categorys = res.data.value.map(x=>{return x.id})        
    })



</script>

<style>
.size-enter-active,
    .size-leave-active {
      transition: all 0.5s ease;
    }
    .size-enter-from,
    .size-leave-to {
      transform: scale(0);
    }
</style>