<script setup>
import { ref } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import AppFooter from './components/App/AppFooter/AppFooter.vue'


const router = useRouter()

const main_nav_open = ref(false)

const toggle_main_nav = () => {
   main_nav_open.value = main_nav_open.value ? false : true
}


// we use router.push() rather than <RouterLink> since we want to interject to close app_nav
const open_nav_link = route => {

   main_nav_open.value = false
   
   router.push(route)
}

</script>

<template>

   <header>
      <h1>a vue to a build</h1>
      <!-- class="app_nav"  - distinct from main_nav (toc) below -->
   </header>

   <main>

      <!-- main TOC nav bar - only on sm -->
      <div class="main_nav_bar">
         <button @click="toggle_main_nav">menu</button>
      </div>

      <nav class="main_nav" :class="{main_nav_open: main_nav_open === true}">
         <ul style="display:flex;flex-direction:column;">

            
            <li><a @click="open_nav_link('/aspects/intro')">Home</a></li>
            <li><a @click="open_nav_link('/aspects/upfront')">what you need to know</a></li>
            <li><a @click="open_nav_link('/aspects/goal')">the goal</a></li>
            <li><a @click="open_nav_link('/aspects/api-choice')">an early challenge</a></li>
            <li><a @click="open_nav_link('/aspects/build-step')">build step</a></li>
            <li><a @click="open_nav_link('/aspects/component')">the vue component</a></li>
            <li><a @click="open_nav_link('/aspects/template')">the template</a></li>
            <li><a @click="open_nav_link('/aspects/reactivity')">reactivity</a></li>
            <li><a @click="open_nav_link('/aspects/attributes')">using html attributes</a></li>
            <li><a @click="open_nav_link('/aspects/connecting')">connecting components</a></li>
            <li><a @click="open_nav_link('/aspects/styling')">styling</a></li>

         </ul>
      </nav>

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
nav.main_nav {

   /*display:none;*/

   /*position:-webkit-sticky;
   position:-moz-sticky;
   position:-ms-sticky;
   position:-o-sticky;*/
   position:fixed;


   /*position:absolute;*/
   top:60px;
   left:0;
   background:white;

   
   /* transitions */
   -webkit-transform: translateX(-100%);
   -ms-transform: translateX(-100%);
   transform: translateX(-100%);
   opacity:0;

   -webkit-transition:opacity .35s ease-in-out,-webkit-transform .75s ease-in-out;
   transition:opacity .35s ease-in-out,-webkit-transform .75s ease-in-out;
   -o-transition:opacity .35s ease-in-out,transform .75s ease-in-out;
   transition:opacity .5s ease-in-out,transform .75s ease-in-out;
   transition:opacity .5s ease-in-out,transform .75s ease-in-out,-webkit-transform .75s ease-in-out;

}
/* toggle main_nav 'dropdown' */
nav.main_nav.main_nav_open {
   /* display:block;*/
   display:inline;
   
   /* transitions */
   -webkit-transform: translateY(0);
   -ms-transform: translateY(0);
   transform: translateY(0);
   opacity:1;

}

div.main_nav_bar {   
   position:-webkit-sticky;
   position:-moz-sticky;
   position:-ms-sticky;
   position:-o-sticky;
   position:sticky;
   top:0;
   left:0;

   width:100%;
   height:fit-content;
   background:hsl(60, 100%, 70%);

   font-size:.9rem;
}
@media (min-width: 1024px) {
   main {
      grid-template-columns: 1fr 3.5fr;
   }
   nav.main_nav,
   nav.main_nav.main_nav_open {
      display:block;
      position:relative;
      background:none;
      
      -webkit-transform: translateX(0);
      -ms-transform: translateX(0);
      transform: translateX(0);
      opacity:1;
   }
   div.main_nav_bar {
      display:none;
   }
}

h1 {
   font-weight:300;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

a {cursor:pointer;}
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
   /* to do : try out 'first-of-type' */
  border: 0;
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

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
