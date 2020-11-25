<template>
  <div id="flightResults">
    <!-- results nav -->
    <div id="resultsNav" class="flex justify-between py-2 px-3 md:px-5 lg:px-16 md:py-3 lg:py-4 my-4 md:my-5 lg:mx-2 bg-gray-800 text-sm md:text-base lg:text-lg text-white">
      <span class="text-xs md:text-sm">{{availableFlights.length}} result(s) for : {{new Date($route.params.datetime).getDay()}}, {{ months[new Date($route.params.datetime).getMonth()]}} {{ new Date($route.params.datetime).getFullYear()}}</span>
      <span @click="$router.go(-1)" class="underline cursor-pointer">Go back</span>
    </div>
    <!-- header -->
    <div class="mx-1 md:mx-2 lg:mx-20 lg:my-20 flex flex-row justify-between md:justify-around items-center p-2">
      <div class="w-40 h-32 md:w-48 md:h-40 lg:w-64 lg:h-56 bg-gray-700 flex flex-col justify-end rounded-sm">
        <div class="bg-red-600">
          <p class="text-white text-sm lg:text-lg p-1">{{$route.params.depatureCity}}</p>
        </div>
      </div>
      <div class="w-24 h-32 md:w-32 md:h-32 bg-white flex justify-center items-center">
        <fa-icon class="hidden md:block text-gray-400" :icon="['fas','plane']" size="3x"/>
        <fa-icon class="md:hidden text-gray-400" :icon="['fas','plane']" size="2x"/>
      </div>
      <div class="w-40 h-32 md:w-48 md:h-40 lg:w-64 lg:h-56 bg-gray-700 flex flex-col justify-end rounded-sm relative">
        <span class="absolute top-0 right-0 m-2 text-xs md:text-sm bg-white text-gray-800 rounded p-1 font-semibold">70,000 KES</span>
        <div class="bg-red-600">
          <p class="text-white text-sm lg:text-lg p-1">{{$route.params.arrivalCity}}</p>
        </div>
      </div>
    </div>
    <!-- results -->
    <div class="w-full mx-auto">
      <!-- if there is no result display 👇 alert... -->
      <div class="flex justify-center content-center mx-1 pt-2 md:pt-10 lg:pt-0">
        <div v-if="availableFlights.length==0" class="alert flex flex-row items-center bg-yellow-200 p-5 rounded border-b-2 border-yellow-300">
          <div class="alert-icon flex items-center bg-yellow-100 border-2 border-yellow-500 justify-center h-10 md:h-16 w-10 md:w-16 flex-shrink-0 rounded-full">
            <span class="text-yellow-500">
              <svg fill="currentColor"
              viewBox="0 0 20 20"
              class="h-6 md:h-12 w-6 md:w-12">
              <path fill-rule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clip-rule="evenodd"></path>
            </svg>
          </span>
        </div>
        <div class="alert-content ml-4">
          <div class="alert-title font-semibold text-lg text-yellow-800">
            Unsuccessful
          </div>
          <div class="alert-description text-sm lg:text-lg text-yellow-600 md:px-4 lg:px-24">
            No matching flights for the specified criteria...check our <span class="text-blue-700 caveat text-xl underline cursor-pointer hover:text-black">flight calendar</span> instead? or <span @click="$router.go(-1)" class="underline cursor-pointer text-blue-700 hover:text-black">go back to flight search <fa-icon :icon="['fas','search']" size="1x" color="black"/></span>
          </div>
        </div>
      </div>
      </div>
      <!-- alert message👆 -->
      <div class="flex flex-col flex-wrap justify-center lg:pt-8 mx-2 md:mx-4 lg:mx-32 xl:w-3/4 xl:mx-auto">
        <table class="w-full lg:w-auto table-fixed my-4 lg:m-6 mx-auto text-xs lg:text-base shadow-lg lg:shadow-xl cursor-pointer" v-for="flight in availableFlights" :key="flight.id">
          <tr>
            <td colspan="3"><hr/></td>
          </tr>
          <tr class="m-1">
            <td class="border-4 border-white w-1/3 p-2 bg-gray-300 font-semibold">TAKE OF AT {{flight.depature}} HRS</td>
            <td class="w-1/3 py-2"><fa-icon class="text-gray-200" :icon="['far', 'clock']" size="2x"/></td>
            <td class="border-4 border-white w-1/3 p-2 bg-gray-300 font-semibold">{{new Date($route.params.datetime).getDay()+1}}, {{ months[new Date($route.params.datetime).getMonth()]}} {{ new Date($route.params.datetime).getFullYear()}} AT {{flight.arrival}} HRS</td>
          </tr>
          <tr>
            <td class="border-4 border-white w-1/3 p-2 bg-gray-300 text-red-600">STOP(S)</td>
            <td class="border-4 border-white w-1/3 p-2 bg-gray-300">{{flight.stops}}</td>
            <td class="border-4 border-white w-1/3 p-2 bg-gray-300"__ HOURS</td>
          </tr>
          <tr>
            <td class="border-4 border-white p-2 bg-gray-300" colspan="3">{{flight.plane}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import availableFlights from '@/available-flights'
export default {
  name:'FlightResults',
  data(){
    return{
      // availableFlights:availableFlights.flights,
      months:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    }
  },
  computed:{
    availableFlights(){
      return availableFlights.flights.filter(fl=>{
        let regex = new RegExp(this.$route.params.depatureCity, 'gi')
        let regex2 = new RegExp(this.$route.params.arrivalCity, 'gi')
        return fl.depatureCity.match(regex)&&fl.arrivalCity.match(regex2)
      })
    }
  }
}
</script>
