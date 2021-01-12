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
      <p class="md:text-left pl-4 py-2 italic">Details for passenger {{i}}<span class="text-gray-500 text-sm pl-2">(All fields required)</span></p>
      <!-- title --> <!-- first name --> <!-- last name -->
      <div class="flex flex-wrap justify-start mb-4 md:mb-10">
        <div class="flex ml-2 my-1">
          <select ref="title" class="border border-black shadow rounded pl-3 p-2 lg:py-3" id="title">
            <option disabled value="" selected>title</option>
            <option>Dr.</option>
            <option>Mr.</option>
            <option>Mrs.</option>
            <option>Ms.</option>
            <option>Prof.</option>
            <option>Eng.</option>
          </select>
        </div>
        <div class="w-full md:w-1/3 border rounded mx-2 my-1 border-black shadow-sm p-2 lg:py-3">
          <input ref="firstName" class="w-full text-sm md:text-base lg:text-lg pl-10 focus:outline-none" type="text" placeholder="first name">
        </div>
        <div class="w-full md:w-1/3 border rounded mx-2 my-1 border-black shadow-sm p-2 lg:py-3">
          <input ref="lastName" class="w-full text-sm md:text-base lg:text-lg pl-10 focus:outline-none" type="text" placeholder="last name">
        </div>
      </div>
      <!-- date of birth -->
      <div class="md:w-2/3 lg:w-1/2 border rounded mx-2 my-4 md:my-10 border-black shadow-sm p-2 lg:py-3">
        <div class="flex">
          <label for="DOB" title="date of birth" class="text-gray-600">DOB:</label>
          <input ref="DOB" class="w-full self-center text-center focus:outline-none" type="date" placeholder="date of birth" id="DOB">
        </div>
      </div>
      <div class="flex flex-wrap justify-start">
        <!-- gender -->
        <div class="flex ml-2 md:w-1/3">
          <select ref="gender" class="w-full border border-black shadow rounded pl-3 p-2 lg:py-3" id="gender">
            <option disabled value="" selected>gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <!-- infant -->
        <div class="flex ml-2 md:w-1/3">
          <select ref="infant" class="w-full border border-black shadow rounded pl-3 p-2 lg:py-3" id="infant">
            <option disabled value="" selected>infant</option>
            <option value="true">yes</option>
            <option value="false">no</option>
          </select>
        </div>
      </div>
      <div class="flex flex-wrap justify-start mb-4 md:mb-10">
        <!-- phone number -->
        <div class="flex md:w-1/3 border rounded mx-2 my-4 md:my-10 border-black shadow-sm p-2 lg:py-3">
          <div>
            <fa-icon class="self-center mx-2" :icon="['fas', 'phone-alt']" size="1x"/>
          </div>
          <input ref="phone" class="w-full pl-10 text-sm md:text-base lg:text-lg focus:outline-none" type="tel" placeholder="phone number">
        </div>
        <!-- email -->
        <div class="flex md:w-1/3 border rounded mx-2 my-4 md:my-10 border-black shadow-sm p-2 lg:py-3">
          <div>
            <fa-icon class="self-center mx-2" :icon="['far', 'envelope']" size="1x"/>
          </div>
          <input ref="email" class="w-full pl-10 text-sm md:text-base lg:text-lg focus:outline-none" type="email" placeholder="email address">
        </div>
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
import { uuid } from 'vue-uuid'
import {bus} from '@/main'
export default{
  name: 'PassengerDetails',
  data(){
    return {
      numberOfSeats: JSON.parse(localStorage.getItem('seatID')).length || 0,
      passengerDetails:[],
      errors: [],
      errorModal: false
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
        try{
          //  Iterate through each passenger
          let iteration_count = this.numberOfSeats
          let data = {}
          for (let i = 0; i < iteration_count; i++) {
            data[i]._id = uuid.v4()
            data[i].fullName = `${this.$refs.title[i].value} ${this.capitalizeFirstLetter(this.$refs.firstName[i].value)} ${this.capitalizeFirstLetter(this.$refs.lastName[i].value)}`
            data[i].DOB = this.$refs.DOB[i].value
            data[i].gender = this.$refs.gender[i].value
            data[i].phone = this.$refs.phone[i].value
            data[i].email = this.$refs.email[i].value.toLowerCase()
            data[i].infant = this.$refs.infant[i].value
            data[i].seatID = JSON.parse(localStorage.getItem('seatID'))[i]
            data[i].flightID = localStorage.getItem('flightID')
            data[i].datetime = localStorage.getItem('datetime')
            data[i].from = localStorage.getItem('depatureCity')
            data[i].to = localStorage.getItem('arrivalCity')
            this.passengerDetails.push(data)
          }
          // validation
          // if(data.constructor.length > 0){
          //   this.errors = []
          //   for (const property in data) {
          //     data[property].forEach((el, index, arr)=>{
          //       if(!el.value().trim()){
          //         this.errors.push(`empty value in the field ${arr} in form ${arr + 1}`)
          //       }
          //     })
          //   }
          // }else{
          //   this.errors = []
          //   this.errors.push('empty fields detected')
          // }
          //  store passenger details
          localStorage.setItem('passengerDetails', JSON.stringify(this.passengerDetails))
          //  reroute to extras component
          this.$router.push({ name: 'Extras', hash: '#extras'})
        }catch(err){
          this.errors = []
          this.errors.push('empty fields detected')
          this.errorModal = true
        }

        // if(this.errors.length > 0){
          //  display error
          // this.errorModal = true
        // }else{
          //  store passenger details
          // localStorage.setItem('passengerDetails', JSON.stringify(this.passengerDetails))
          //  reroute to extras component
          // this.$router.push({ name: 'Extras', hash: '#extras'})
        // }
      }else{
        //@TODO:display error message and quit processing
      }
    }
  },
  created(){
    this.activeComponent()
    //  Error modal
    bus.$on('closeErrorModal', (data)=>{
      this.errorModal = data
    })
  }
}
</script>
