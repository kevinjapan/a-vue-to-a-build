<script setup>
import { RouterView } from 'vue-router'
import AppNav from './components/App/AppNav/AppNav.vue'
import AppFooter from './components/App/AppFooter/AppFooter.vue'

</script>

<template>
   <header>
      <h1>a vue to a build</h1>
   </header>
   <main>
      <AppNav />
      <RouterView />
   </main>
   <AppFooter />
</template>


<style scoped>
main {
   position:relative;
   
   display:-ms-grid;
   display:grid;

   -ms-grid-columns:1fr;
   grid-template-columns:1fr;

   min-height:120vh;
}
@media (min-width: 1024px) {
   main {
      -ms-grid-columns:1fr 3.5fr;
      grid-template-columns:1fr 3.5fr;
   }
}
h1 {
   font-weight:300;
   font-size:2.5rem;
   font-style:italic;
   font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
header {
   padding:1rem 2rem 1rem 2rem;
   background:hsl(0, 0%, 95%);
}
@media (min-width: 1024px) {
   header {
      display:-webkit-box;
      display:-ms-flexbox;
      display: flex;

      -webkit-box-pack:center;
      -ms-flex-pack:center;
      justify-content:center;

      -webkit-box-align:center;
      -ms-flex-align:center;
      align-items:center;

      /* padding-right: calc(var(--section-gap) / 2); */
   }

}
</style>
