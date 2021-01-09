<template>
  <div id="passengerDetails">
    <!-- back and change flight -->
    <div class="flex justify-between py-2 px-3 md:px-5 lg:px-16 md:py-3 lg:py-4 mt-4 md:mt-5 lg:mx-2 bg-gray-800 text-sm md:text-base lg:text-lg text-white">
      <router-link :to="{name:'Seats', hash:'#seats'}">
        <span class="my-auto underline cursor-pointer uppercase font-semibold"><fa-icon class="mr-1 text-lg self-center mt-1" :icon="['fas', 'angle-double-left']" size="1x"/>change seat</span>
      </router-link>
      <span @click.prevent="persistPassengerDetails()" class="my-auto underline cursor-pointer uppercase font-semibold">proceed<fa-icon class="ml-1 text-lg self-center mt-1" :icon="['fas', 'angle-double-right']" size="1x"/></span>
    </div>
    <!-- header -->
    <div class="flex justify-between bg-green-200 mx-2 mt-1 md:mx-2">
      <p class="text-left pl-4 md:pl-4 lg:pl-16 uppercase font-semibold py-3 text-xs md:text-base">PASSENGER DETAILS(<span class="text-xs">{{numberOfSeats}} passengers</span>)</p>
    </div>
    <!-- form -->
    <form class="mx-2 md:ml-4 lg:ml-16" v-for="(i, index) in numberOfSeats" :key="i">
      <p class="md:text-left pl-4 py-2 italic">Details for passenger {{i}}</p>
      <!-- title --> <!-- first name --> <!-- last name -->
      <div class="flex flex-wrap justify-start mb-4 md:mb-10">
        <div class="flex ml-2 my-1">
          <select ref="title" class="border border-black shadow rounded pl-3 p-2 lg:py-3" id="title">
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
          <input ref="firstName" class="w-full text-sm md:text-base lg:text-lg uppercase pl-10 focus:outline-none" type="text" placeholder="FIRST NAME">
        </div>
        <div class="w-full md:w-1/3 border rounded mx-2 my-1 border-black shadow-sm p-2 lg:py-3">
          <input ref="lastName" class="w-full text-sm md:text-base lg:text-lg uppercase pl-10 focus:outline-none" type="text" placeholder="LAST NAME">
        </div>
      </div>
      <!-- date of birth -->
      <div class="md:w-2/3 lg:w-1/2 border rounded mx-2 my-4 md:my-10 border-black shadow-sm p-2 lg:py-3">
        <input ref="DOB" class="w-full self-center text-center focus:outline-none" type="date" placeholder="DATE OF BIRTH">
      </div>
      <div class="flex flex-wrap justify-start">
        <!-- gender -->
        <div class="flex ml-2 md:w-1/3">
          <select ref="gender" class="w-full border border-black shadow rounded pl-3 p-2 lg:py-3" id="gender">
            <option disabled value="" selected>GENDER</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <!-- infant -->
        <div class="flex ml-2 md:w-1/3">
          <select ref="infant" class="w-full border border-black shadow rounded pl-3 p-2 lg:py-3" id="infant">
            <option disabled value="" selected>INFANT</option>
            <option value="true">YES</option>
            <option value="false">NO</option>
          </select>
        </div>
      </div>
      <div class="flex flex-wrap justify-start mb-4 md:mb-10">
        <!-- phone number -->
        <div class="flex md:w-1/3 border rounded mx-2 my-4 md:my-10 border-black shadow-sm p-2 lg:py-3">
          <div>
            <fa-icon class="self-center mx-2" :icon="['fas', 'phone-alt']" size="1x"/>
          </div>
          <input ref="phone" class="w-full pl-10 text-sm md:text-base lg:text-lg focus:outline-none" type="tel" placeholder="PHONE NUMBER">
        </div>
        <!-- email -->
        <div class="flex md:w-1/3 border rounded mx-2 my-4 md:my-10 border-black shadow-sm p-2 lg:py-3">
          <div>
            <fa-icon class="self-center mx-2" :icon="['far', 'envelope']" size="1x"/>
          </div>
          <input ref="email" class="w-full pl-10 text-sm md:text-base lg:text-lg focus:outline-none" type="email" placeholder="EMAIL ADDRESS">
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { uuid } from 'vue-uuid'
import {bus} from '@/main'
export default{
  name: 'PassengerDetails',
  data(){
    return {
      numberOfSeats: JSON.parse(localStorage.getItem('seatID')).length || 0,
      passengerDetails:[],
    }
  },
  methods:{
    activeComponent(){
      bus.$emit('activeComponent', 'PassengerDetails')
    },
    capitalizeFirstLetter(string) {
      string.toLowerCase()
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    persistPassengerDetails(){
      //  Check whether seats have been booked
      if(this.numberOfSeats > 0){
        //  Iterate through each passenger
        let iteration_count = this.numberOfSeats
        for (let i = 0; i < iteration_count; i++) {
          let data = {}
          data._id = uuid.v4()
          data.fullName = `${this.$refs.title[i].value} ${this.capitalizeFirstLetter(this.$refs.firstName[i].value)} ${this.capitalizeFirstLetter(this.$refs.lastName[i].value)}`
          data.DOB = this.$refs.DOB[i].value
          data.gender = this.$refs.gender[i].value
          data.phone = this.$refs.phone[i].value
          data.email = this.$refs.email[i].value.toLowerCase()
          data.infant = this.$refs.infant[i].value
          data.seatID = JSON.parse(localStorage.getItem('seatID'))[i]
          data.flightID = localStorage.getItem('flightID')
          data.datetime = localStorage.getItem('datetime')
          data.from = localStorage.getItem('depatureCity')
          data.to = localStorage.getItem('arrivalCity')
          this.passengerDetails.push(data)
        }
        //  store passenger details
        localStorage.setItem('passengerDetails', JSON.stringify(this.passengerDetails))
        //  reroute to extras component
        this.$router.push({ name: 'Extras', hash: '#extras'})
      }else{
        //@TODO:display error message and quit processing
      }
    }
  },
  created(){
    this.activeComponent()
  }
}
</script>
