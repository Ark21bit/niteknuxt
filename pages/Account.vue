<template>
    <div>
        <h2 class="h2 grid-full mb-12">Ваша арендованная техника</h2>         
        {{ user }}
    </div>
</template>

<script setup>


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

    let user = ref({})
    await useFetch(`${config.public.apiBase}/accounts`).then(res=>{
        user.value = res.data.value
    })

</script>
