<template>
    <div class="about_us grid-full Prose">
            <div class="title grid-full">
                <div class="wrapper">
                    <Breadcrumbs></Breadcrumbs>
                    <h1 class="h1">О КОМПАНИИ</h1>
                    <div class="info">
                        <h2 class="headling">НИТЭК. Ответственность. Доверие. Надежность.</h2>
                        <p class="description">НИТЭК — это федеральная компания, специализирующаяся на аренде спецтехники для любых видов строительных работ. Основана в 2003 году в городе Нижний Новгород.</p>
                    </div>
                </div>
            </div>
            <div class="body">
                <div class="text">
                    <p>Наши специалисты работают на крупнейших проектах по всей России, включая самые масштабные федеральные стройки. У нас за плечами колоссальный опыт в строительстве газоперерабатывающих заводов и химических комплексов, компрессорных станций и нефтеперерабатывающих заводов.<br><br>Мы гордимся нашей экспертизой и качественным сервисом. А благодаря многолетнему опыту, ответственности и тщательной подготовке к каждому заказу, клиенты доверяют нам самые сложные и долгосрочные заказы. </p>
                </div>
                <div class="img">
                    <img src="~/assets/img/about_img.png" alt="">
                    <p class="headling">НИТЭК — это действительно высокий уровень сервиса</p>
                </div>
            </div>
        </div>
        <div class="choose">
            <h2 class="h2 grid-full headling">НАС ВЫБИРАЮТ ЗА</h2>
            
            <swiper  :spaceBetween="24" class="swiper mySwiper3" :modules="[SwiperNavigation]" :navigation="true" slidesPerView="auto"   >
                <swiper-slide>
                  <div class="ellipse"><img src="~/assets/img/car_icone.svg" alt=""></div>
                  <p class="title">Новую качественную технику</p>
                </swiper-slide>
                <swiper-slide>
                  <div class="ellipse"><img src="~/assets/img/choose2.svg" alt=""></div>
                  <p class="title">Гибкие цены на долгосрочную аренду</p>
                </swiper-slide>
                <swiper-slide>
                  <div class="ellipse"><img src="~/assets/img/choose3.svg" alt=""></div>
                  <p class="title">Высококачественный сервис на объекте</p>
                </swiper-slide>
                <swiper-slide>
                  <div class="ellipse"><img src="~/assets/img/choose4.svg" alt=""></div>
                  <p class="title">Обученную профессиональную команду</p>
                </swiper-slide>
                <swiper-slide>
                  <div class="ellipse"><img src="~/assets/img/choose5.svg" alt=""></div>
                  <p class="title">Быстрое предоставление техники и рабочего персонала</p>
                </swiper-slide>
                <swiper-slide>
                  <div class="ellipse"><img src="~/assets/img/choose5.svg" alt=""></div>
                  <p class="title">Быстрое предоставление техники и рабочего персонала</p>
                </swiper-slide>
                <swiper-slide>
                  <div class="ellipse"><img src="~/assets/img/choose5.svg" alt=""></div>
                  <p class="title">Быстрое предоставление техники и рабочего персонала</p>
                </swiper-slide>                              
            </swiper>

        </div>
        <div class="clients grid-full">
            <div class="wrapper">
                <p class="headling grid-full">Наши клиенты — крупнейшие федеральные и иностранные компании, которые являются экспертами в своих сферах деятельности. Мы заботимся и поддерживаем свою деловую репутацию и именно поэтому:</p>
                <div class="item">
                    <img src="~/assets/img/image13.png" alt="">
                    <p class="">работаем исключительно на новой и качественной спецтехнике</p>
                </div>
                <div class="item">
                    <img src="~/assets/img/image13.png" alt="">
                    <p class="">все водители и машинисты тщательно проверяются службой безопасности</p>
                </div>
                <div class="item">
                    <img src="~/assets/img/image13.png" alt="">
                    <p class="">сотрудничаем с обученной командой профессионалов</p>
                </div>
            </div>
            
        </div>
        <div class="history">
            <h2 class="h2 headling grid-full">История развития компании</h2>            

            <swiper class="swiper mySwiper4" :modules="[SwiperPagination, SwiperNavigation]" :navigation="true" slidesPerView="1" :spaceBetween="63" :pagination="pagination"  >
                <swiper-slide >
                  <div class="text">
                    <h2 class="headling">2003  </h2>
                    <p class="description">Начало работы компании на рынке логистических услуг </p>
                  </div>
                  <div class="img"><img src="~/assets/img/image15.png" alt=""></div>
                </swiper-slide>                    
                <swiper-slide>
                  <div class="text">
                    <h2 class="headling">2008  </h2>
                    <p class="description">Начало работы компании на рынке логистических услуг </p>
                  </div>
                 <div class="img"><img src="~/assets/img/image15.png" alt=""></div>
                </swiper-slide>                    
                <swiper-slide>
                  <div class="text">
                    <h2 class="headling">2009  </h2>
                    <p class="description">Начало работы компании на рынке логистических услуг </p>
                  </div>
                 <div class="img"><img src="~/assets/img/image15.png" alt=""></div>
                </swiper-slide>                    
                <swiper-slide>
                  <div class="text">
                    <h2 class="headling">2012  </h2>
                    <p class="description">Начало работы компании на рынке логистических услуг </p>
                  </div>
                 <div class="img"><img src="~/assets/img/image15.png" alt=""></div>
                </swiper-slide>                    
                <swiper-slide>
                  <div class="text">
                    <h2 class="headling">2016  </h2>
                    <p class="description">Начало работы компании на рынке логистических услуг </p>
                  </div>
                 <div class="img"><img src="~/assets/img/image15.png" alt=""></div>
                </swiper-slide>                    
                <swiper-slide>
                  <div class="text">
                    <h2 class="headling">2018  </h2>
                    <p class="description">Начало работы компании на рынке логистических услуг </p>
                  </div>
                 <div class="img"><img src="~/assets/img/image15.png" alt=""></div>
                </swiper-slide>                    
                <swiper-slide>
                  <div class="text">
                    <h2 class="headling">2020  </h2>
                    <p class="description">Начало работы компании на рынке логистических услуг </p>
                  </div>
                 <div class="img"><img src="~/assets/img/image15.png" alt=""></div>
                </swiper-slide>                    
                <swiper-slide>
                  <div class="text">
                    <h2 class="headling">2022  </h2>
                    <p class="description">Начало работы компании на рынке логистических услуг </p>
                  </div>
                 <div class="img"><img src="~/assets/img/image15.png" alt=""></div>
                </swiper-slide>             
                
                                       
            </swiper>
           
        </div>
        <div class="about_dop grid-full">
            <div class="wrapper">
                <div class="item"><h2 class="headling">Ответственное отношение, любовь к своему делу и заинтересованность в высоких результатах является движущей силой нашей команды!</h2></div>
                <img src="~/assets/img/image17.png" alt="">
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
