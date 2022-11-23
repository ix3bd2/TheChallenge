import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createStore } from 'vuex'

import App from './App.vue'
import router from './router'

import klant from './store/modules/klant/';
import energiebesparing from './store/modules/energiebesparing/';
import microbit from './store/modules/microbit/';

export const store = createStore({
    modules: {
        klant,
        energiebesparing,
        microbit

    }
});
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(store)
app.mount('#app')