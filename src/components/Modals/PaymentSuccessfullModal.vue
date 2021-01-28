<template>
  <div class="flex items-center justify-center font-sans z-10" style="background: #edf2f7;" id="paymentConfirmation">
    <div class="h-full w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">
      <!-- modal -->
      <div class="bg-white shadow-lg w-5/6 md:w-3/4 lg:w-1/2">
        <!-- modal header -->
        <div class="border-b px-4 py-2 flex justify-center items-center">
          <div class="py-10 px-8">
            <h4 class="font-semibold text-lg">
              PAYMENT OF <span class="text-red-600">217,000 KES</span> TO <span class="text-red-600">KENYA AIRWAYS LIMITED</span>&nbsp;IS SUCCESSFUL
            </h4>
            <fa-icon class="mt-3 text-green-600 text-2xl md:text-5xl" :icon="['fas', 'check-circle']" size="5x"/>
          </div>
        </div>
        <!-- modal body -->
          <div class="h-24 flex justify-end items-end border-b border-white relative">
            <div class="w-1/2 lg:w-1/3 px-3 z-20">
              <button @click.prevent="generateTicket()" class="w-full border border-green-600 rounded-sm py-2 text-center lg:text-xl bg-green-600 text-white shadow hover:bg-green-800 hover:border-green-800 focus:outline-none">print ticket</button>
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
    <table class="hidden" id="ticket">
      <tr>
        <td colspan="7"><b>BOARDING PASS</b></td>
      </tr>
      <tr>
        <td colspan="2">FLIGHT NO: KQ601</td><td colspan="2">BOARDING TIME:20:00</td><td colspan="3">SEAT: 04</td>
      </tr>
      <tr>
        <td colspan="7">Gate closes 30 minutes to depature</td>
      </tr>
      <tr>
        <td colspan="7">NAME: DERRICK MBARANI</td>
      </tr>
      <tr>
        <td colspan="7">FROM: NEW YORK</td>
      </tr>
      <tr>
        <td colspan="7">TO: NAIROBI</td>
      </tr>
      <tr>
        <td colspan="2"></td><td colspan="3">You are flying with: Kenya Airways</td><td colspan="2"></td>
      </tr>
      <tr>
        <td colspan="7">Ticket No: a145gl90cx</td>
      </tr>
    </table>
  </div>
</template>

<script>
import {bus} from '@/main'
import { jsPDF } from 'jspdf'
import 'jspdf-autotable'
export default{
  name:'PaymentConfirmation',
  data(){
    return {
      passengerDetails: []
    }
  },
  methods:{
    closeModal(){
      bus.$emit('closePaymentSuccessfulModal', false)
      bus.$emit('closePaymentConfirmationModal', false)
    },
    generateTicket() {
      // Landscape export, 2×4 inches
      const doc = new jsPDF({
        orientation: "landscape",
        unit: "in",
        format: [8, 4]
      })

      this.passengerDetails.forEach((value, index)=>{
        doc.autoTable({
           styles: { fillColor: [245, 245, 245], fontSize: 11 },
           headStyles: { halign: 'center', fillColor: [255, 0, 0], fontStyle: 'bold', font: 'helvetica'},
           bodyStyles: {fontStyle: 'times'},
           head: [
             ['BOARDING PASS','','']
           ],
            body: [
              ['BOARDING PASS',' ', ' '],
              [`flight no: KQ${value.flightID}`, `boarding time: ${value.datetime.split(" ")[4]}`, `seat: ${value.seatID}`],
              ['Gate closes 30 minutes to depature'],
              [ `name: ${value.fullName}` ],
              [ `from: ${value.from}` ],
              [ `to: ${value.to}` ],
              [ 'You are flying with Kenya Airways'],
              [ `ticketNumber: ${value._id}`, ' '],
            ],
         })
        doc.autoPrint({variant:'non-conform'})
        doc.save('ticket.pdf')
        this.closeModal()
        this.$router.push({name:'Home'})
      })
    },
    getPassengerDetails(){
      this.passengerDetails = JSON.parse(localStorage.getItem('passengerDetails'))
      console.log(this.passengerDetails)
    }
  },
  created(){
    this.getPassengerDetails()
  }
}
</script>
