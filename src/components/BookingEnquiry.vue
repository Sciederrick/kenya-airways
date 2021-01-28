<template>
  <div id="bookingEnquiry">
    <form class="py-2">
      <!-- from and to -->
      <div class="flex flex-wrap lg:px-10">
        <div class="flex md:mx-auto w-full md:w-2/3 lg:w-1/2 border mx-2 mb-2 md:my-3 border-black shadow p-1 relative bg-white">
          <div class="md:py-2">
            <label class="text-sm" for="from">FROM:</label>
            <fa-icon class="float-left ml-4" :icon="['fas', 'plane-departure']" size="1x"/>
          </div>
          <input v-model="enquiry.depatureCity" class="w-full p-2 self-center md:text-base lg:text-lg focus:outline-none" required>
          <ul v-if="searchCity" class="absolute top-0 right-0 w-1/2 py-2 mt-2 mr-2 pl-3 md:pl-5 lg:pl-16 text-left text-gray-200 bg-red-800 overflow-y-auto z-20" style="max-height:16rem;">
            <li v-for="city in searchCity" class="cursor-pointer underline" @click="insertCityInTheInputField">{{city}}</li>
          </ul>
        </div>
        <div class="flex md:mx-auto w-full md:w-2/3 lg:w-1/2 border mx-2 mb-2 md:my-3 border-black shadow p-1 relative bg-white">
          <div class="md:py-2">
            <label class="text-sm" for="to">TO:</label>
            <fa-icon class="float-left ml-4" :icon="['fas', 'plane-arrival']" size="1x"/>
          </div>
          <input v-model="enquiry.arrivalCity" class="w-full p-2 self-center pl-5 md:text-base lg:text-lg focus:outline-none" required>
          <ul v-if="searchCity2" class="absolute top-0 right-0 w-1/2 py-2 mt-2 mr-2 pl-3 md:pl-5 lg:pl-16 text-left text-gray-200 bg-red-800 overflow-y-auto z-10" style="max-height:16rem;">
            <li v-for="city in searchCity2" class="cursor-pointer underline" @click="insertCityInTheInputField2">{{city}}</li>
          </ul>
        </div>
      </div>
      <!-- date -->
      <div class="flex md:mx-auto md:w-2/3 lg:justify-center mx-2 mb-2 md:my-3">
        <datepicker v-model="enquiry.date" wrapper-class="border border-black shadow px-4 bg-white" input-class="p-4 md:text-base lg:text-lg focus:outline-none" calendar-class="caveat text-2xl text-gray-900" type="date" name="from" id="date" :calendar-button="true" :bootstrap-styling="true" :clear-button="true" calendar-button-icon-content="DATE:" :required="true" :typeable="true" format="MM dd yyyy" placeholder="MM/DD/YYYY" :disabled-dates="datepicker.disabledDates">
          <div slot="beforeCalendarHeader" class="calendar-header text-center text-red-800 relative">
            <div class="h-16 w-full">
              <img class="h-full w-full object-cover" :src="require('@/assets/images/damian-patkowski-T-LfvX-7IVg-unsplash.jpg')" alt="">
            </div>
            <!-- image overlay -->
            <div class="absolute inset-0 bg-black opacity-50 z-10"><p class="text-red-200">The Pride of Africa</p></div>
          </div>
        </datepicker>
      </div>
      <div class="md:mx-auto md:w-2/3 lg:w-1/4 p-2 md:p-0">
        <input @click.prevent="bookingEnquiry()" class="w-full p-2 md:py-4 md:my-3 lg:my-5 mx-auto md:rounded bg-green-700 text-white text-sm hover:bg-red-700 cursor-pointer focus:outline-none" type="submit" name="submit" value="SEARCH FLIGHT">
      </div>
    </form>
    <!-- Error modal -->
    <Error v-if="errorModal">
      <ul>
        <li v-for="(error, index) in errors" :key="index">{{error}}</li>
      </ul>
    </Error>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import countriesCities from '@/countries-cities.js'
import {bus} from '@/main'
export default {
  name: 'BookingEnquiry',
  components: {
    Datepicker
  },
  data(){
    return{
      destinations:[...countriesCities.destinations],
      cities:[],
      enquiry:{
        depatureCity: '',
        arrivalCity: '',
        date: ''
      },
      datepicker:{
        disabledDates:{
          to:new Date()
        }
      },
      errorModal:false,
      errors: []
    }
  },
  computed:{
    searchCity(){
      if(this.enquiry.depatureCity){
        return this.cities.filter(fl=>{
          let regex = new RegExp(this.enquiry.depatureCity, 'gi')
          if(typeof fl.city != 'object' && typeof fl.country != 'object')
          return fl.match(regex) || fl.match(regex)
        })
      }
    },
    searchCity2(){
      if(this.enquiry.arrivalCity){
        return this.cities.filter(fl=>{
          let regex = new RegExp(this.enquiry.arrivalCity, 'gi')
          if(typeof fl.city != 'object' && typeof fl.country != 'object')
          return fl.match(regex) || fl.match(regex)
        })
      }
    }
  },
  methods:{
    insertCityInTheInputField(e){
      this.enquiry.depatureCity = e.target.innerText
    },
    insertCityInTheInputField2(e){
      this.enquiry.arrivalCity = e.target.innerText
    },
    activeComponent(){
      bus.$emit('activeComponent', 'BookingEnquiry')
    },
    previousValues(){
      if(localStorage.getItem('depatureCity')){
        this.depatureCity = localStorage.getItem('depatureCity')
      }
      if(localStorage.getItem('arrivalCity')){
        this.arrivalCity = localStorage.getItem('arrivalCity')
      }
      if(localStorage.getItem('datetime')){
        this.date = localStorage.getItem('datetime')
      }
    },
    bookingEnquiry(){
      if(!this.enquiry.depatureCity.trim() || !this.enquiry.arrivalCity.trim() || !this.enquiry.date){
        this.errors = []
        this.errors.push('Empty fields detected')
        this.errorModal = true
      }else{
        const depatureCity = this.enquiry.depatureCity.indexOf(',') > -1? this.enquiry.depatureCity.split(',')[0] : this.enquiry.depatureCity
        const arrivalCity = this.enquiry.arrivalCity.indexOf(',') > -1? this.enquiry.arrivalCity.split(',')[0] : this.enquiry.arrivalCity
        this.$router.push({name:'FlightResults', params:{depatureCity, arrivalCity, datetime:this.enquiry.date}, hash:'#flightResults'})
      }
    }
  },
  created(){
    //  Indicate that we're on Booking Enquiry Page
    this.activeComponent()
    //  Insert previous values to input fields
    this.previousValues()
    //  Populate menu suggestions with destinations
    this.destinations.forEach(el=>{
      this.cities.push(`${el.city}, ${el.country}`)
    })
    //  Error modal
    bus.$on('closeErrorModal', (data)=>{
      this.errorModal = data
    })
  }
}
</script>
