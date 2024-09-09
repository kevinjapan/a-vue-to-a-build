<script setup>
import { ref } from 'vue'

const today = new Date()
const copyright_date = ref(today.getFullYear())

</script>

<template>

   <section>
      copyright &copy; kev hastie 2021 - {{ copyright_date }}
   </section>

</template>

<style scoped>
section {
   width:100%;
   margin:auto;
   padding:2rem;
   background:hsl(0, 0%, 95%);
   font-size:.95rem;
   text-align:center;
}
</style>