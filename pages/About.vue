<template>
    <div class="pb-20 grid-full Prose">
            <div class="title bg_aboutUs grid-full">
                <div class="wrapper">
                    <Breadcrumbs></Breadcrumbs>
                    <h1 class="h1 flex mb-20 items-center mt-12">О КОМПАНИИ</h1>
                    <div class="max-md:bg-[#0c3c73] md:bg-contain md:bg-no-repeat md:bg-[url(../img/info_bg.svg)] bg-cover py-12 px-3 md:px-28 max-w-[1040px] text-white">
                        <h2 class=" font-bold text-3xl md:text-[42px] mb-6 max-w-[600px]">НИТЭК. Ответственность. Доверие. Надежность.</h2>
                        <p class="font-light text-xl max-w-[414px]">НИТЭК — это федеральная компания, специализирующаяся на аренде спецтехники для любых видов строительных работ. Основана в 2003 году в городе Нижний Новгород.</p>
                    </div>
                </div>
            </div>
            <div class="flex max-md:flex-col font-light text-lg gap-20">
                <div class="flex-1 mt-16">
                    <p class="max-w-[477px] ml-0 md:ml-auto">Наши специалисты работают на крупнейших проектах по всей России, включая самые масштабные федеральные стройки. У нас за плечами колоссальный опыт в строительстве газоперерабатывающих заводов и химических комплексов, компрессорных станций и нефтеперерабатывающих заводов.<br><br>Мы гордимся нашей экспертизой и качественным сервисом. А благодаря многолетнему опыту, ответственности и тщательной подготовке к каждому заказу, клиенты доверяют нам самые сложные и долгосрочные заказы. </p>
                </div>
                <div class="img flex flex-col gap-11 flex-1 -mt-28">
                    <img src="~/assets/img/About_img.png" alt="" class="max-[989px]:mt-16">
                    <p class="font-bold text-3xl md:text-2xl uppercase text-[#009DD9] max-w-[340px]">НИТЭК — это действительно высокий уровень сервиса</p>
                </div>
            </div>
        </div>
        <div class="choose  mb-9">
            <h2 class="h2 grid-full mb-12">НАС ВЫБИРАЮТ ЗА</h2>            
            <swiper  :spaceBetween="24" class="swiper w-full mySwiper3 flex grid-full" :modules="[SwiperNavigation]" :navigation="true" slidesPerView="auto"   >
                <swiper-slide class="flex gap-4 flex-col items-center justify-center max-w-[195px] w-full font-light text-lg " >
                  <div class="flex items-center justify-center w-32 h-32 aspect-square border border-solid border-[rgba(0_59_114_0.2)] rounded-full"><img src="~/assets/img/car_icone.svg" alt=""></div>
                  <p class="title">Новую качественную технику</p>
                </swiper-slide>
                <swiper-slide class="flex gap-4 flex-col items-center justify-center max-w-[195px] w-full font-light text-lg ">
                  <div class="flex items-center justify-center w-32 h-32 aspect-square border border-solid border-[rgba(0_59_114_0.2)] rounded-full"><img src="~/assets/img/choose2.svg" alt=""></div>
                  <p class="title">Гибкие цены на долгосрочную аренду</p>
                </swiper-slide>
                <swiper-slide class="flex gap-4 flex-col items-center justify-center max-w-[195px] w-full font-light text-lg ">
                  <div class="flex items-center justify-center w-32 h-32 aspect-square border border-solid border-[rgba(0_59_114_0.2)] rounded-full"><img src="~/assets/img/choose3.svg" alt=""></div>
                  <p class="title">Высококачественный сервис на объекте</p>
                </swiper-slide>
                <swiper-slide class="flex gap-4 flex-col items-center justify-center max-w-[195px] w-full font-light text-lg ">
                  <div class="flex items-center justify-center w-32 h-32 aspect-square border border-solid border-[rgba(0_59_114_0.2)] rounded-full"><img src="~/assets/img/choose4.svg" alt=""></div>
                  <p class="title">Обученную профессиональную команду</p>
                </swiper-slide>
                <swiper-slide class="flex gap-4 flex-col items-center justify-center max-w-[195px] w-full font-light text-lg ">
                  <div class="flex items-center justify-center w-32 h-32 aspect-square border border-solid border-[rgba(0_59_114_0.2)] rounded-full"><img src="~/assets/img/choose5.svg" alt=""></div>
                  <p class="title">Быстрое предоставление техники и рабочего персонала</p>
                </swiper-slide>
                <swiper-slide class="flex gap-4 flex-col items-center justify-center max-w-[195px] w-full font-light text-lg ">
                  <div class="flex items-center justify-center w-32 h-32 aspect-square border border-solid border-[rgba(0_59_114_0.2)] rounded-full"><img src="~/assets/img/choose5.svg" alt=""></div>
                  <p class="title">Быстрое предоставление техники и рабочего персонала</p>
                </swiper-slide>
                <swiper-slide class="flex gap-4 flex-col items-center justify-center max-w-[195px] w-full font-light text-lg ">
                  <div class="flex items-center justify-center w-32 h-32 aspect-square border border-solid border-[rgba(0_59_114_0.2)] rounded-full"><img src="~/assets/img/choose5.svg" alt=""></div>
                  <p class="title">Быстрое предоставление техники и рабочего персонала</p>
                </swiper-slide>                              
            </swiper>

        </div>
        <div class="py-20 bg-radial-g2 grid-full text-white">
            <div class="wrapper grid justify-center gap-x-6 justify-items-center gap-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <p class="text-center mb-10 text-xl  grid-full">Наши клиенты — крупнейшие федеральные и иностранные компании, которые являются экспертами в своих сферах деятельности. Мы заботимся и поддерживаем свою деловую репутацию и именно поэтому:</p>
                <div class="text-center text-lg max-w-[357px] font-light ">
                    <img src="~/assets/img/image13.png" alt="" class="mb-4 aspect-[10/7.6] object-cover">
                    <p class="">работаем исключительно на новой и качественной спецтехнике</p>
                </div>
                <div class="text-center text-lg max-w-[357px] font-light ">
                    <img src="~/assets/img/image13.png" alt="" class="mb-4 aspect-[10/7.6] object-cover">
                    <p class="">все водители и машинисты тщательно проверяются службой безопасности</p>
                </div>
                <div class="text-center text-lg max-w-[357px] font-light ">
                    <img src="~/assets/img/image13.png" alt="" class="mb-4 aspect-[10/7.6] object-cover">
                    <p class="">сотрудничаем с обученной командой профессионалов</p>
                </div>
            </div>
            
        </div>
        <div class="block mb-9 relative py-12 md:py-24 before:bg-[#D2E0ED] before:h-[1px] max-md:before:hidden before:w-[calc(100vw-30px)] before:absolute before:top-64 before:-translate-x-1/2 before:left-1/2">
            <h2 class="h2 md:mb-12 uppercase grid-full">История развития компании</h2>            

            <swiper class="swiper mySwiper4 pt-20 w-full flex col-start-2 -mx-16 px-16" :modules="[SwiperPagination, SwiperNavigation]" :navigation="true" slidesPerView="1" :spaceBetween="63" :pagination="pagination"  >
                <swiper-slide class="flex gap-7 md:gap-20 max-md:flex-col " >
                  <div class="md:mt-20 max-md:flex-1 max-w-[300px] md:ml-auto">
                    <h2 class="font-bold text-[40px] text-[#003771] mb-9">2003  </h2>
                    <p class="font-light text-xl">Начало работы компании на рынке логистических услуг </p>
                  </div>
                  <div class="max-w-[640px] max-md:flex-1"><img src="~/assets/img/image15.png" alt=""></div>
                </swiper-slide>                    
                <swiper-slide class="flex gap-7 md:gap-20 max-md:flex-col ">
                  <div class="md:mt-20 max-md:flex-1 max-w-[300px]  md:ml-auto">
                    <h2 class="font-bold text-[40px] text-[#003771] mb-9">2008  </h2>
                    <p class="font-light text-xl">Начало работы компании на рынке логистических услуг </p>
                  </div>
                 <div class="max-w-[640px] max-md:flex-1"><img src="~/assets/img/image15.png" alt=""></div>
                </swiper-slide>                    
                <swiper-slide class="flex gap-7 md:gap-20 max-md:flex-col ">
                  <div class="md:mt-20 max-md:flex-1 max-w-[300px]  md:ml-auto">
                    <h2 class="font-bold text-[40px] text-[#003771] mb-9">2009  </h2>
                    <p class="font-light text-xl">Начало работы компании на рынке логистических услуг </p>
                  </div>
                 <div class="max-w-[640px] max-md:flex-1"><img src="~/assets/img/image15.png" alt=""></div>
                </swiper-slide>                    
                <swiper-slide class="flex gap-7 md:gap-20 max-md:flex-col ">
                  <div class="md:mt-20 max-md:flex-1 max-w-[300px]  md:ml-auto">
                    <h2 class="font-bold text-[40px] text-[#003771] mb-9">2012  </h2>
                    <p class="font-light text-xl">Начало работы компании на рынке логистических услуг </p>
                  </div>
                 <div class="max-w-[640px] max-md:flex-1"><img src="~/assets/img/image15.png" alt=""></div>
                </swiper-slide>                    
                <swiper-slide class="flex gap-7 md:gap-20 max-md:flex-col ">
                  <div class="md:mt-20 max-md:flex-1 max-w-[300px]  md:ml-auto">
                    <h2 class="font-bold text-[40px] text-[#003771] mb-9">2016  </h2>
                    <p class="font-light text-xl">Начало работы компании на рынке логистических услуг </p>
                  </div>
                 <div class="max-w-[640px] max-md:flex-1"><img src="~/assets/img/image15.png" alt=""></div>
                </swiper-slide>                    
                <swiper-slide class="flex gap-7 md:gap-20 max-md:flex-col ">
                  <div class="md:mt-20 max-md:flex-1 max-w-[300px]  md:ml-auto">
                    <h2 class="font-bold text-[40px] text-[#003771] mb-9">2018  </h2>
                    <p class="font-light text-xl">Начало работы компании на рынке логистических услуг </p>
                  </div>
                 <div class="max-w-[640px] max-md:flex-1"><img src="~/assets/img/image15.png" alt=""></div>
                </swiper-slide>                    
                <swiper-slide class="flex gap-7 md:gap-20 max-md:flex-col ">
                  <div class="md:mt-20 max-md:flex-1 max-w-[300px]  md:ml-auto">
                    <h2 class="font-bold text-[40px] text-[#003771] mb-9">2020  </h2>
                    <p class="font-light text-xl">Начало работы компании на рынке логистических услуг </p>
                  </div>
                 <div class="max-w-[640px] max-md:flex-1"><img src="~/assets/img/image15.png" alt=""></div>
                </swiper-slide>                    
                <swiper-slide class="flex gap-7 md:gap-20 max-md:flex-col ">
                  <div class="md:mt-20 max-md:flex-1 max-w-[300px]  md:ml-auto">
                    <h2 class="font-bold text-[40px] text-[#003771] mb-9">2022  </h2>
                    <p class="font-light text-xl">Начало работы компании на рынке логистических услуг </p>
                  </div>
                 <div class="max-w-[640px] max-md:flex-1"><img src="~/assets/img/image15.png" alt=""></div>
                </swiper-slide>             
                
                                       
            </swiper>
           
        </div>
        <div class="bg-gradient-to-r from-[#EEF1F4] to-[#0000] grid-full">
            <div class="wrapper flex flex-col">
                <div class="h-auto p-6 sm:p-11 bg-radial-gradient md:h-[400px] md:pt-20 md:pr-36 md:pb-5 md:pl-32 max-w-[810px] md:-skew-x-[10deg] text-white uppercase -mt-12"><h2 class="text-lg md:skew-x-[10deg]">Ответственное отношение, любовь к своему делу и заинтересованность в высоких результатах является движущей силой нашей команды!</h2></div>
                <img src="~/assets/img/image17.png" alt="" class="m-auto mt-5 md:-mt-24 translate-x-0 translate-y-0">
            </div>
        </div>
        <Partners/>
     
</template>

<script setup>
   let pagination= {          
          clickable:true,          
          renderBullet: function (index, className) {
            let arr = ["2003", "2008", "2009", "2012", "2016", "2018", "2020" , "2022"] ;
            return '<span class="' + className + '">' + (arr[index]) + "</span>";
          },
        }
</script>

<style>


</style>
