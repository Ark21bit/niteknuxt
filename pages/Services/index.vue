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
            <div v-for="service in services" :key="service.id"
            class="flex flex-col pt-4 px-6 pb-8 group bg-white shadow-[0_4px_30px_0_rgba(0,0,0,0.1)] hover:bg-[#F5F8FB] hover:shadow-[0_4px_40px_0_rgba(0,0,0,0.2)] rounded-lg font-light text-sm duration-500 transition-all cursor-pointer">
                <img src="~/assets/img/services1.svg" class="max-md:h-24 w-fit mx-auto" alt="">
                <div class=" group-hover:underline group-hover:text-[#003771] font-bold text-base md:text-xl text-center mb-3 md:mb-4 transition-all dur ">{{service.title}}</div>
                <p class="mb-3 md:mb-9">{{service.description}}</p>
                <a href="#" class="w-fit gap-4 flex font-bold text-sm text-[#009DD9] text-center transition-all duration-500 self-center mt-auto group-hover:text-base">подробнее <img src="~/assets/img/Arrow.svg" class="opacity-0 invisible max-md:hidden transition-all delay-100 duration-500 group-hover:visible group-hover:opacity-100 mx-auto mb-2" alt=""></a>
            </div>            
        </div>       
        <Advantages/>
        <AboutUs/>
</template>

<script setup>
    const config = useRuntimeConfig()
    let services = ref({})
    
    await useFetch(`${config.public.apiBase}/services`).then(res=>{
        services.value = res.data.value
    })
</script>