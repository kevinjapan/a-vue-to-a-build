import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import reqInit from "../utilities/requestInit/RequestInit"



// AspectsStore

export const useAspectsStore = defineStore('aspects_store', () => {

   // state props
   const aspect = ref('')

   // getters
   const get_aspect = computed(() => aspect.value)

   // actions
   function set_aspect(new_aspect) {
      aspect.value = new_aspect
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

   return { 
      aspect, get_aspect, set_aspect,
      load_aspect
   }
 })

