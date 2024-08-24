<script setup>
import { ref, watchEffect } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAspectsStore } from '@/stores/aspectsStore'
import markdownit from 'markdown-it'
import markdownitSup from 'markdown-it-sup'
import markdownitAnchor from 'markdown-it-anchor'


const router = useRouter()
const route = useRoute()
const aspectsStore = useAspectsStore()
const notify_msg = ref('')

const md = markdownit().use(markdownitSup).use(markdownitAnchor)
const rawHtml = ref('')

watchEffect(async() => {
   
   const result = await aspectsStore.load_aspect(route.params.aspectslug)
   if(result && result.message) notify_msg.value = result.message

   const rcvd_markdown = md.render(aspectsStore.aspect)
   if(rcvd_markdown === '') return

   // check for '!doctype html' in first line - if found, not md file, but some 'not found' or default response in html doc
   const doctype_index = rcvd_markdown.toUpperCase().indexOf('!DOCTYPE HTML')

   if((doctype_index > -1 && doctype_index < 20)) {
      router.replace('/notfound')
   }
   else {
      rawHtml.value = rcvd_markdown
      window.scroll(0,0)
   } 
})

// to do : 'next' page - link to order/toc in left-nav

// to do : make links target="_blank"

</script>

<template>

   <section class="aspect_view">

      <div class="markdown_content" v-html="rawHtml"></div>
      
      <AppStatus v-model="notify_msg" />

   </section>
   
</template>


<style scoped>

/*
'scoped' styles don't get applied to the rawHtml we generate from markdown
so we need to pre-set these styles earlier - see markdown.css
*/


section.aspect_view {
   width:100%;
   margin:0;
   margin-top:1rem;
   padding:0;
   text-align:left;
}


section.aspect_view {
   padding:1rem;
}
</style>