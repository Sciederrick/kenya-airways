<template>
  <div class="flex items-center justify-center font-sans" style="background: #edf2f7;" id="paymentConfirmation">
    <div class="h-full w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">
      <!-- modal -->
      <div class="bg-white shadow-lg w-5/6 md:w-3/4 lg:w-1/3">
        <!-- modal header -->
        <div class="border-b px-4 py-2 flex justify-between items-center">
          <h4 class="font-semibold text-lg py-5">
            ARE YOU SURE YOU WANT TO PROCEED TO MAKE A PAYMENT OF <span class="text-red-600">217,000 KES</span> TO <span class="text-red-600">KENYA AIRWAYS LIMITED</span>&nbsp;?
          </h4>
        </div>
        <!-- modal body -->
          <div class="h-24 flex justify-evenly items-start border-b border-white relative">
            <div class="w-1/2 lg:w-1/3 px-3 z-20">
              <button @click.prevent="pay()" class="w-full border border-green-600 rounded-sm py-2 text-center bg-green-600 text-white shadow hover:bg-green-800 hover:border-green-800 focus:outline-none">YES</button>
            </div>
            <div class="w-1/2 lg:w-1/3 px-3 z-20">
              <button @click.prevent="closeModal()" class="w-full border border-red-600 rounded-sm py-2 text-center bg-red-600 text-white shadow hover:bg-red-800 hover:border-red-800 focus:outline-none">NO</button>
            </div>
            <!-- image -->
            <div class="absolute inset-0">
              <img class="w-full h-full object-cover" :src="require('@/assets/images/hold-reservation.jpg')" alt="cover image">
            </div>
            <!-- image overlay -->
            <div class="absolute inset-0 bg-black bg-opacity-75"></div>
          </div>
      </div>
    </div>
    <PaymentSuccessfull v-if="paymentSuccessfulModal"/>
  </div>
</template>

<script>
import {bus} from '@/main'
export default{
  name:'PaymentConfirmation',
  data(){
    return {
      paymentSuccessfulModal:false
    }
  },
  methods:{
    closeModal(){
      bus.$emit('closePaymentConfirmationModal', false)
    },
    pay(){
      //@TODO:Thank you message for successful payment, print e-ticket and report
      this.paymentSuccessfulModal = true
    }
  },
  created(){
    //  Payment Successfull Modal
    bus.$on('closePaymentSuccessfulModal', (data)=>{
      this.paymentSuccessfulModal = data
    })
  }
}
</script>
