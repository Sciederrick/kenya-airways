<template>
  <div>
    <!-- jumbotron -->
    <div v-if="minimalInterface" id="jumbotron" class="h-1/2 md:h-screen w-screen relative">
      <img class="w-full h-full object-cover" :src="require('@/assets/images/Kenya-Airways-787-1536x1229.jpg')" alt="KQ aircraft image" >
      <div id="jumbotronOverlay" class="absolute inset-0 h-1/2 md:h-screen w-screen bg-black opacity-50"></div>
      <router-link :to="{ name:'Home', hash:'#bookingEnquiry' }">
        <input @click="displayButton=true" :class="{'md:hidden':displayButton}" class="hidden md:block md:absolute md:bottom-0 md:inset-x-0 md:w-48 md:mb-20 md:z-20 md:p-3 md:bg-red-700 md:text-white md:mx-auto md:border md:border-red-700 md:rounded md:shadow-2xl hover:bg-black hover:border-black focus:outline-none" type="submit" name="book" value="BOOK NOW">
      </router-link>
    </div>
    <!-- booking enquiry form|flights|seat selection|passenger details|extras|payment -->
    <div class="md:pt-12">
      <!-- milestone pills -->
      <div class="md:mx-auto md:w-3/4 my-3 flex justify-evenly md:justify-start text-xs md:text-base lg:text-lg px-1 text-center font-semibold">
        <div class="w-1/5 py-2 md:mr-1 lg:mr-4 border-r border-gray-400" :class="{'border-red-300':bookingProgress.BookingEnquiry}">
          <span class="md:px-2 text-gray-500" :class="{'text-red-500': bookingProgress.BookingEnquiry, underline: bookingProgress.BookingEnquiry}">enquiry</span>
        </div>
        <div class="w-1/5 py-2 md:mr-1 lg:mr-4 border-r border-gray-400" :class="{'border-red-300':bookingProgress.Seat}">
          <span class="md:px-2 text-gray-500" :class="{'text-red-500':bookingProgress.Seat, underline:bookingProgress.Seat}">seat</span>
        </div>
        <div class="w-1/5 py-2 md:mr-1 lg:mr-4 border-r border-gray-400" :class="{'border-red-300':bookingProgress.PassengerDetails}">
          <span class="md:px-2 text-gray-500" :class="{'text-red-500':bookingProgress.PassengerDetails, underline:bookingProgress.PassengerDetails}">passenger</span>
        </div>
        <div class="w-1/5 py-2 md:mr-1 lg:mr-4 border-r border-gray-400" :class="{'border-red-300':bookingProgress.Extras}">
          <span class="md:px-2 text-gray-500" :class="{'text-red-500':bookingProgress.Extras, underline:bookingProgress.Extras}">extras</span>
        </div>
        <div class="w-1/5 py-2 md:mr-1 lg:mr-4">
          <span class="md:px-2 text-gray-500" :class="{'text-red-500':bookingProgress.Payment, underline:bookingProgress.Payment}">payment</span>
        </div>
      </div>
      <div class="w-full">
        <p class="pt-4 pb-2 md:pt-6 md:pb-4 text-sm">Step <span class="text-red-600 text-base font-semibold">{{currentPage}}</span> of 5</p>
      </div>
      <!-- booking enquiry form -->
      <router-view :key="$route.path"></router-view>
    </div>
    <!-- testimonials -->
      <div v-if="minimalInterface" class="hidden mx-auto md:flex md:flex-row md:flex-wrap md:justify-evenly md:my-16 md:pt-10">
        <div class="p-6 my-5 max-w-lg bg-gray-100">
          <h2 class="text-left pb-1 text-red-800 font-bold caveat text-2xl">Mr Tony Fernandes</h2>
          <p class="text-left pl-5 text-xl">These awards are widely regarded as the industry's benchmark for Excellence. For us, the awards clearly reflect a vote of confidence from global travellers, who acknowledge and appreciate our continuous drive to deliver high-quality service. .</p>
          <p class="text-right font-hairline text-black caveat text-xl">CEO, Jetstar Airways</p>
        </div>
        <div class="p-6 my-5 max-w-lg bg-gray-100">
          <h2 class="text-left pb-1 text-red-800 font-bold caveat text-2xl">Mr Tim Clark</h2>
          <p class="text-left pl-5 text-xl">These highly respected awards are based on direct passenger satisfaction, and are a real testament and true reflection of the hard work of all of our employees.</p>
          <p class="text-right font-hairline text-black caveat text-xl">CEO, Garuda Indonesia</p>
        </div>
        <div class="p-6 my-5 max-w-lg bg-gray-100">
          <h2 class="text-left pb-1 text-red-800 font-bold caveat text-2xl">Mr Akbar Al Baker </h2>
          <p class="text-left pl-5 text-xl">Winning this prestigious award demonstrates Kenya Airways consistent commitment to high-quality customer service and all-around excellence.</p>
          <p class="text-right font-hairline text-black caveat text-xl">CEO, Cathay Pacific Airways</p>
        </div>
        <div class="p-6 my-5 max-w-lg bg-gray-100">
          <h2 class="text-left pb-1 text-red-800 font-bold caveat text-2xl">Mr Ivan Chu</h2>
          <p class="text-left pl-5 text-xl">Throughout the years, we have worked hard to improve our service delivery as part of our airline wide initiative to enhance customer experience.</p>
          <p class="text-right font-hairline text-black caveat text-xl">CEO, Cathay Pacific Airways</p>
        </div>
      </div>
      <!-- our staff -->
      <div v-if="minimalInterface" class="hidden md:block md:my-16">
        <div class="w-5/6 h-16 mx-auto bg-red-700 flex items-center justify-center">
          <h2 class="my-auto text-center text-white uppercase text-xl">leading staff</h2>
        </div>
        <div class="flex flex-wrap justify-evenly my-16">
          <div class="mx-auto">
            <div class="rounded-full mx-auto md:w-24 md:h-24 lg:w-40 lg:h-40 overflow-hidden">
              <img class="w-full h-full object-cover" :src="require('@/assets/images/michael-dam-mEZ3PoFGs_k-unsplash.jpg')" alt="CEO">
            </div>
            <p class="font-semibold pt-5 text-center md:text-sm lg:text-base">Alice Stevens</p>
            <p class="font-semibold pb-5 text-center caveat text-sm text-red-600">CEO Kenya Airways</p>
          </div>
          <div class="mx-auto">
            <div class="rounded-full mx-auto md:w-24 md:h-24 lg:w-40 lg:h-40 overflow-hidden">
              <img class="w-full h-full object-cover" :src="require('@/assets/images/prince-akachi-J1OScm_uHUQ-unsplash.jpg')" alt="CFO">
            </div>
            <p class="font-semibold pt-5 text-center md:text-sm lg:text-base">Shanice Anderson</p>
            <p class="font-semibold pb-5 text-center caveat text-sm text-red-600">CFO Kenya Airways</p>
          </div>
          <div class="mx-auto">
            <div class="rounded-full mx-auto md:w-24 md:h-24 lg:w-40 lg:h-40 overflow-hidden">
              <img class="w-full h-full object-cover" :src="require('@/assets/images/usman-yousaf-yIOViGQmjJ4-unsplash.jpg')" alt="CTO">
            </div>
            <p class="font-semibold pt-5 text-center md:text-sm lg:text-base">Shamir Kumar</p>
            <p class="font-semibold pb-5 text-center caveat text-sm text-red-600">CTO Kenya Airways</p>
          </div>
        </div>
        <div class="w-5/6 mx-auto bg-red-700" style="height:1px;">

        </div>
      </div>
    <!-- mobile navigation bar -->
    <MobileNav v-if="showNav" class="md:hidden"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MobileNav from '@/components/MobileNav.vue'
import {bus} from '@/main.js'
export default {
  name: 'Home',
  components:{
    MobileNav
  },
  props:{
    showNav:{
      type:Boolean,
      required:true
    }
  },
  data(){
    return {
      displayButton:false,
      minimalInterface:true,  /* Implementing Constraints to improve booking experience */
      bookingProgress:{
        BookingEnquiry: false,
        Seat: false,
        PassengerDetails: false,
        Extras: false,
        Payment: false
      },
      currentPage: 1,
    }
  },
  methods:{
    activeComponent(){
      bus.$on('activeComponent', (currentComponent) => {
        for (const component in this.bookingProgress) {
          this.bookingProgress[component] = false //reset
        }
        this.bookingProgress[currentComponent] = true
        switch(currentComponent){
          case 'BookingEnquiry':
            this.currentPage = 1
            break
          case 'Seat':
            this.currentPage = 2
            break
          case 'PassengerDetails':
            this.currentPage = 3
            break
          case 'Extras':
            this.currentPage = 4
            break
          case 'Payment':
            this.currentPage = 5
        }
      })
    }
  },
  created(){
    this.activeComponent()
  }
}
</script>
