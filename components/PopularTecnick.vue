<template>
    <div class="Prose-splash other_box pt-20 pb-12 md:py-24">            
            <h2 class="headling mb-6 h2 wrapper max-md:hidden">Популярная техника</h2>
            <div class="catalog grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-y-6 gap-x-6 h-fit md:gap-y-4 wrapper">
                <div class="card flex flex-col px-1.5 pb-3 md:p-3 pt-0 bg-white shadow-[0_4px_30px_0_rgba(0,0,0,0.1)] rounded-lg font-light text-sm " v-for="n of count">
                    <div class="text-center">
                        <img :src="'/img/' + technics[n-1].img" alt="">
                    </div>
                    <div class="text p-3 grow flex flex-col">
                        <div class="header mb-4 font-bold text-base text-black">{{technics[n-1].title}}</div>
                        <p class="flex gap-2 justify-between" v-for="characterisitic of technics[n-1].characteristics">{{characterisitic.title}} <span>{{characterisitic.value}}</span></p>   
                        <div class="pt-4 mt-auto flex gap-2 flex-wrap">                            
                            <NuxtLink :to="`/Catalog/${technics[n-1].id}`" class="btn_secondary flex-1">Подробнее</NuxtLink>
                            <button class="btn_primary flex-1" @click="addBasket(technics[n-1].id)">Заказать</button>
                        </div>                        
                    </div>
                </div>                
            </div>
        </div>
</template>

<script setup>
    import { useAccountStore } from "~/stores/accountStore";  
    import { useAlertStore } from "~/stores/alertStore";
    const config = useRuntimeConfig()
    let technics = ref({})

    const router = useRouter();
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

    function useAsset(path) {
        const assets = import.meta.glob('~/assets/**/*', {
          eager: true,
          import: 'default',
        })
        // @ts-expect-error: wrong type info
        return assets['/assets/' + path]
    }

    let count = computed(()=>{
        if (technics.value.length > 4) {
            return 4
        }
        return technics.value.length
    })
    
    await useFetch(`${config.public.apiBase}/technics`).then(res=>{
        technics.value = res.data.value
    })
</script>
