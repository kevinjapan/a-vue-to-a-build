<script setup>
import { ref, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { useAspectsStore } from '@/stores/aspectsStore'


// AppNav

const router = useRouter()
const aspectsStore = useAspectsStore()
const aspects_list = ref([])
const main_nav_open = ref(false)

onBeforeMount(async() => {
   // load the aspects_list [TOC]   
   await aspectsStore.load_aspects_list()
   aspects_list.value = aspectsStore.aspects_list
   // future : filter_aspects_list ? - eg remove defunct aspects (we may want to keep them in list but don't display)
})

// we use router.push() rather than <RouterLink> since we want to interject to close app_nav
const open_nav_link = route => {
   main_nav_open.value = false
   router.push(route)
}

const toggle_main_nav = () => {
   main_nav_open.value = main_nav_open.value === true ? false : true
}

// to do : highlight selected element in nav list

</script>

<template>
   <section>
      <div class="main_nav_bar">
         <button @click="toggle_main_nav">menu</button>
      </div>
      <nav class="main_nav" :class="{main_nav_open: main_nav_open === true}">
         <ul>
            <li v-for="aspect in aspects_list" :key="aspect.title">
               <a @click="open_nav_link(aspect.route)">{{ aspect.title }}</a>
            </li>
         </ul>
      </nav>
   </section>
</template>

<style scoped>
nav.main_nav {
   position:fixed;
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
   display:inline;

   /* transitions */
   -webkit-transform: translateY(0);
   -ms-transform: translateY(0);
   transform: translateY(0);
   opacity:1;
}
ul {
   display:-webkit-box;
   display:-ms-flexbox;
   display:flex;
   
   -webkit-box-orient:vertical;
   -webkit-box-direction:normal;
   -ms-flex-direction:column;
   flex-direction:column;
}

div.main_nav_bar {
   /* we need 'webkit' etc prefixes here for IOS safari - 'sticky' won't suffice */
   position:-webkit-sticky;
   position:-moz-sticky;
   position:-ms-sticky;
   position:-o-sticky;
   position:sticky;
   top:0;
   left:0;

   width:100%;

   height:-webkit-fit-content;
   height:-moz-fit-content;
   height:fit-content;

   background:hsl(60, 100%, 70%);
   font-size:.9rem;
}

nav {
   width: 100%;
   text-align: center;
   margin-top: 2rem;
}
nav a {
   display: inline-block;
   padding: 0 1rem;
   border-left: 1px solid var(--color-border);
}
nav a.router-link-exact-active {
   color: var(--color-text);
}
nav a.router-link-exact-active:hover {
   background-color: transparent;
}


@media (min-width: 1024px) {
   nav {
      margin-left: -1rem;
      margin-top: 1rem;
      padding: 1rem 0;
      text-align: left;
      font-size: 1rem;
   }
   nav.main_nav,
   nav.main_nav.main_nav_open {
      position:relative;
      top:0;
      
      display:block;
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

</style>