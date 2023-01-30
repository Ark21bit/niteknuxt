<template >
    
    <TheBestOffer></TheBestOffer>
    <Breadcrumbs></Breadcrumbs>
    
    <div class="catalogs grid max-md:grid-cols-1 pt-7 md:pt-0 gap-6 pb-10 md:pb-20">
            <div class="h1 capitalize mb-3.5 md:mb-14 grid-full">Аренда автокрана</div>

            <div class="flex flex-col gap-5 md:gap-10 mt-0.5 " id="accordion"> 
                <Dropdown :title="'Подбор техники'"> 
                    <ul class="flex flex-wrap gap-1 pt-6 flex-col ">
                        <li class="p-4 bg-[#F2F4F6] font-light text-base"><a href="#">Автовышки</a></li>
                        <li class="p-4 bg-[#F2F4F6] font-light text-base"><a href="#">Автокраны</a></li>
                        <li class="p-4 bg-[#F2F4F6] font-light text-base"><a href="#">Экскаваторы</a></li>
                        <li class="p-4 bg-[#F2F4F6] font-light text-base"><a href="#">Телескопические погрузчики</a></li>
                        <li class="p-4 bg-[#F2F4F6] font-light text-base"><a href="#">Катки</a></li>
                        <li class="p-4 bg-[#F2F4F6] font-light text-base"><a href="#">Манипуляторы</a></li>
                        <li class="p-4 bg-[#F2F4F6] font-light text-base"><a href="#">Бульдозеры</a></li>
                        <li class="p-4 bg-[#F2F4F6] font-light text-base"><a href="#">Бортовая машина</a></li>
                        <li class="p-4 bg-[#F2F4F6] font-light text-base"><a href="#">Вахтовка</a></li>
                    </ul>  
                </Dropdown>  
                <Dropdown :title="'Грузоподъёмность/тонн'">
                    <ul class="flex gap-2 flex-wrap pt-6 ">
                        <label v-for="tonnage in  filters.tonnages" :class="{'bg-[#fff] border-[#000]':forms.tonnage.includes(tonnage), 'bg-[#F2F4F6] border-transparent':!forms.tonnage.includes(tonnage)}"  :key="tonnage.id" class="border  border-solid flex p-4  rounded-lg w-fit cursor-pointer font-light text-base">{{tonnage}}<input type="checkbox" class="hidden" v-model="forms.tonnage" :value="tonnage"></label>                 
                    </ul>    
                </Dropdown>                
                <Dropdown :title="'Производитель'">
                    <ul class="flex gap-2 flex-wrap pt-6 ">
                        <label v-for="manufacturer in  filters.manufacturers" :class="{'bg-[#fff] border border-solid border-black p-4':forms.tonnage.includes(tonnage)}" :key="manufacturer.id" class="border-transparent border border-solid flex p-4 bg-[#F2F4F6] rounded-lg w-fit cursor-pointer font-light text-base">{{manufacturer}}<input type="radio" class="hidden" v-model="forms.manufacturer" :value="manufacturer"></label>                            
                    </ul>    
                </Dropdown>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-y-6 gap-x-6 h-fit md:gap-y-4 wrapper">
                <transition-group name="size">
                    <div class="px-1.5 pb-3 md:p-3 pt-0 bg-white shadow-[0_4px_30px_0_rgba(0,0,0,0.1)] rounded-lg font-light text-sm " v-for="technic of technicsFilter" :key="technic.id">
                        <div class="text-center">
                            <img src="../assets/img/image1.png" alt="">
                        </div>
                        <div class="p-3">
                            <div class="mb-4 font-bold text-base text-black">{{technic.title}}</div>
                            <p class="flex gap-2 justify-between" v-for="characterisitic of technic.characterisitics">{{characterisitic.title}} <span>{{characterisitic.value}}</span></p>                        
                            <div class="mt-4 flex gap-2 flex-wrap">
                                <NuxtLink :to="`/Catalog/Product/${technic.id}`" class="btn_secondary flex-1">Подробнее</NuxtLink>
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
    
    /* блок обработки фильтров */
    let forms = ref({"tonnage": []})
    let filters = ref({})
    await useFetch('http://localhost:3000/filters').then(res=>{
        filters.value = res.data.value
        forms.value.tonnage = res.data.value.tonnages
    })

    let technicsFilter = computed(()=>{
        return technics.value.filter((a)=>{return forms.value.tonnage.includes(a.characterisitics[2].value)})
    })

    /* блок обработки */
    
    let technics = ref({})
    await useFetch('http://localhost:3000/technics').then(res=>{
        technics.value = res.data.value
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