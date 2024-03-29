import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../icons.js'
import '@/assets/css/styles.css'
import UUID from 'vue-uuid'
import Popover from 'vue-js-popover'

Vue.use(Popover)

Vue.use(UUID);

Vue.config.productionTip = false

//global components
import PaymentConfirmation from '@/components/Modals/PaymentConfirmationModal.vue'
import PaymentSuccessfull from '@/components/Modals/PaymentSuccessfullModal.vue'
import Error from '@/components/Modals/ErrorModal.vue'

Vue.component('PaymentConfirmation', PaymentConfirmation)
Vue.component('PaymentSuccessfull', PaymentSuccessfull)
Vue.component('Error', Error)


export const bus = new Vue()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
