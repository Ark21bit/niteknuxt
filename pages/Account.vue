<template>
    <div>
        <h2 class="h2 grid-full mb-12">Ваша арендованная техника</h2>         
        {{ accountStore.account }}
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
    /* let technicsFilter = computed(()=>{
        return technics.value
        .filter((a)=>{return forms.value.tonnage.includes(a.characterisitics[2].value)})
        .filter((a)=>{return forms.value.categorys.includes(a.category_id)})        
    })

    let technics = ref({})
    await useFetch(`${config.public.apiBase}/technics`).then(res=>{
        technics.value = res.data.value
    }) */

    const accountStore = useAccountStore();
    accountStore.getAccount();
    

</script>
