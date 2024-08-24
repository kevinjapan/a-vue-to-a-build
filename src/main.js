import './assets/style.css'
import './assets/markdown.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import AppStatus from './components/App/AppStatus/AppStatus.vue'


const app = createApp(App)

app.use(createPinia())
app.use(router)


// Global Component Registration
// The application instance also provides a few methods for registering app-scoped assets
// eg this makes the AppStatus available for use anywhere in our app.
// cf Local registration scopes the availability of the registered components to the current component only. 
// It makes the dependency relationship more explicit, and is more tree-shaking friendly.
app.component('AppStatus', AppStatus)



app.mount('#app')

