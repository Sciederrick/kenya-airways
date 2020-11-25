<template>
  <div id="bookingEnquiry">
    <form class="py-2">
      <div v-if="false" class="md:mx-auto md:w-2/3 lg:w-3/4 text-right">
        <fa-icon :icon="['fas','redo-alt']" size="1x" color="maroon"/>
        <input class="p-2 lg:py-4 bg-transparent text-red-700" type="reset" value="reset fields">
      </div>
      <div class="flex md:mx-auto md:w-2/3 lg:w-3/4 border mx-2 my-4 md:my-10 border-black shadow p-1">
        <div class="md:py-2">
          <label class="text-sm" for="from">FROM:</label>
          <fa-icon class="float-left ml-4" :icon="['fas', 'plane-departure']" size="1x"/>
        </div>
        <input v-model="enquiry.depatureCity" class="w-full p-2 self-center md:text-base lg:text-lg focus:outline-none" list="countries" id="from">
        <datalist id="countries">
          <option :value="destination.city+', '+destination.country" v-for="destination in destinations"/>
        </datalist>
      </div>
      <div class="flex md:mx-auto md:w-2/3 lg:w-3/4 border mx-2 my-4 md:my-10 border-black shadow p-1">
        <div class="md:py-2">
          <label class="text-sm" for="to">TO:</label>
          <fa-icon class="float-left ml-4" :icon="['fas', 'plane-arrival']" size="1x"/>
        </div>
        <input v-model="enquiry.arrivalCity" class="w-full p-2 self-center pl-5 md:text-base lg:text-lg focus:outline-none" list="countries" id="to">
        <datalist id="countries">
          <option :value="destination.city+', '+destination.country" v-for="destination in destinations"/>
        </datalist>
      </div>
      <div class="flex md:mx-auto md:w-2/3 lg:w-3/4 mx-2 my-4 md:my-10">
        <datepicker v-model="enquiry.date" wrapper-class="border-2 border-black shadow px-4" input-class="p-4 md:text-base lg:text-lg focus:outline-none" calendar-class="caveat text-2xl text-gray-900" type="date" name="from" id="date" :calendar-button="true" :bootstrap-styling="true" :clear-button="true" calendar-button-icon-content="DATE:📅" :required="true" :typeable="true" format="MM dd yyyy" placeholder="MM/DD/YYYY" :disabled-dates="datepicker.disabledDates">
          <div slot="beforeCalendarHeader" class="calendar-header text-center text-red-800 relative">
            <div class="h-16 w-full">
              <img class="h-full w-full object-cover" :src="require('@/assets/images/damian-patkowski-T-LfvX-7IVg-unsplash.jpg')" alt="">
            </div>
            <!-- image overlay -->
            <div class="absolute inset-0 bg-black opacity-50 z-10"><p class="text-red-200">The Pride of Africa</p></div>
          </div>
          <span slot="afterDateInput" class="animated-placeholder">
            Choose a Date
          </span>
        </datepicker>
      </div>
      <div class="md:mx-auto md:w-2/3 lg:w-3/4 p-2 md:p-0">
        <router-link :to="{name:'FlightResults', params:{depatureCity:enquiry.depatureCity.split(',')[0], arrivalCity:enquiry.arrivalCity.split(',')[0], datetime:enquiry.date}, hash:'#flightResults'}">
          <input class="w-full p-2 lg:py-4 mx-auto bg-green-700 text-white text-sm hover:bg-red-700 cursor-pointer focus:outline-none" type="submit" name="submit" value="SEARCH FLIGHT">
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import countriesCities from '@/countries-cities.js'
export default {
  name: 'BookingEnquiry',
  components: {
    Datepicker
  },
  data(){
    return{
      destinations:countriesCities.destinations,
      enquiry:{
        depatureCity:'',
        arrivalCity:'',
        date:''
      },
      datepicker:{
        disabledDates:{
          to:new Date()
        }
      }
    }
  }
}
</script>
