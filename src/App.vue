<script setup>
import { RouterView } from 'vue-router'
import AppNav from './components/App/AppNav/AppNav.vue'
import AppFooter from './components/App/AppFooter/AppFooter.vue'








</script>

<template>

   <header>
      <h1>a vue to a build</h1>
      <!-- class="app_nav"  - distinct from main_nav (toc) below -->
   </header>

   <main>

      <AppNav />

      <section class="main_content">
         <RouterView />
      </section>

   </main>

   <AppFooter />

</template>

<style scoped>

main {
   position:relative;
   display:grid;
   grid-template-columns: 1fr;
   min-height:120vh;
}
@media (min-width: 1024px) {
   main {
      grid-template-columns: 1fr 3.5fr;
   }
}

h1 {
   font-weight:300;
   font-size:2.5rem;
   font-style:italic;
   font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

.logo {
   display: block;
   margin: 0 auto 2rem;
}



header {
   padding:1rem 2rem 1rem 2rem;
   background:hsl(0, 0%, 95%);
}
@media (min-width: 1024px) {
   header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
   }

   .logo {
      margin: 0 2rem 0 0;
   }

}
</style>
