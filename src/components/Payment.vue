<template>
  <div id="payment">
    <!-- almost done message -->
    <div class="flex justify-between py-2 px-3 md:px-5 lg:px-16 md:py-3 lg:py-4 mt-4 md:mt-5 lg:mx-2 bg-gray-800 text-sm md:text-base lg:text-lg text-white">
      <input class="p-2 rounded-sm bg-red-600 text-white text-xs lg:text-sm shadow hover:bg-red-700 focus:outline-none" type="submit" value="CHANGE PASSENGER DETAILS">
      <span @click="$router.go(-1)" class="my-auto underline cursor-pointer">Go back</span>
    </div>
    <!-- header -->
    <div class="flex justify-between px-2 md:px-4 lg:px-16 bg-green-300 md:mx-2 py-2 my-1 text-xs lg:text-base">
      <!-- seat price * no of seats -->
      <div class="">
        <span class="text-red-600">3</span> * 70,000 + 7000
      </div>
      <!-- total fee -->
      <div class="">
        Total Fee: <span class="text-red-600">217,000 KES</span>
      </div>
    </div>
    <!-- payment methods -->
    <p class="text-left px-2 lg:px-20 pt-4">Choose a method of payment:</p>
    <div class="flex flex-no-wrap justify-evenly bg-gray-200 my-2 p-1 md:mx-2">
      <!-- mpesa -->
      <div class="mx-1">
        <div class="w-16 h-10 lg:w-24 lg:h-16 overflow-hidden rounded-sm shadow-lg">
          <img class="h-full w-full object-cover" :src="require('@/assets/images/mpesa.png')" alt="mpesa icon">
        </div>
        <div class="w-full mt-2 bg-green-900" style="height:2px;"></div>
      </div>
      <!-- airtel -->
      <div class="mx-1">
        <div class="w-16 h-10 lg:w-24 lg:h-16 overflow-hidden rounded-sm shadow-lg">
          <img class="h-full w-full object-cover" :src="require('@/assets/images/airtel.jpg')" alt="airtel icon">
        </div>
        <div class="w-full mt-2 bg-green-900" style="height:2px;"></div>
      </div>
      <!-- visa -->
      <div class="mx-1">
        <div class="w-16 h-10 lg:w-24 lg:h-16 overflow-hidden rounded-sm shadow-lg">
          <img class="h-full w-full object-cover" :src="require('@/assets/images/visa.png')" alt="visa icon">
        </div>
        <div class="w-full mt-2 bg-green-900" style="height:2px;"></div>
      </div>
      <!-- paypal -->
      <div class="mx-1">
        <div class="w-16 h-10 lg:w-24 lg:h-16 overflow-hidden rounded-sm shadow-lg">
          <img class="h-full w-full object-cover" :src="require('@/assets/images/paypal.jpg')" alt="paypal icon">
        </div>
        <div class="w-full mt-2 bg-green-900" style="height:2px;"></div>
      </div>
      <!-- hold reservation -->
      <div class="mx-1">
        <div class="w-16 h-10 lg:w-24 lg:h-16 overflow-hidden rounded-sm shadow-lg">
          <img class="h-full w-full object-cover" :src="require('@/assets/images/hold-reservation.jpg')" alt="hold reservation">
        </div>
        <div class="w-full mt-2 bg-green-900" style="height:2px;"></div>
      </div>
    </div>
    <!-- payment details form -->
    <div class="my-8 mx-1">
      <router-view :key="$route.path"></router-view>
    </div>
  </div>
</template>

<script>
export default{
  name:'Payment'
}
</script>
