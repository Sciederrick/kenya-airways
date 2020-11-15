<template>
  <div id="seats">
    <!-- change flight & go back -->
    <div id="resultsNav" class="flex justify-between py-1 px-3 md:px-5 lg:px-16 md:py-2 lg:py-3 mt-4 md:mt-5 lg:mx-2 bg-gray-800 text-sm md:text-base lg:text-lg text-white">
      <input class="p-2 rounded-sm bg-red-600 text-white text-xs md:text-sm lg:text-base shadow hover:bg-red-700 focus:outline-none" type="submit" value="CHANGE FLIGHT">
      <span @click="$router.go(-1)" class="my-auto underline cursor-pointer">Go back</span>
    </div>
    <!-- header -->
    <div class="flex justify-between px-2 md:px-4 lg:px-16 bg-green-300 md:mx-2 py-1 my-1">
      <!-- seat price * no of seats -->
      <div class="">
        <span class="text-red-600">3</span> * 70,000
      </div>
      <!-- total fee -->
      <div class="">
        Total Fee: <span class="text-red-600">210,000 KES</span>
      </div>
    </div>
    <div class="w-full h-64 lg:mx-2 relative">
      <img class="w-full h-full object-cover" :src="require('@/assets/images/1739.jpg')" alt="aeroplane seats">
      <p class="absolute inset-0 text-white text-xl pt-24">Coming soon ...</p>
    </div>
  </div>
</template>

<script>
export default{
name:'Seats'
}
</script>
