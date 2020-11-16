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
      <!-- visa form -->
      <form class="mx-2 md:ml-10 lg:ml-16">
        <!-- credit card type  -->
        <div class="flex my-3">
          <select class="border border-black shadow rounded pl-3 p-2 lg:py-3" id="title">
            <option disabled value="" selected>CREDIT CARD TYPE</option>
            <option>VISA</option>
            <option>MASTER CARD</option>
            <option>AMERICAN EXPRESS</option>
            <option>UATP</option>
            <option>DISCOVER CARD</option>
            <option>DINERS CLUB</option>
          </select>
        </div>
        <!-- credit card number -->
        <div class="w-full md:w-1/3 border rounded my-3 border-black shadow p-2 lg:py-3">
          <input class="w-full text-sm pl-10 focus:outline-none" type="text" placeholder="CREDIT CARD NUMBER *">
        </div>
        <!-- full name -->
        <div class="w-full md:w-1/3 border rounded my-3 border-black shadow p-2 lg:py-3">
          <input class="w-full text-sm pl-10 focus:outline-none" type="text" placeholder="FULL NAME (as displayed on the credit card) *">
        </div>
        <!-- credit card date & CVC -->
        <div class="flex flex-wrap justify-start items-center my-3 lg:py-3">
          <div class="w-1/2 lg:w-1/4 border rounded mr-2 border-black shadow p-2 lg:py-3">
            <input class="w-full self-center text-center focus:outline-none" type="date">
          </div>
          <div class="w-1/4 border rounded mx-2 border-black shadow-sm p-2 lg:py-3">
            <input class="w-full text-sm text-center focus:outline-none" type="number" placeholder="CVC *">
          </div>
          <button class="flex justify-center items-center w-8 h-8 border rounded-full mx-2 border-black shadow-sm">
            <span>?</span>
          </button>
        </div>
        <hr class="my-6">
        <!-- phone number -->
        <div class="w-full md:w-1/3 border rounded my-3 border-black shadow p-2 lg:py-3">
          <input class="w-full text-sm pl-10 focus:outline-none" type="tel" placeholder="PHONE *">
        </div>
        <!-- billing address -->
        <div class="w-full md:w-1/3 border rounded my-3 border-black shadow p-2 lg:py-3">
          <input class="w-full text-sm pl-10 focus:outline-none" type="text" placeholder="BILLING ADDRESS *">
        </div>
        <!-- address -->
        <div class="w-full md:w-1/3 border rounded my-3 border-black shadow p-2 lg:py-3">
          <input class="w-full text-sm pl-10 focus:outline-none" type="text" placeholder="ADDRESS">
        </div>
        <!-- country -->
        <div class="flex my-3">
          <select class="border border-black shadow rounded pl-3 p-2 lg:py-3" id="title">
            <option disabled value="" selected>COUNTRY *</option>
            <option>KENYA</option>
            <option>RWANDA</option>
            <option>TANZANIA</option>
            <option>SYCHELLES</option>
            <option>CONGO</option>
            <option>EGYPT</option>
          </select>
        </div>
        <!-- city -->
        <div class="w-full md:w-1/3 border rounded my-3 border-black shadow p-2 lg:py-3">
          <input class="w-full text-sm pl-10 focus:outline-none" type="text" placeholder="CITY *">
        </div>
        <!-- zip/postal code -->
        <div class="w-full md:w-1/3 border rounded my-3 border-black shadow p-2 lg:py-3">
          <input class="w-full text-sm pl-10 focus:outline-none" type="text" placeholder="ZIP/POSTAL CODE *">
        </div>
        <div class="py-4 md:py-10 md:flex justify-center">
          <input class="w-full md:w-auto p-2 md:p-3 rounded-sm bg-green-600 text-white text-sm shadow cursor-pointer hover:bg-green-700 focus:outline-none" type="submit" value="PAY 217,000 KES">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default{
  name:'Payment'
}
</script>
