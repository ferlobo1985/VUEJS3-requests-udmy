import { createApp } from 'vue'
import App from './App.vue'

import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';
import Loader from './components/Utils/loader';
import Toaster from '@meforma/vue-toaster'; 

const app =  createApp(App);

app.component('app-header',Header);
app.component('app-footer',Footer);
app.component('app-loader',Loader);

app.use(Toaster);
app.mount('#app')
