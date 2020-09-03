import Vue from 'vue'
import App from './App.vue'
import Button from '@/components/button/index.js'
import Radio from '@/components/radio/index.js'

const components = [
  Button,
  Radio
];

components.forEach(component => {
  Vue.component(component.name, component);
});

export default {
  Button,
}
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
