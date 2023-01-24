<template >
    
    <TheBestOffer></TheBestOffer>
    <Breadcrumbs></Breadcrumbs>
    
    <div class="catalogs">
            <div class="headling grid-full">Аренда автокрана</div>

            <div class="filter " id="accordion"> 
                <Dropdown :title="'Подбор техники'" class="item"> 
                    <ul class="content content-link">
                        <li class="link"><a href="#">Автовышки</a></li>
                        <li class="link"><a href="#">Автокраны</a></li>
                        <li class="link"><a href="#">Экскаваторы</a></li>
                        <li class="link"><a href="#">Телескопические погрузчики</a></li>
                        <li class="link"><a href="#">Катки</a></li>
                        <li class="link"><a href="#">Манипуляторы</a></li>
                        <li class="link"><a href="#">Бульдозеры</a></li>
                        <li class="link"><a href="#">Бортовая машина</a></li>
                        <li class="link"><a href="#">Вахтовка</a></li>
                    </ul>                    
                </Dropdown>  
                <Dropdown :title="'Грузоподъёмность/тонн'">
                    <ul class="dropdown-content ">
                        <label v-for="tonnage in  filters.tonnages" :class="{'active':forms.tonnage.includes(tonnage)}"  :key="tonnage.id" class="filterLabel">{{tonnage}}<input type="checkbox" class="radio d-none" v-model="forms.tonnage" :value="tonnage"></label>                 
                    </ul>    
                </Dropdown>                
                <Dropdown :title="'Производитель'">
                    <ul class="dropdown-content ">
                        <label v-for="manufacturer in  filters.manufacturers" :class="{'active':manufacturer==forms.manufacturer}"  :key="manufacturer.id" class="filterLabel">{{manufacturer}}<input type="radio" class="radio d-none" v-model="forms.manufacturer" :value="manufacturer"></label>                            
                    </ul>    
                </Dropdown>
            </div>

            <div class="catalog">
                <div class="card" v-for="technic of technicsFilter">
                    <div class="img">
                        <img src="../assets/img/image1.png" alt="">
                    </div>
                    <div class="text">
                        <div class="header">{{technic.title}}</div>
                        <p v-for="characterisitic of technic.characterisitics">{{characterisitic.title}} <span>{{characterisitic.value}}</span></p>                        
                        <div class="btn_box">
                            <NuxtLink :to="`/Catalog/Product/${technic.id}`" class="btn_secondary">Подробнее</NuxtLink>
                            <button class="btn_primary">Заказать</button>
                        </div>                        
                    </div>
                </div>                
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
.dropdown-content{
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-top: 24px;
} 
</style>