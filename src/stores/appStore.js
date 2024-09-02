// import { ref, computed, watch } from 'vue'
import { defineStore, acceptHMRUpdate } from 'pinia'



// AppStore


export const useAppStore = defineStore('app_store', () => {

   return { 

   }

})


// hot module replacement for pinia
if (import.meta.hot) {
   import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
}