<template>
  <div id="passengerDetails">
    <!-- back and change flight -->
    <div class="flex justify-between py-2 px-3 md:px-5 lg:px-16 md:py-3 lg:py-4 mt-4 md:mt-5 lg:mx-2 bg-gray-800 text-sm md:text-base lg:text-lg text-white">
      <input class="p-2 rounded-sm bg-red-600 text-white text-xs md:text-sm lg:text-base shadow hover:bg-red-700 focus:outline-none" type="submit" value="CHANGE FLIGHT">
      <span @click="$router.go(-1)" class="my-auto underline cursor-pointer">Go back</span>
    </div>
    <!-- header -->
    <div class="bg-green-200 mx-2 mt-1 md:mx-2">
      <p class="text-left pl-4 md:pl-4 lg:pl-16 uppercase font-semibold py-3 text-xs md:text-base">PASSENGER DETAILS</p>
    </div>
    <!-- form -->
    <form class="mx-2 md:ml-4 lg:ml-16">
      <!-- title --> <!-- first name --> <!-- last name -->
      <div class="flex flex-wrap justify-start my-4 md:my-10">
        <div class="flex ml-2 my-1">
          <select class="border border-black shadow rounded pl-3 p-2 lg:py-3" id="title">
            <option disabled value="" selected>TITLE</option>
            <option>Dr.</option>
            <option>Mr.</option>
            <option>Mrs.</option>
            <option>Ms.</option>
            <option>Prof.</option>
            <option>Eng.</option>
          </select>
        </div>
        <div class="w-full md:w-1/3 border rounded mx-2 my-1 border-black shadow-sm p-2 lg:py-3">
          <input class="w-full text-sm pl-10 focus:outline-none" type="text" placeholder="FIRST NAME">
        </div>
        <div class="w-full md:w-1/3 border rounded mx-2 my-1 border-black shadow-sm p-2 lg:py-3">
          <input class="w-full text-sm pl-10 focus:outline-none" type="text" placeholder="LAST NAME">
        </div>
      </div>
      <!-- date of birth -->
      <div class="md:w-2/3 lg:w-1/2 border rounded mx-2 my-4 md:my-10 border-black shadow-sm p-2 lg:py-3">
        <input class="w-full self-center text-center focus:outline-none" type="date" placeholder="DATE OF BIRTH">
      </div>
      <!-- gender -->
      <div class="flex ml-2">
        <select class="w-1/3 border border-black shadow rounded pl-3 p-2 lg:py-3" id="gender">
          <option disabled value="" selected>GENDER</option>
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>
      <!-- phone number -->
      <div class="flex md:w-2/3 lg:w-1/2 border rounded mx-2 my-4 md:my-10 border-black shadow-sm p-2 lg:py-3">
        <div>
          <fa-icon class="self-center mx-2" :icon="['fas', 'phone-alt']" size="1x"/>
        </div>
        <input class="w-full pl-10 text-sm focus:outline-none" type="tel" placeholder="PHONE NUMBER">
      </div>
      <!-- email -->
      <div class="flex md:w-2/3 lg:w-1/2 border rounded mx-2 my-4 md:my-10 border-black shadow-sm p-2 lg:py-3">
        <div>
          <fa-icon class="self-center mx-2" :icon="['far', 'envelope']" size="1x"/>
        </div>
        <input class="w-full pl-10 text-sm focus:outline-none" type="email" placeholder="EMAIL ADDRESS">
      </div>
      <!-- infant -->
      <div class="flex ml-2">
        <select class="w-1/3 border border-black shadow rounded pl-3 p-2 lg:py-3" id="infant">
          <option disabled value="" selected>INFANT</option>
          <option>yes</option>
          <option>no</option>
        </select>
      </div>
      <div class="px-2 py-4 md:py-10 md:flex justify-center">
        <input class="w-full md:w-auto p-2 md:p-3 rounded-sm bg-green-600 text-white text-sm shadow hover:bg-green-700 focus:outline-none" type="submit" value="PROCEED TO PASSENGER 2">
      </div>
    </form>
  </div>
</template>

<script>
export default{
name: 'PassengerDetails'
}
</script>
