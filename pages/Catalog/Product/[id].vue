<template>

        <Breadcrumbs></Breadcrumbs>

        <div class="products">
            <div class="headling">{{ technic.title }}</div>
            <div class="content">
                <div class="galerey">                    

                    <swiper  :spaceBetween="10" class="swiper mySwiper2" :thumbs="{ swiper: thumbsSwiper }" :modules="[ SwiperThumbs]" :loop="true" style="height: 500px;" >
                        <swiper-slide class="swiper-slide">
                            <img src="~/assets/img/image_4.png" />
                        </swiper-slide>
                        <swiper-slide class="swiper-slide">
                            <img src="~/assets/img/image_5.png" />
                        </swiper-slide>
                        <swiper-slide class="swiper-slide">
                            <img src="~/assets/img/image_4.png" />
                        </swiper-slide>                       
                    </swiper>
                 
                    <swiper @swiper="setThumbsSwiper" :spaceBetween="13" :loop="true"  :slidesPerView="3" class="swiper mySwiper" :modules="[ SwiperThumbs]">
                        <swiper-slide class="swiper-slide">
                            <img src="~/assets/img/image_4.png" />
                        </swiper-slide>
                        <swiper-slide class="swiper-slide">
                            <img src="~/assets/img/image_5.png" />
                        </swiper-slide>
                        <swiper-slide class="swiper-slide">
                            <img src="~/assets/img/image_4.png" />
                        </swiper-slide>                                       
                    </swiper>    

                </div>
                <div class="description">
                    <div class="item">
                        <div class="headling">Описание</div>
                        <p>{{technic.description}}</p>
                        <p class="details">подробнее</p>
                    </div>

                    <div class="item">
                        <div class="headling">Характеристики</div>
                        <p class="p-table" v-for="characterisitic of technic.characterisitics">{{characterisitic.title}} <span>{{characterisitic.value}}</span></p>   
                    </div>
                    
                </div>
                <div class="cost_box">
                    <div class="headling">Стоимость аренды</div>
                    <div class="costs">
                        <p class="cost-hour">{{technic.price.hours}}<span>₽/Час</span></p>
                        <p class="cost">{{technic.price.smena}}<span>₽/Смена</span></p>
                    </div>
                    
                    <button class="btn_primary">Заказать</button>
                </div>
            </div>
        </div>

        <div class="property">
            <tabs class="tabs" nav-item-class="p-relative" :options="{ useUrlFragment: false }">
                <tab name="Характеристики">
                    <div class="text">
                        <div class="headling">Технические характеристики1</div>
                        <p class="p-table">Длина основной стрелы, м.<span >40</span></p>
                        <p class="p-table">Макс. вылет м<span ></span>3,2</p>
                        <p class="p-table">Макс. высота подъема, м.<span >58,1</span></p>
                        <p class="p-table">Макс. длина гуська, м.<span >10/17</span></p>
                        <p class="p-table">Грузоподъемность, т.<span >50</span></p>
                        <p class="p-table">Грузовой момент, тм<span >170</span></p>
                        <p class="p-table">Максимальная глубина опускания крюка, м<span >18</span></p>
                        <p class="p-table">Масса груза при телескопировании стрелы, т<span >10</span></p>
                        <p class="p-table">Стоимость, р/час (от):<span >3000</span></p>
                    </div>
                    <div class="img">
                        <div class="headling">Грузоподъёмные характеристики</div>
                        <img src="~/assets/img/image6.png" alt="">
                    </div>
                </tab>
                <tab name="Описание">
                    <div class="text">
                        <div class="headling">Технические характеристики2</div>
                        <p class="p-table">Длина основной стрелы, м.<span >40</span></p>
                        <p class="p-table">Макс. вылет м<span ></span>3,2</p>
                        <p class="p-table">Макс. высота подъема, м.<span >58,1</span></p>
                        <p class="p-table">Макс. длина гуська, м.<span >10/17</span></p>
                        <p class="p-table">Грузоподъемность, т.<span >50</span></p>
                        <p class="p-table">Грузовой момент, тм<span >170</span></p>
                        <p class="p-table">Максимальная глубина опускания крюка, м<span >18</span></p>
                        <p class="p-table">Масса груза при телескопировании стрелы, т<span >10</span></p>
                        <p class="p-table">Стоимость, р/час (от):<span >3000</span></p>
                    </div>
                    <div class="img">
                        <div class="headling">Грузоподъёмные характеристики</div>
                        <img src="~/assets/img/image6.png" alt="">
                    </div>
                </tab>
                <tab name="Габариты">
                    <div class="text">
                        <div class="headling">Технические характеристики3</div>
                        <p class="p-table">Длина основной стрелы, м.<span >40</span></p>
                        <p class="p-table">Макс. вылет м<span ></span>3,2</p>
                        <p class="p-table">Макс. высота подъема, м.<span >58,1</span></p>
                        <p class="p-table">Макс. длина гуська, м.<span >10/17</span></p>
                        <p class="p-table">Грузоподъемность, т.<span >50</span></p>
                        <p class="p-table">Грузовой момент, тм<span >170</span></p>
                        <p class="p-table">Максимальная глубина опускания крюка, м<span >18</span></p>
                        <p class="p-table">Масса груза при телескопировании стрелы, т<span >10</span></p>
                        <p class="p-table">Стоимость, р/час (от):<span >3000</span></p>
                    </div>
                    <div class="img">
                        <div class="headling">Грузоподъёмные характеристики</div>
                        <img src="~/assets/img/image6.png" alt="">
                    </div>
                </tab>
                <tab name="Документация">
                    <div class="text">
                        <div class="headling">Технические характеристики4</div>
                        <p class="p-table">Длина основной стрелы, м.<span >40</span></p>
                        <p class="p-table">Макс. вылет м<span ></span>3,2</p>
                        <p class="p-table">Макс. высота подъема, м.<span >58,1</span></p>
                        <p class="p-table">Макс. длина гуська, м.<span >10/17</span></p>
                        <p class="p-table">Грузоподъемность, т.<span >50</span></p>
                        <p class="p-table">Грузовой момент, тм<span >170</span></p>
                        <p class="p-table">Максимальная глубина опускания крюка, м<span >18</span></p>
                        <p class="p-table">Масса груза при телескопировании стрелы, т<span >10</span></p>
                        <p class="p-table">Стоимость, р/час (от):<span >3000</span></p>
                    </div>
                    <div class="img">
                        <div class="headling">Грузоподъёмные характеристики</div>
                        <img src="~/assets/img/image6.png" alt="">
                    </div>
                </tab>
            </tabs>            
        </div>        

        <PopularTecnick/>

        <div class="proposal proposal_2 ">
            <div class="wrapper">
                <h1 class="headling">Лучшее предложение</h1>
                <p>Автовышка. 11 000 р/смена</p>
                <a href="#" class="btn_primary">Подробнее</a>                
            </div>
        </div>

        <AboutUs/>

</template>

<script setup>
    import {Tabs, Tab} from 'vue3-tabs-component';
    const route = useRoute()

    let thumbsSwiper = ref(null);
    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    }

    let technic = ref({})
    await useFetch(`http://localhost:3000/technics?id=${route.params.id}`).then(res=>{
        technic.value = res.data.value[0]
    })
</script>

