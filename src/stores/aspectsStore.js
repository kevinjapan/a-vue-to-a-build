import { ref, computed } from 'vue'
import { defineStore, acceptHMRUpdate } from 'pinia'
import reqInit from "../utilities/requestInit/RequestInit"



// AspectsStore


export const useAspectsStore = defineStore('aspects_store', () => {

   // aspects_list
   const aspects_list = ref([])        
   
   // state props
   const aspect = ref('')

   // getters
   const get_aspect = computed(() => aspect.value)

   // actions
   function set_aspect(new_aspect) {
      aspect.value = new_aspect
   }

   // to support TOC and 'next' page, we need a list of 'aspects' (topics)
   async function load_aspects_list() {
      try {
         await fetch(`/aspects/aspects-list.json`,
            { 
               method: "GET",
               mode: "cors",
               cache: "default"
            }
         )
            .then(response => {
               return response.json()
            })
            .then(jsonData => {
               // we are accessing json static files, so no server-side wrapping around content
               aspects_list.value = jsonData
               // order aspects
               aspects_list.value.sort((a, b) => a.order - b.order)
            })
            .catch((error) => {
               throw error
            })
      }
      catch(error) {
         return {
            outcome: 'fail',
            message: error
         }
      }
      return {
         outcome: 'success',
         message: '' // we send no msg so as to not activate notification : 'The project was loaded successfully'
      }
   }

   async function load_aspect(aspect_slug) {
      try {
         await fetch(`/aspects/${aspect_slug}.md`,reqInit())
            .then(response => {
               return response.text()
            })
            .then(text => {
               // we are accessing json static files, so no server-side wrapping around content
               aspect.value = text
            })
            .catch((error) => {
               throw error
            })
      }
      catch(error) {
         return {
            outcome: 'fail',
            message: error
         }
      }
      return {
         outcome: 'success',
         message: '' // we send no msg so as to not activate notification : 'The aspect was loaded successfully'
      }
   }   

   // returns neighbour {prev,next} nav for curr_slug 
   // we know aspects_list is correctly ordered upon loading
   function slug_navs(curr_slug) {

      const aspect_index = aspects_list.value.findIndex((aspect) => {
         return aspect.route === `/aspects/${curr_slug}`
      })
      const prev_aspect = aspect_index > 0  ? aspects_list.value[aspect_index - 1] : null
      const next_aspect = aspect_index < aspects_list.value.length - 1 ? aspects_list.value[aspect_index + 1] : null
      
      return {
         prev:{
            title:prev_aspect !== null ? prev_aspect.title : '',
            route:prev_aspect !== null ? prev_aspect.route : ''
         },
         next:{
            title:next_aspect !== null ? next_aspect.title : '',
            route:next_aspect !== null ? next_aspect.route : ''
         }
      }
   }

   return { 
      aspects_list,
      aspect, 
      get_aspect, 
      set_aspect,
      load_aspects_list,
      load_aspect,
      slug_navs
   }
})

// hot module replacement for pinia
if (import.meta.hot) {
   import.meta.hot.accept(acceptHMRUpdate(useAspectsStore, import.meta.hot))
}