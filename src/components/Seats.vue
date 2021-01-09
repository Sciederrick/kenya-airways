<template>
  <div id="seats">
    <!-- change flight & go back -->
    <div id="resultsNav" class="flex justify-between py-1 px-3 md:px-5 lg:px-16 md:py-2 lg:py-3 mt-4 md:mt-5 lg:mx-2 bg-gray-800 text-sm md:text-base lg:text-lg text-white">
      <router-link :to="{name:'FlightResults', hash:'#flightResults'}">
        <span class="my-auto underline cursor-pointer uppercase font-semibold"><fa-icon class="mr-1 text-lg self-center mt-1" :icon="['fas', 'angle-double-left']" size="1x"/>change flight</span>
      </router-link>
      <router-link :to="{name:'PassengerDetails', hash:'#passengerDetails'}">
        <span class="my-auto underline cursor-pointer uppercase font-semibold">proceed<fa-icon class="ml-1 text-lg self-center mt-1" :icon="['fas', 'angle-double-right']" size="1x"/></span>
      </router-link>
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
    <div class="flex flex-col md:flex-row lg:mx-2 relative">
      <!-- background image -->
      <img class="absolute w-full h-full lg:px-1 object-cover" :src="require('@/assets/images/1739.jpg')" alt="aeroplane seats">
      <!-- background image overlay -->
      <div class="absolute w-full h-full bg-red-200 bg-opacity-75"></div>
      <!-- legend -->
      <div class="flex lg:flex-col flex-wrap justify-start md:content-start pt-4 md:pt-6 pl-4 md:pl-10 lg:pl-16 md:w-1/4 lg:w-1/2 z-20 text-sm md:text-base">
        <div class="hidden md:flex md:my-6 md:pl-2 md:w-full">
          <h2 class="font-bold underline">Legend:</h2>
        </div>
        <div class="flex md:my-6">
          <div class="h-4 w-4 md:h-6 md:w-6 mx-2 bg-black"></div><span>:free seat</span>
        </div>
        <div class="flex md:my-6">
          <div class="h-4 w-4 md:h-6 md:w-6 mx-2 bg-red-700"></div><span>:occupied</span>
        </div>
        <div class="flex md:my-6">
          <div class="h-4 w-4 md:h-6 md:w-6 mx-2 bg-green-700"></div><span>:your seat</span>
        </div>
        <div class="flex md:my-6">
          <div class="h-4 w-4 md:h-6 md:w-6 mx-2 bg-red-400 bg-opacity-75"></div><span>:pathway</span>
        </div>
      </div>
      <!-- seats -->
      <div class="flex justify-evenly flex-no-wrap lg:mr-20">
        <!-- row labels -->
        <div class="flex flex-col justify-evenly w-4 py-6 md:mx-2 z-20">
          <div class="inline-block text-black h-6 w-6 z-20 m-2 text-sm" v-for="i in 10" :key="i">{{i}}</div>
        </div>
        <!-- first column -->
        <div class="row-width py-6 md:mx-10 z-20">
          <div @click.prevent="bookedSeat(index, 'A')" class="inline-block bg-black h-6 w-6 z-20 m-2 cursor-pointer text-xs text-gray-400 py-1" v-for="(i,index) in 30" :key="i" :id="'A'+index">
          </div>
        </div>
        <!-- run way -->
        <div class="w-16 my-8 bg-red-400 z-20 bg-opacity-75"></div>
        <!-- last row -->
        <div class="row-width py-6 md:mx-10 z-20">
          <div @click.prevent="bookedSeat(index, 'B')" class="inline-block bg-black h-6 w-6 z-20 m-2 cursor-pointer text-xs text-gray-400 py-1" v-for="(i, index) in 30" :key="i" :id="'B'+index">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {bus} from '@/main'
export default{
  name:'Seats',
  data(){
    return {
      seatID:[]
    }
  },
  methods:{
    activeComponent(){
      bus.$emit('activeComponent', 'Seat')
    },
    bookedSeat(id, column){
      //  @TODO: limit number of seats that one passenger can book, create a corresponding modal
      //  Select corresponding elements from the DOM
      const el_id = column.concat(id)
      let el = document.querySelector(`div#${el_id}`)
      //  check if column.concat(id) exists in the seatID array, if it does, remove it from the array and update local storage, update UI
      const seatIndex = this.seatID.indexOf(el_id)
      if(seatIndex >= 0){
        //  Remove seats
        console.log('....here')
        this.seatID.splice(seatIndex, 1);
        localStorage.setItem('seatID', JSON.stringify(this.seatID))
        el.style.backgroundColor = "#000"
      }else{
        //  Add seats
        el.style.backgroundColor = "green"
        this.seatID.push(el_id)
        localStorage.setItem('seatID', JSON.stringify(this.seatID))
      }
    },
    previousSeat(){
      const seats = JSON.parse(localStorage.getItem('seatID'))
      if(seats && seats.length > 0){
        seats.forEach((id)=>{
          let el = document.querySelector(`div#${id}`)
          this.seatID.push(id)
          el.style.backgroundColor = "green"
        })
      }
    }
  },
  created(){
    this.activeComponent()
  },
  mounted(){
    this.previousSeat()
  }
}
</script>

<style scoped>
  .row-width {
    width:125px;
  }
</style>
