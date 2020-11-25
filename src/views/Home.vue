<template>
  <div>
    <!-- jumbotron -->
    <div v-if="minimalInterface" id="jumbotron" class="h-1/2 md:h-screen w-screen relative">
      <img class="w-full h-full object-cover" :src="require('@/assets/images/Kenya-Airways-787-1536x1229.jpg')" alt="KQ aircraft image" >
      <div id="jumbotronOverlay" class="absolute inset-0 h-1/2 md:h-screen w-screen bg-black opacity-50"></div>
      <router-link :to="{ name:'Home', hash:'#bookingEnquiry' }">
        <input @click="displayButton=true" :class="{'md:hidden':displayButton}" class="hidden md:block md:absolute md:bottom-0 md:inset-x-0 md:mb-20 md:z-20 md:p-3 md:bg-red-700 md:text-white md:mx-auto md:border md:border-red-700 md:rounded md:shadow-2xl hover:bg-black hover:border-black focus:outline-none" type="submit" name="book" value="BOOK NOW">
      </router-link>
    </div>
    <!-- booking enquiry form|flights|seat selection|passenger details|extras|payment -->
    <div class="md:pt-12">
      <!-- milestone pills -->
      <div class="md:mx-auto md:w-3/4 my-3 flex justify-evenly md:justify-start text-xs md:text-base lg:text-lg px-1 text-center font-semibold">
        <div class="w-1/5 py-2 md:mr-1 lg:mr-4 border-r border-red-300">
          <!-- <fa-icon :icon="['fas','plane']" size="1x"/> -->
          <span class="md:px-2 text-red-500 underline">enquiry</span>
        </div>
        <div class="w-1/5 py-2 md:mr-1 lg:mr-4 border-r border-gray-400">
          <!-- <fa-icon :icon="['fas','plane']" size="1x"/> -->
          <span class="md:px-2 text-gray-500">seat</span>
        </div>
        <div class="w-1/5 py-2 md:mr-1 lg:mr-4 border-r border-gray-400">
          <!-- <fa-icon :icon="['fas','plane']" size="1x"/> -->
          <span class="md:px-2 text-gray-500">passenger</span>
        </div>
        <div class="w-1/5 py-2 md:mr-1 lg:mr-4 border-r border-gray-400">
          <!-- <fa-icon :icon="['fas','plane']" size="1x"/> -->
          <span class="md:px-2 text-gray-500">extras</span>
        </div>
        <div class="w-1/5 py-2 md:mr-1 lg:mr-4">
          <!-- <fa-icon :icon="['fas','plane']" size="1x"/> -->
          <span class="md:px-2 text-gray-500">payment</span>
        </div>
      </div>
      <div class="w-full">
        <p class="pt-4 pb-2 md:pt-6 md:pb-4 text-sm">Step <span class="text-red-600">1</span> of 6</p>
      </div>
      <!-- booking enquiry form -->
      <router-view :key="$route.path"></router-view>
    </div>
    <!-- testimonials -->
      <div v-if="minimalInterface" class="hidden mx-auto md:flex md:flex-row md:flex-wrap md:justify-evenly md:my-16 md:pt-10">
        <div class="p-6 my-5 max-w-lg bg-gray-100">
          <h2 class="text-left pb-1 text-red-800 font-bold caveat text-2xl">“Lorem ipsum dolor sit amet”</h2>
          <p class="text-left pl-5 text-xl">Sed nunc nisi, pretium eget vestibulum a, bibendum id velit. In urna orci, imperdiet quis pulvinar in, pretium et turpis.</p>
          <p class="text-right font-hairline text-black caveat text-xl">Lorem ipsum dolor sit amet</p>
        </div>
        <div class="p-6 my-5 max-w-lg bg-gray-100">
          <h2 class="text-left pb-1 text-red-800 font-bold caveat text-2xl">“Lorem ipsum dolor sit amet”</h2>
          <p class="text-left pl-5 text-xl">Sed nunc nisi, pretium eget vestibulum a, bibendum id velit. In urna orci, imperdiet quis pulvinar in, pretium et turpis.</p>
          <p class="text-right font-hairline text-black caveat text-xl">Lorem ipsum dolor sit amet</p>
        </div>
        <div class="p-6 my-5 max-w-lg bg-gray-100">
          <h2 class="text-left pb-1 text-red-800 font-bold caveat text-2xl">“Lorem ipsum dolor sit amet”</h2>
          <p class="text-left pl-5 text-xl">Sed nunc nisi, pretium eget vestibulum a, bibendum id velit. In urna orci, imperdiet quis pulvinar in, pretium et turpis.</p>
          <p class="text-right font-hairline text-black caveat text-xl">Lorem ipsum dolor sit amet</p>
        </div>
        <div class="p-6 my-5 max-w-lg bg-gray-100">
          <h2 class="text-left pb-1 text-red-800 font-bold caveat text-2xl">“Lorem ipsum dolor sit amet”</h2>
          <p class="text-left pl-5 text-xl">Sed nunc nisi, pretium eget vestibulum a, bibendum id velit. In urna orci, imperdiet quis pulvinar in, pretium et turpis.</p>
          <p class="text-right font-hairline text-black caveat text-xl">Lorem ipsum dolor sit amet</p>
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
            <p class="font-semibold py-5 text-center md:text-sm lg:text-base">CEO Kenya Airways</p>
          </div>
          <div class="mx-auto">
            <div class="rounded-full mx-auto md:w-24 md:h-24 lg:w-40 lg:h-40 overflow-hidden">
              <img class="w-full h-full object-cover" :src="require('@/assets/images/prince-akachi-J1OScm_uHUQ-unsplash.jpg')" alt="CFO">
            </div>
            <p class="font-semibold py-5 text-center md:text-sm lg:text-base">CFO Kenya Airways</p>
          </div>
          <div class="mx-auto">
            <div class="rounded-full mx-auto md:w-24 md:h-24 lg:w-40 lg:h-40 overflow-hidden">
              <img class="w-full h-full object-cover" :src="require('@/assets/images/usman-yousaf-yIOViGQmjJ4-unsplash.jpg')" alt="CTO">
            </div>
            <p class="font-semibold py-5 text-center md:text-sm lg:text-base">CTO Kenya Airways</p>
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
      minimalInterface:true  /*Implementing Constraints to improve booking experience*/
    }
  }
}
</script>
