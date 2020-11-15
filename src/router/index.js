import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BookingEnquiry from '../components/BookingEnquiry.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children:[
      {
        path: '',
        name: 'Home',
        component: BookingEnquiry
      },
      {
        path: '/flightResults',
        name: 'FlightResults',
        component: () => import(/* webpackChunkName: "flight results" */ '../components/FlightResults.vue')
      },
      {
        path: '/seatBooking',
        name: 'Seats',
        component: () => import(/* webpackChunkName: "seats" */ '../components/Seats.vue')
      },
      {
        path: '/passengerDetails',
        name: 'PassengerDetails',
        component: () => import(/* webpackChunkName: "passenger details */ '../components/PassengerDetails.vue')
      }
    ]
  },
  {
    path: '/contactUs',
    name: 'ContactUs',
    component: () => import(/* webpackChunkName: "contact us" */ '../views/ContactUs.vue')
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: () => import(/* webpackChunkName: "about us" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior(to, from, savedPosition){
    if(savedPosition){
      return savedPosition
    }else{
      const position = {}
      if(to.hash){
        position.selector = to.hash
        if(to.hash === '#bookingEnquiry'){
          position.offset = {y:95}
        }
        if(document.querySelector(to.hash)){
          return position
        }
        return false
      }
    }
  },
  base: process.env.BASE_URL,
  routes
})

export default router
