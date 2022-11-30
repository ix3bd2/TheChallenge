import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createStore } from 'vuex'

import App from './App.vue'
import router from './router'

import klant from './store/modules/klant/';
import energiebesparing from './store/modules/energiebesparing/';
import microbit from './store/modules/microbit/';
import user from './store/modules/user/';
import Particles from "vue3-particles";


export const store = createStore({
    modules: {
        klant,
        energiebesparing,
        microbit,
        user

    }
});

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Particles)
app.use(store)
app.mount('#app')