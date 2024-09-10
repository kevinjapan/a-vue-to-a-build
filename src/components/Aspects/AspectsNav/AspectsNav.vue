<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAspectsStore } from '@/stores/aspectsStore'



// AspectsNav
// footer nav to neighbouring Aspects pages

const props = defineProps({
  current_slug: String
})

const router = useRouter()
const aspectsStore = useAspectsStore()
const prev = ref({})
const next = ref({})


// use a getter to access props changes
watch(() => props.current_slug,() => {
   const slug_navs = aspectsStore.slug_navs(props.current_slug)
   setTimeout(() => hydrate(slug_navs),200)
})

onMounted(() => {

   const slug_navs = aspectsStore.slug_navs(props.current_slug)

   // we delay calls to hydrate for page to load markdown
   // slug_nav is undefined if either end index of array
   setTimeout(() => hydrate(slug_navs),400)

})

const hydrate = (slug_navs) => {
   prev.value = slug_navs.prev
   next.value = slug_navs.next
}

const open_nav_link = route => router.push(route)

</script>

<template>
   <section class="flex space_between m_2">
      <div><a @click="open_nav_link(prev.route)">{{ prev.title }}</a></div>
      <div class="grey_text italic">{{ props.current_slug }}</div>
      <div><a @click="open_nav_link(next.route)">{{ next.title }}</a></div>
   </section>
</template>

<style scoped>
a {
   padding:.35rem;
   padding-left:.5rem;
   padding-right:.5rem;
}
a:hover {
   font-weight:500;
   background:hsl(0, 0%, 94%);
}
</style>
