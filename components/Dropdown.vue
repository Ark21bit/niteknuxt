<template>
    <div class="dropdown">
        <div class="dropdown-title" :class="{'active': DropdownVisible}" @click="DropdownVisible = !DropdownVisible">{{title}}<span class="dropdown-icon"><img src="@/assets/img/select.svg" alt=""></span></div>
        <Transition>
            <div v-show="DropdownVisible" class="dropdown-body">
                <slot ></slot>
            </div>       
        </Transition>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type:String,
        default:"dropdown title"
    }
})
let DropdownVisible = ref(false);
</script>

<style scoped>
    .dropdown{
        transition: all .5s linear;
        overflow-y: hidden;
    }
    .v-enter-active,
    .v-leave-active {
      transition: opacity 0.8s ease, max-height .8s ease-in-out;
      max-height: 1000px;
    }

    .v-enter-from,
    .v-leave-to {
        max-height: 0px;
        opacity: 0;
    }
    .dropdown-title{
        display: flex;
        font-weight: 400;
        font-size: 16px;
        gap:12px
    }

    .dropdown{
        cursor: pointer;
    }
   

    .dropdown-icon{
        margin-left: auto;
        transform: rotateX(180deg) ;
        transition: transform .5s linear;
    }

    .dropdown-title.active .dropdown-icon{ 
        transform: none;
    }

    .filter .item .accordion-header span{  
        font-weight: 300;   
    }

</style>

