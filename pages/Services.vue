<template>
        <div class="services_header mb-9 bg-[#F4F5F7] md:mb-20 grid-full">
            <div class="wrapper flex max-md:flex-col justify-between gap-5">
                <div>
                    <Breadcrumbs class="mt-4 mb-12"/>
                    <h1 class="h1 max-md:text-3xl max-md:my-14">УСЛУГИ</h1>
                </div>
                <div class="max-md:w-[calc(100%+24px)] max-md:-ml-3">
                    <picture>
                        <source media="(min-width:768px)" srcset="~/assets/img/image9.png">
                        <source media="(min-width:320px)" srcset="~/assets/img/image16.png">
                        <img src="~/assets/img/image16.png" alt="" class="max-md:w-full max-md:max-h-[323px] max-md:object-cover max-md:object-center">
                    </picture>
                </div>    
            </div>
        </div>  
        
        <div class="grid gap-3 md:gap-6 mb-14 md:mb-28 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <div class="flex flex-col pt-4 px-6 pb-8 group bg-white shadow-[0_4px_30px_0_rgba(0,0,0,0.1)] hover:bg-[#F5F8FB] hover:shadow-[0_4px_40px_0_rgba(0,0,0,0.2)] rounded-lg font-light text-sm duration-500 transition-all cursor-pointer">
                <img src="~/assets/img/services1.svg" class="max-md:h-24 w-fit mx-auto" alt="">
                <div class=" group-hover:underline group-hover:text-[#003771] font-bold text-base md:text-xl text-center mb-3 md:mb-4 transition-all dur ">Перебазирование техники</div>
                <p class="mb-3 md:mb-9">Организуем доставку техники из нашего автопарка с опытными водителями на любую строительную площадку в России. При необходимости обеспечим условия для проживания и питания сотрудников на объекте, а также обустроим ремонтную базу для поддержания техники в рабочем состоянии.«Лахта Центр»</p>
                <a href="#" class="w-fit gap-4 flex font-bold text-sm text-[#009DD9] text-center transition-all duration-500 self-center mt-auto group-hover:text-base">подробнее <img src="~/assets/img/Arrow.svg" class="opacity-0 invisible max-md:hidden transition-all delay-100 duration-500 group-hover:visible group-hover:opacity-100 mx-auto mb-2" alt=""></a>
            </div>
            <div class="flex flex-col pt-4 px-6 pb-8 group bg-white shadow-[0_4px_30px_0_rgba(0,0,0,0.1)] hover:bg-[#F5F8FB] hover:shadow-[0_4px_40px_0_rgba(0,0,0,0.2)] rounded-lg font-light text-sm duration-500 transition-all cursor-pointer">
                <img src="~/assets/img/services2.svg" class="max-md:h-24 w-fit mx-auto" alt="">
                <div class=" group-hover:underline group-hover:text-[#003771] font-bold text-base md:text-xl text-center mb-3 md:mb-4 transition-all dur ">Подбор техники онлайн</div>
                <p class="mb-9">Экономим ваше время и помогаем с выбором техники в онлайн-формате. С характеристиками автомобилей, доступных к аренде, можно ознакомиться на сайте. А ваш персональный менеджер поможет согласовать детали сотрудничества до составления договора.</p>
                <a href="#" class="w-fit gap-4 flex font-bold text-sm text-[#009DD9] text-center transition-all duration-500 self-center mt-auto group-hover:text-base">подробнее <img src="~/assets/img/Arrow.svg" class="opacity-0 invisible max-md:hidden transition-all delay-100 duration-500 group-hover:visible group-hover:opacity-100 mx-auto mb-2" alt=""></a>
            </div>
            <div class="flex flex-col pt-4 px-6 pb-8 group bg-white shadow-[0_4px_30px_0_rgba(0,0,0,0.1)] hover:bg-[#F5F8FB] hover:shadow-[0_4px_40px_0_rgba(0,0,0,0.2)] rounded-lg font-light text-sm duration-500 transition-all cursor-pointer">
                <img src="~/assets/img/services3.svg" class="max-md:h-24 w-fit mx-auto" alt="">
                <div class=" group-hover:underline group-hover:text-[#003771] font-bold text-base md:text-xl text-center mb-3 md:mb-4 transition-all dur ">Персональный менеджер</div>
                <p class="mb-9">За вами закрепляется персональный менеджер, который сопровождает вас при выборе техники, согласования условий аренды и оплаты, подписания договора и перебазировки техники на ваш объект в сопровождении опытных водителей.</p>
                <a href="#" class="w-fit gap-4 flex font-bold text-sm text-[#009DD9] text-center transition-all duration-500 self-center mt-auto group-hover:text-base">подробнее <img src="~/assets/img/Arrow.svg" class="opacity-0 invisible max-md:hidden transition-all delay-100 duration-500 group-hover:visible group-hover:opacity-100 mx-auto mb-2" alt=""></a>
            </div>
            <div class="flex flex-col pt-4 px-6 pb-8 group bg-white shadow-[0_4px_30px_0_rgba(0,0,0,0.1)] hover:bg-[#F5F8FB] hover:shadow-[0_4px_40px_0_rgba(0,0,0,0.2)] rounded-lg font-light text-sm duration-500 transition-all cursor-pointer">
                <img src="~/assets/img/services4.svg" class="max-md:h-24 w-fit mx-auto" alt="">
                <div class=" group-hover:underline group-hover:text-[#003771] font-bold text-base md:text-xl text-center mb-3 md:mb-4 transition-all dur ">Аренда автопарка</div>
                <p class="mb-9">Вы можете арендовать любую технику из нашего автопарка на 300 часов и более. В собственности «НИТЭК» 340 единиц спецтехники, включая 60 автовышек. Также к аренде доступны уникальные для РФ автовышки с вылетом стрелы 75 м.</p>
                <a href="#" class="w-fit gap-4 flex font-bold text-sm text-[#009DD9] text-center transition-all duration-500 self-center mt-auto group-hover:text-base">подробнее <img src="~/assets/img/Arrow.svg" class="opacity-0 invisible max-md:hidden transition-all delay-100 duration-500 group-hover:visible group-hover:opacity-100 mx-auto mb-2" alt=""></a>
            </div>
            <div class="flex flex-col pt-4 px-6 pb-8 group bg-white shadow-[0_4px_30px_0_rgba(0,0,0,0.1)] hover:bg-[#F5F8FB] hover:shadow-[0_4px_40px_0_rgba(0,0,0,0.2)] rounded-lg font-light text-sm duration-500 transition-all cursor-pointer">
                <img src="~/assets/img/services5.svg" class="max-md:h-24 w-fit mx-auto" alt="">
                <div class=" group-hover:underline group-hover:text-[#003771] font-bold text-base md:text-xl text-center mb-3 md:mb-4 transition-all dur ">ППР (проект производства работ)</div>
                <p class="mb-9">Эксперты «НИТЭК» помогут с разработкой проекта производства работ и подготовкой проектно-технологической документации. Проконсультируем, какая техника нужна для выполнения определенного вида работ на вашем объекте, составим схему расстановки техники на рабочей площадке, организуем необходимые условия выполнения строительных работ.</p>
                <a href="#" class="w-fit gap-4 flex font-bold text-sm text-[#009DD9] text-center transition-all duration-500 self-center mt-auto group-hover:text-base">подробнее <img src="~/assets/img/Arrow.svg" class="opacity-0 invisible max-md:hidden transition-all delay-100 duration-500 group-hover:visible group-hover:opacity-100 mx-auto mb-2" alt=""></a>
            </div>
        </div>       <Advantages/>
        <AboutUs/>
</template>
