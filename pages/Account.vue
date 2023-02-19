<template>
    <div>
                 
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-8" v-if="baskets">
            <h2 class="h2 grid-full mb-12">Ваша корзина</h2>      
            <div   v-for="technic in baskets" class="cursor-pointer px-1.5 pb-3 md:p-3 pt-0 bg-white shadow-[0_4px_30px_0_rgba(0,0,0,0.1)] rounded-lg font-light text-sm">
                <div><img class="object-contain aspect-[4/3]" :src="`/img/${technic.img}`" alt=""></div>
                <p>{{technic.title}}</p>
                <Button color="light" :to="path=`/Catalog/${technic.id}`" class="w-full mt-3">подробнее</Button>
                <Button color="red" class="w-full mt-3" @click="deleteBasket(technic.pivot.id)">удалить</Button>
            </div>                
        </div> 
        <div class="flex h-32 items-center justify-center mt-8" v-else-if="!baskets">
            <div class="my-4 py-2 h-full text-2xl text-white flex items-center px-8 bg-sky-800 rounded">Ваша корзина пока пуста</div>
        </div> 
    </div>
</template>

<script setup>
    import { useAccountStore } from "~/stores/accountStore";  
    import { Button, ButtonGroup, Input} from 'flowbite-vue'
    import { useAlertStore } from "~/stores/alertStore";

    const alertStore = useAlertStore();
  

    useHead({
        meta:[ 
            {name:"robots", content:"noindex"},
        ],   
    })  

    const config = useRuntimeConfig() 
    const accountStore = useAccountStore();   
    
    const getBasket = async()=>{
        await useFetch(`${config.public.apiBase}/user/baskets`,{
            headers: {
                Authorization: `Bearer ${accountStore.api_token}`,
            }, 
        }).then(res=>{
            baskets.value = res.data.value
        })
    } 

    accountStore.$subscribe(()=> { 
        getBasket()
    })

    const { data: baskets, error } = await useFetch(`${config.public.apiBase}/user/baskets`,{
        method: 'get',
        headers: {
            Authorization: `Bearer ${accountStore.api_token}`,
        }, 
    })   

    const deleteBasket = async(basket_id)=>{
        const { data, error } = await useFetch(`${config.public.apiBase}/user/basket/${basket_id}`,{
            method: 'delete',
            headers: {
                Authorization: `Bearer ${accountStore.api_token}`,
            },
            onResponseError({ request, response, options }) {    
                alertStore.type = "danger"
                alertStore.message = "При удалении техники из корзины возникла ошибка"
                alertStore.isAlert = true  
                console.log(response)
            },   
            onResponse({ request, response, options }) {
                alertStore.type = "info"
                alertStore.message = "Техника успешно удалена из корзины"
                alertStore.isAlert = true 
                getBasket()
            },
        })   
    } 
   

</script>
