<template>
     <list-group class="w-fit mt-12">
        <list-group-item><NuxtLink to="/Admin/Category">управление категориями</NuxtLink> </list-group-item>
        <list-group-item><NuxtLink to="/Admin/Technic">управление списком техники</NuxtLink> </list-group-item>       
    </list-group>
</template>

<script setup>
    import { ListGroup, ListGroupItem } from 'flowbite-vue'
</script>

