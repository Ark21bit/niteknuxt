<template>

        <Breadcrumbs></Breadcrumbs>

        <div class="products mb-9">
            <h2 class="font-bold text-4xl md:text-5xl mb-7 md:mb-12">{{ technic.title }}</h2>
            <div class="flex gap-7 flex-wrap justify-center font-light text-base text-[#26263A]">
                <div class="galerey max-w-[590px] w-full ">                    

                    <swiper  :spaceBetween="10" class="swiper mySwiper2 max-h-[390px] mb-4" :thumbs="{ swiper: thumbsSwiper }" :modules="[ SwiperThumbs]" :loop="true" style="height: 500px;" >
                        <swiper-slide class="swiper-slide max-h-[390px]">
                            <img alt="" src="~/assets/img/image_4.png" class="w-full object-cover max-h-[400px] h-[390px] "/>
                        </swiper-slide>
                        <swiper-slide class="swiper-slide max-h-[390px]">
                            <img alt="" src="~/assets/img/image_5.png" class="w-full object-cover max-h-[400px] h-[390px] "/>
                        </swiper-slide>
                        <swiper-slide class="swiper-slide max-h-[390px]">
                            <img alt="" src="~/assets/img/image_4.png" class="w-full object-cover max-h-[400px] h-[390px] "/>
                        </swiper-slide>                       
                    </swiper>
                 
                    <swiper @swiper="setThumbsSwiper" :spaceBetween="13" :loop="true"  :slidesPerView="3" class="swiper mySwiper" :modules="[ SwiperThumbs]">
                        <swiper-slide class="opacity-100 cursor-pointer max-h-[87px]">
                            <img alt="" src="~/assets/img/image_4.png" class="h-full object-cover w-full max-h-[87px]" />
                        </swiper-slide>
                        <swiper-slide class="opacity-100 cursor-pointer  max-h-[87px]">
                            <img alt="" src="~/assets/img/image_5.png" class="h-full object-cover w-full max-h-[87px]" />
                        </swiper-slide>
                        <swiper-slide class="opacity-100 cursor-pointer  max-h-[87px]">
                            <img alt="" src="~/assets/img/image_4.png" class="h-full object-cover w-full max-h-[87px]" />
                        </swiper-slide>                                       
                    </swiper>    

                </div>
                <div class="flex flex-col gap-10  md:ml-12 md:max-w-[306px]">
                    <div class="item">
                        <h3 class="font-bold text-base text-black mb-6">Описание</h3>
                        <p class="max-md:ml-0 ">{{technic.description}}</p>
                        <p class="font-bold text-[#009DD9] mt-2">подробнее</p>
                    </div>

                    <div class="item">
                        <h3 class="font-extrabold text-base mb-4 md:mb-6 text-black">Характеристики</h3>
                        <p class="flex justify-between" v-for="characterisitic of technic.characteristics">{{characterisitic.title}} <span>{{characterisitic.value}}</span></p>   
                    </div>
                    
                </div>
                <div class="cost_box flex flex-col grow gap-y-6 py-6 md:py-10 px-4 bg-[#F2F4F6] h-fit max-w-[306px]">
                    <div class=" mb-0">Стоимость аренды</div>
                    <div class="costs">
                        <p class="cost-hour font-black text-5xl capitalize text-black pb-4 border-0 border-b  border-solid border-b-[#A1A6AB] mb-4">{{technic.price_hours}}<span class="text-2xl text-left">₽/Час</span></p>
                        <p class="cost font-bold text-2xl capitalize text-black">{{technic.price_smena}}<span class="text-xs text-left">₽/Смена</span></p>
                    </div>
                    
                    <button class="btn_primary w-full text-lg h-14" @click="addBasket(route.params.id)">Заказать</button>
                </div>
            </div>
        </div>

        <div class="mt-9 pb-24">
            <tabs class="tabs" nav-item-class="tabs-btn" :options="{ useUrlFragment: false }">
                <tab class="flex gap-9 md:gap-x-6 flex-wrap" name="Характеристики">
                    <div class="flex flex-col gap-y-6 max-w-[526px] font-light text-base text-black grow">
                        <h3 class="font-bold text-base text-black">Технические характеристики1</h3>
                        <p class="flex justify-between">Длина основной стрелы, м.<span >40</span></p>
                        <p class="flex justify-between">Макс. вылет м<span ></span>3,2</p>
                        <p class="flex justify-between">Макс. высота подъема, м.<span >58,1</span></p>
                        <p class="flex justify-between">Макс. длина гуська, м.<span >10/17</span></p>
                        <p class="flex justify-between">Грузоподъемность, т.<span >50</span></p>
                        <p class="flex justify-between">Грузовой момент, тм<span >170</span></p>
                        <p class="flex justify-between">Максимальная глубина опускания крюка, м<span >18</span></p>
                        <p class="flex justify-between">Масса груза при телескопировании стрелы, т<span >10</span></p>
                        <p class="flex justify-between">Стоимость, р/час (от):<span >3000</span></p>
                    </div>
                    <div class="md:ml-28">
                        <div class="font-bold text-base text-black mb-11">Грузоподъёмные характеристики</div>
                        <img src="~/assets/img/image6.png" alt="">
                    </div>
                </tab>
                <tab class="flex  gap-9 md:gap-x-6 flex-wrap" name="Описание">
                    <div class="flex flex-col gap-y-6 max-w-[526px] font-light text-base text-black grow">
                        <h3 class="font-bold text-base text-black">Технические характеристики2</h3>
                        <p class="flex justify-between">Длина основной стрелы, м.<span >40</span></p>
                        <p class="flex justify-between">Макс. вылет м<span ></span>3,2</p>
                        <p class="flex justify-between">Макс. высота подъема, м.<span >58,1</span></p>
                        <p class="flex justify-between">Макс. длина гуська, м.<span >10/17</span></p>
                        <p class="flex justify-between">Грузоподъемность, т.<span >50</span></p>
                        <p class="flex justify-between">Грузовой момент, тм<span >170</span></p>
                        <p class="flex justify-between">Максимальная глубина опускания крюка, м<span >18</span></p>
                        <p class="flex justify-between">Масса груза при телескопировании стрелы, т<span >10</span></p>
                        <p class="flex justify-between">Стоимость, р/час (от):<span >3000</span></p>
                    </div>
                    <div class="md:ml-28">
                        <h3 class="font-bold text-base text-black mb-11">Грузоподъёмные характеристики</h3>
                        <img src="~/assets/img/image6.png" alt="">
                    </div>
                </tab>
                <tab class="flex  gap-9 md:gap-x-6 flex-wrap" name="Габариты">
                    <div class="flex flex-col gap-y-6 max-w-[526px] font-light text-base text-black grow">
                        <h3 class="font-bold text-base text-black">Технические характеристики3</h3>
                        <p class="flex justify-between">Длина основной стрелы, м.<span >40</span></p>
                        <p class="flex justify-between">Макс. вылет м<span ></span>3,2</p>
                        <p class="flex justify-between">Макс. высота подъема, м.<span >58,1</span></p>
                        <p class="flex justify-between">Макс. длина гуська, м.<span >10/17</span></p>
                        <p class="flex justify-between">Грузоподъемность, т.<span >50</span></p>
                        <p class="flex justify-between">Грузовой момент, тм<span >170</span></p>
                        <p class="flex justify-between">Максимальная глубина опускания крюка, м<span >18</span></p>
                        <p class="flex justify-between">Масса груза при телескопировании стрелы, т<span >10</span></p>
                        <p class="flex justify-between">Стоимость, р/час (от):<span >3000</span></p>
                    </div>
                    <div class="md:ml-28">
                        <div class="font-bold text-base text-black mb-11">Грузоподъёмные характеристики</div>
                        <img src="~/assets/img/image6.png" alt="">
                    </div>
                </tab>
                <tab class="flex  gap-9 md:gap-x-6 flex-wrap" name="Документация">
                    <div class="flex flex-col gap-y-6 max-w-[526px] font-light text-base text-black grow">
                        <h3 class="font-bold text-base text-black">Технические характеристики4</h3>
                        <p class="flex justify-between">Длина основной стрелы, м.<span >40</span></p>
                        <p class="flex justify-between">Макс. вылет м<span ></span>3,2</p>
                        <p class="flex justify-between">Макс. высота подъема, м.<span >58,1</span></p>
                        <p class="flex justify-between">Макс. длина гуська, м.<span >10/17</span></p>
                        <p class="flex justify-between">Грузоподъемность, т.<span >50</span></p>
                        <p class="flex justify-between">Грузовой момент, тм<span >170</span></p>
                        <p class="flex justify-between">Максимальная глубина опускания крюка, м<span >18</span></p>
                        <p class="flex justify-between">Масса груза при телескопировании стрелы, т<span >10</span></p>
                        <p class="flex justify-between">Стоимость, р/час (от):<span >3000</span></p>
                    </div>
                    <div class="md:ml-28">
                        <h3 class="font-bold text-base text-black mb-11">Грузоподъёмные характеристики</h3>
                        <img src="~/assets/img/image6.png" alt="">
                    </div>
                </tab>
            </tabs>            
        </div>        

        <PopularTecnick/>
        <TheBestOffer/>       
 
        <AboutUs/>

</template>

<script setup>   
    import { useAccountStore } from "~/stores/accountStore";  
    import { useAlertStore } from "~/stores/alertStore";
    import {Tabs, Tab} from 'vue3-tabs-component';

    const router = useRouter()

    const accountStore = useAccountStore();
    const alertStore = useAlertStore();
    const addBasket = async(technic_id)=>{
        const { data, error } = await useFetch(`${config.public.apiBase}/user/basket`,{
        method: 'post',
        headers: {
            Authorization: `Bearer ${accountStore.api_token}`,
        },
        body:{
            technics_id:technic_id
        },
        onResponseError({ request, response, options }) {            
            if (response.status) {
            alertStore.type = "danger"
            alertStore.message = "Не авторизован"
            alertStore.isAlert = true  
            return router.push({path:"/login"})            
            }
            alertStore.type = "danger"
            alertStore.message = "При добавлении техники в корзину возникала ошибка"
            alertStore.isAlert = true  
        },   
        onResponse({ request, response, options }) {
            alertStore.type = "info"
            alertStore.message = "Техника успешно добавлена в корзину"
            alertStore.isAlert = true 
        },
        })   
    } 

    const route = useRoute()
    const config = useRuntimeConfig()

    let thumbsSwiper = ref(null);
    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    }

    let technic = ref({})
    await useFetch(`${config.public.apiBase}/technic/${route.params.id}`).then(res=>{
        technic.value = res.data.value
        console.log(technic.value)
    })

    
</script>

