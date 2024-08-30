<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'


const router = useRouter()

const main_nav_open = ref(false)

// we use router.push() rather than <RouterLink> since we want to interject to close app_nav
const open_nav_link = route => {
   main_nav_open.value = false
   router.push(route)
}

const toggle_main_nav = () => {
   main_nav_open.value = main_nav_open.value ? false : true
}


</script>


<template>

   <section>
      
      <!-- main TOC nav bar - only on sm -->
      <div class="main_nav_bar">
         <button @click="toggle_main_nav">menu</button>
      </div>

      <nav class="main_nav" :class="{main_nav_open: main_nav_open === true}">
         <ul style="display:flex;flex-direction:column;">

            
            <li><a @click="open_nav_link('/aspects/intro')">intro</a></li>
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

   </section>

</template>

<style scoped>


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

   nav.main_nav,
   nav.main_nav.main_nav_open {

      top:0;
      
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

nav a:first-of-type {
   /* to do : try out 'first-of-type' */
   border: 0;
}

a {cursor:pointer;}

nav a {
   display: inline-block;
   padding: 0 1rem;
   border-left: 1px solid var(--color-border);
}


@media (min-width: 1024px) {

   nav {
      text-align: left;
      margin-left: -1rem;
      font-size: 1rem;

      padding: 1rem 0;
      margin-top: 1rem;
   }

}

</style>