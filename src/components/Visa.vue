<template>
  <div id="visa">
    <!-- visa form -->
    <form class="mx-2 md:ml-10 lg:ml-16">
      <!-- credit card type  -->
      <div class="flex my-3">
        <select v-model="paymentDetails.creditCardType"class="border border-black shadow rounded pl-3 p-2 lg:py-3" id="title">
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
        <input v-model="paymentDetails.creditCardNumber" class="w-full text-sm pl-10 focus:outline-none" type="text" placeholder="CREDIT CARD NUMBER *">
      </div>
      <!-- full name -->
      <div class="w-full md:w-1/3 border rounded my-3 border-black shadow p-2 lg:py-3">
        <input v-model="paymentDetails.fullName" class="w-full text-sm pl-10 focus:outline-none" type="text" placeholder="FULL NAME (as displayed on the credit card) *">
      </div>
      <!-- credit card expiry date(MM/YY) & CVC -->
      <div class="flex flex-wrap justify-start items-center my-3 lg:py-3">
        <div class="w-1/2 lg:w-1/4 border rounded mr-2 border-black shadow p-2 lg:py-3">
          <input v-model="paymentDetails.creditCardExpiryDate" class="w-full self-center text-center focus:outline-none" type="date">
        </div>
        <div class="w-1/4 border rounded mx-2 border-black shadow-sm p-2 lg:py-3">
          <input v-model="paymentDetails.CVC_Number" class="w-full text-sm text-center focus:outline-none" type="number" placeholder="CVC *">
        </div>
        <button class="flex justify-center items-center w-8 h-8 border rounded-full mx-2 border-black shadow-sm">
          <span>?</span>
        </button>
      </div>
      <hr class="my-6">
      <!-- phone number -->
      <div class="w-full md:w-1/3 border rounded my-3 border-black shadow p-2 lg:py-3">
        <input v-model="paymentDetails.phoneNumber" class="w-full text-sm pl-10 focus:outline-none" type="tel" placeholder="PHONE *">
      </div>
      <!-- billing address -->
      <div class="w-full md:w-1/3 border rounded my-3 border-black shadow p-2 lg:py-3">
        <input v-model="paymentDetails.billingAddress" class="w-full text-sm pl-10 focus:outline-none" type="text" placeholder="BILLING ADDRESS *">
      </div>
      <!-- address -->
      <div class="w-full md:w-1/3 border rounded my-3 border-black shadow p-2 lg:py-3">
        <input v-model="paymentDetails.address" class="w-full text-sm pl-10 focus:outline-none" type="text" placeholder="ADDRESS">
      </div>
      <!-- country -->
      <div class="flex my-3">
        <select v-model="paymentDetails.country" class="border border-black shadow rounded pl-3 p-2 lg:py-3" id="title">
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
        <input v-model="paymentDetails.city" class="w-full text-sm pl-10 focus:outline-none" type="text" placeholder="CITY *">
      </div>
      <!-- zip/postal code -->
      <div class="w-full md:w-1/3 border rounded my-3 border-black shadow p-2 lg:py-3">
        <input v-model="paymentDetails.zipCode" class="w-full text-sm pl-10 focus:outline-none" type="text" placeholder="ZIP/POSTAL CODE *">
      </div>
      <!-- submit button -->
      <!-- <div class="py-4 md:py-10 md:flex justify-center">
        <input @click.prevent="payWithVisa()" class="w-full md:w-auto p-2 md:p-3 md:px-10 rounded-sm bg-green-600 text-white text-sm shadow cursor-pointer hover:bg-green-700 focus:outline-none" type="submit" value="PAY 217,000 KES">
      </div> -->
    </form>
    <!-- payment confirmation modal -->
    <PaymentConfirmation v-if="paymentConfirmationModal"/>
  </div>
</template>

<script>
import {bus} from '@/main'
export default{
  name: 'Visa',
  data(){
    return{
      paymentConfirmationModal:false,
      paymentDetails:{
        creditCardType: '',
        creditCardNumber: '',
        fullName: '',
        creditCardExpiryDate: '',
        CVC_Number: '',
        phoneNumber: '',
        billingAddress: '',
        address: '',
        country: '',
        city: '',
        zipCode: ''
      }
    }
  },
  methods:{
    payWithVisa(){
      this.paymentConfirmationModal=!this.paymentConfirmationModal
      localStorage.setItem('paymentDetails', JSON.stringify(this.paymentDetails))
    }
  },
  created(){
    bus.$on('closePaymentConfirmationModal', (data)=>{
      this.paymentConfirmationModal = data
    })
  }
}
</script>
