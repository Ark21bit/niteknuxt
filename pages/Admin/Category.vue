<template>
    <button-group class="gap-3 w-fit my-6">
        <Button color="light" @click="str = 'delete'" :class="{'bg-gray-100':str == 'delete'}" class="focus:ring-0">            
            <template #prefix>
                <svg class="w-5 fill-[#4D4D4D]" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 791.908 791.908" style="enable-background:new 0 0 791.908 791.908;" xml:space="preserve"><path d="M648.587,99.881H509.156C500.276,43.486,452.761,0,394.444,0S287.696,43.486,279.731,99.881H142.315   c-26.733,0-48.43,21.789-48.43,48.43v49.437c0,24.719,17.761,44.493,41.564,47.423V727.64c0,35.613,28.655,64.268,64.268,64.268   h392.475c35.613,0,64.268-28.655,64.268-64.268V246.087c23.711-3.937,41.564-23.711,41.564-47.423v-49.437   C697.017,121.67,675.228,99.881,648.587,99.881z M394.444,36.62c38.543,0,70.219,26.733,77.085,63.261H316.351   C324.225,64.268,355.901,36.62,394.444,36.62z M618.924,728.739c0,14.831-11.901,27.648-27.648,27.648H198.71   c-14.831,0-27.648-11.901-27.648-27.648V247.185h446.948v481.554H618.924z M660.397,197.748c0,6.958-4.944,11.902-11.902,11.902   H142.223c-6.958,0-11.902-4.944-11.902-11.902v-49.437c0-6.958,4.944-11.902,11.902-11.902h505.265   c6.958,0,11.901,4.944,11.901,11.902v49.437H660.397z M253.09,661.45V349.081c0-9.887,7.873-17.761,17.761-17.761   s17.761,7.873,17.761,17.761V661.45c0,9.887-7.873,17.761-17.761,17.761C260.964,680.309,253.09,671.337,253.09,661.45z    M378.606,661.45V349.081c0-9.887,7.873-17.761,17.761-17.761c9.887,0,17.761,7.873,17.761,17.761V661.45   c0,9.887-7.873,17.761-17.761,17.761C386.57,680.309,378.606,671.337,378.606,661.45z M504.212,661.45V349.081   c0-9.887,7.873-17.761,17.761-17.761s17.761,7.873,17.761,17.761V661.45c0,9.887-7.873,17.761-17.761,17.761   C513.093,680.309,504.212,671.337,504.212,661.45z"/></svg>
            </template>      
            Удаление        
        </Button>
        <Button color="light" @click="str = 'add'" :class="{'bg-gray-100':str == 'add'}" class="focus:ring-0">
            <template #prefix>
                    <svg class="w-5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="Layer_1" style="enable-background:new 0 0 128 128;" version="1.1" viewBox="0 0 128 128" xml:space="preserve"><circle cx="64" cy="64" r="64" fill="#4D4D4D" /><path fill="#fff" d="M103,57H71V25c0-0.6-0.4-1-1-1H58c-0.6,0-1,0.4-1,1v32H25c-0.6,0-1,0.4-1,1v12c0,0.6,0.4,1,1,1h32v32  c0,0.6,0.4,1,1,1h12c0.6,0,1-0.4,1-1V71h32c0.6,0,1-0.4,1-1V58C104,57.4,103.6,57,103,57z"/></svg>
            </template>
            Добавление            
        </Button>
        <Button color="light" @click="str = 'edit'" :class="{'bg-gray-100':str == 'edit'}" class="focus:ring-0">
            <template #prefix>
                    <svg class="w-5 text-[#4D4D4D]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>               
            </template>
            Редактирование            
        </Button>
    </button-group>   
    <div>
        <div v-if="str == 'edit'">
            <div class="flex items-center gap-3 mb-8">
                <h2 class="h2">Выберите категорию для редактирования</h2>     
                <Input size="sm" placeholder="Введите название категории" class="grow" v-model="filterTitle">
                    <template #prefix>
                      <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </template>
                </Input>
            </div>                 
            <div>
                <form @submit.prevent="updateCategory" class="flex flex-col gap-4 md:gap-6">
                    <input type="text" placeholder="Название категории" class="input_primary" v-model="form_category.title">
                    <input type="text" placeholder="Изображение" class="input_primary" v-model="form_category.img">                    
                    <button type="submit" class="btn_primary w-full max-w-[306px] mt-6 m-auto max-md:mt-4" :disabled="selectCategory == null">Обновить</button>
                </form>
            </div>           
            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 py-6">
                <div @click="selectCategoryAdd(category)" :class="{'outline': selectCategory == category.id}" v-for="category in categorysFilter" class="cursor-pointer px-1.5 pb-3 md:p-3 pt-0 bg-white shadow-[0_4px_30px_0_rgba(0,0,0,0.1)] rounded-lg font-light text-sm">
                    <div><img class="object-contain h-32 aspect-[4/3]" :src="`/img/auto/${category.img}`" alt=""></div>
                    <p>{{category.title}}</p>
                </div>
            </div>             
        </div>
        <div v-else-if="str == 'delete'">
            <div class="flex items-center gap-3 mb-8">
                <h2 class="h2">Выберите категорию для удаления</h2>
                <Input size="sm" placeholder="Введите название категории" class="grow" v-model="filterTitle">
                    <template #prefix>
                      <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </template>
                </Input>
            </div>
            
            <Button color="red" class="focus:ring-0 mb-6" @click="deleteCategory" :disabled="selectCategory == null">            
                <template #prefix>
                    <svg class="w-5 fill-[#fff]" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 791.908 791.908" style="enable-background:new 0 0 791.908 791.908;" xml:space="preserve"><path d="M648.587,99.881H509.156C500.276,43.486,452.761,0,394.444,0S287.696,43.486,279.731,99.881H142.315   c-26.733,0-48.43,21.789-48.43,48.43v49.437c0,24.719,17.761,44.493,41.564,47.423V727.64c0,35.613,28.655,64.268,64.268,64.268   h392.475c35.613,0,64.268-28.655,64.268-64.268V246.087c23.711-3.937,41.564-23.711,41.564-47.423v-49.437   C697.017,121.67,675.228,99.881,648.587,99.881z M394.444,36.62c38.543,0,70.219,26.733,77.085,63.261H316.351   C324.225,64.268,355.901,36.62,394.444,36.62z M618.924,728.739c0,14.831-11.901,27.648-27.648,27.648H198.71   c-14.831,0-27.648-11.901-27.648-27.648V247.185h446.948v481.554H618.924z M660.397,197.748c0,6.958-4.944,11.902-11.902,11.902   H142.223c-6.958,0-11.902-4.944-11.902-11.902v-49.437c0-6.958,4.944-11.902,11.902-11.902h505.265   c6.958,0,11.901,4.944,11.901,11.902v49.437H660.397z M253.09,661.45V349.081c0-9.887,7.873-17.761,17.761-17.761   s17.761,7.873,17.761,17.761V661.45c0,9.887-7.873,17.761-17.761,17.761C260.964,680.309,253.09,671.337,253.09,661.45z    M378.606,661.45V349.081c0-9.887,7.873-17.761,17.761-17.761c9.887,0,17.761,7.873,17.761,17.761V661.45   c0,9.887-7.873,17.761-17.761,17.761C386.57,680.309,378.606,671.337,378.606,661.45z M504.212,661.45V349.081   c0-9.887,7.873-17.761,17.761-17.761s17.761,7.873,17.761,17.761V661.45c0,9.887-7.873,17.761-17.761,17.761   C513.093,680.309,504.212,671.337,504.212,661.45z"/></svg>
                </template>      
                Удалить         
            </Button>   
            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
                <div @click="selectCategory = category.id" :class="{'outline': selectCategory == category.id}" v-for="category in categorysFilter" class="cursor-pointer px-1.5 pb-3 md:p-3 pt-0 bg-white shadow-[0_4px_30px_0_rgba(0,0,0,0.1)] rounded-lg font-light text-sm">
                    <div><img class="object-contain h-32 aspect-[4/3]" :src="`/img/auto/${category.img}`" alt=""></div>
                    <p>{{category.title}}</p>
                </div>                
            </div>                    
        </div>
        <div v-else-if="str == 'add'" class="mb-6">                        
            <h2 class="h2 mb-8">Добавление категории</h2>
            <div>
                <form @submit.prevent="addCategory" class="flex flex-col gap-4 md:gap-6">
                    <input type="text" placeholder="Название категории" class="input_primary" v-model="form_category.title">
                    <input type="text" placeholder="Изображение" class="input_primary" v-model="form_category.img"> 
                    <button type="submit" class="btn_primary w-full max-w-[306px] mt-6 m-auto max-md:mt-4">Добавить</button>
                </form>
            </div>           
        </div>
    </div>
</template>

<script setup>
import { Button, ButtonGroup, Input} from 'flowbite-vue'
import { useAccountStore } from "~/stores/accountStore";
import { useAlertStore } from "~/stores/alertStore";  

const alertStore = useAlertStore();
const accountStore = useAccountStore(); 

let str = ref(null)

let form_category = ref({})

const config = useRuntimeConfig()

let selectCategory = ref(null)

let filterTitle = ref(null)

const categorysFilter = computed( ()=>{    
    if (filterTitle.value) {
        return categorys.value.filter(a=>{
            return a.title.toUpperCase().includes(filterTitle.value.toUpperCase())
        })
    }
    return categorys.value
}) 

const selectCategoryAdd = (category)=>{
    selectCategory.value = category.id
    form_category.value = category
}

let categorys = ref({})


const deleteCategory = async()=>{    
    const { data, error } = await useFetch(`${config.public.apiBase}/category/${selectCategory.value}`,{
        method: 'delete',
        headers: {
            Authorization: `Bearer ${accountStore.api_token}`,
        },
        onResponseError({ request, response, options }) {
            alertStore.type = "danger"
            alertStore.message = "При удалении категории произошла ошибка"
            alertStore.isAlert = true  
        },   
        onResponse({ request, response, options }) {
            alertStore.type = "info"
            alertStore.message = "Категория успешно удалена"
            alertStore.isAlert = true 
            getCategorys()
        },
    })   
}

const addCategory = async()=>{    
    const { data, error } = await useFetch(`${config.public.apiBase}/category`,{
        method: 'post',
        headers: {
            Authorization: `Bearer ${accountStore.api_token}`,
        },
        body:{
            title: form_category.value.title,
            img:form_category.value.img,           
        },
        onResponseError({ request, response, options }) {
            alertStore.type = "danger"
            alertStore.message = "Произошла ошибка"
            alertStore.isAlert = true  
            console.log(response)
        },   
        onResponse({ request, response, options }) {
            alertStore.type = "info"
            alertStore.message = "Категория успешно добавлена"
            alertStore.isAlert = true 
            form_category.value = ''
            getCategorys()
        },
    })   
}

const updateCategory = async()=>{    
    const { data, error } = await useFetch(`${config.public.apiBase}/category/${selectCategory.value}`,{
        method: 'put',
        headers: {
            Authorization: `Bearer ${accountStore.api_token}`,
        },
        body:{
            title: form_category.value.title,
            img:form_category.value.description,            
        },
        onResponseError({ request, response, options }) {
            alertStore.type = "danger"
            alertStore.message =  "При обновлении произошла ошибка"
            alertStore.isAlert = true              
        },   
        onResponse({ request, response, options }) {
            alertStore.type = "info"
            alertStore.message = "Техника успешно обновлена"
            alertStore.isAlert = true 
            form_category.value = ''
            getCategorys()
        },
    })   
}

const getCategorys = async()=>{ 
    await useFetch(`${config.public.apiBase}/categorys`).then(res=>{
        categorys.value = res.data.value
    })
}

await useFetch(`${config.public.apiBase}/categorys`).then(res=>{
    categorys.value = res.data.value
})




    
</script>

