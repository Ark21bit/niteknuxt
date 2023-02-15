<template>
    <div>
        <h2 class="h2 grid-full mb-12">Ваша арендованная техника</h2>         
        {{ techniks }}
    </div>
</template>

<script setup>
    import { useAccountStore } from "~/stores/accountStore";

    useHead({
        meta:[ 
            {name:"robots", content:"noindex"},
        ],   
    })

    const config = useRuntimeConfig()    

    let basket = ref({})
    await useFetch(`http://localhost:3000/basket`).then(res=>{
        basket.value = res.data.value
    })

    let techniks = ref({})
    await useFetch(`http://localhost:3000/technics?id=${basket.value.technic_id}`).then(res=>{
        techniks.value = res.data.value
    })

    const accountStore = useAccountStore(); 

</script>
