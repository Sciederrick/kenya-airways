<template>
  <div id="flightResults">
    <!-- results nav -->
    <ResultsNav/>
    <!-- header -->
    <div class="mx-1 md:mx-2 lg:mx-20 lg:my-20 flex flex-row justify-between md:justify-around items-center p-2">
      <div class="w-40 h-32 md:w-48 md:h-40 lg:w-64 lg:h-56 bg-gray-700 flex flex-col justify-end rounded-sm">
        <div class="bg-red-600">
          <p class="text-white text-sm lg:text-lg p-1">Nairobi</p>
        </div>
      </div>
      <div class="w-24 h-32 md:w-32 md:h-32 bg-white flex justify-center items-center">
        <fa-icon class="hidden md:block text-gray-400" :icon="['fas','plane']" size="3x"/>
        <fa-icon class="md:hidden text-gray-400" :icon="['fas','plane']" size="2x"/>
      </div>
      <div class="w-40 h-32 md:w-48 md:h-40 lg:w-64 lg:h-56 bg-gray-700 flex flex-col justify-end rounded-sm relative">
        <span class="absolute top-0 right-0 m-2 text-xs md:text-sm bg-white text-gray-800 rounded p-1 font-semibold">70,000 KES</span>
        <div class="bg-red-600">
          <p class="text-white text-sm lg:text-lg p-1">New York</p>
        </div>
      </div>
    </div>
    <!-- results -->
    <div class="w-full mx-auto md:mx-2 lg:mx-24">
      <div class="flex flex-wrap justify-center md:justify-start lg:pt-8">
        <table class="w-full md:w-auto table-fixed my-4 lg:m-6 mx-auto text-xs lg:text-base shadow-lg lg:shadow-xl">
          <tr>
            <td colspan="3"><hr/></td>
          </tr>
          <tr class="m-1">
            <td class="border-4 border-white w-1/3 p-2 bg-gray-100 font-semibold">0500 HRS</td>
            <td class="w-1/3 py-2"><fa-icon class="text-gray-200" :icon="['far', 'clock']" size="2x"/></td>
            <td class="border-4 border-white w-1/3 p-2 bg-gray-100 font-semibold">2, Nov, 2020 0500 HRS</td>
          </tr>
          <tr>
            <td class="border-4 border-white w-1/3 p-2 bg-gray-100 text-red-600">2 STOPS</td>
            <td class="border-4 border-white w-1/3 p-2 bg-gray-100">JTU, KUY</td>
            <td class="border-4 border-white w-1/3 p-2 bg-gray-100">24 HOURS</td>
          </tr>
          <tr>
            <td class="border-4 border-white p-2 bg-gray-100" colspan="3">ET 319 Boeing 777-300ER</td>
          </tr>
        </table>
        <table class="w-full md:w-auto table-fixed my-4 lg:m-6 mx-auto text-xs lg:text-base shadow-lg lg:shadow-xl">
          <tr>
            <td colspan="3"><hr/></td>
          </tr>
          <tr class="m-1">
            <td class="border-4 border-white w-1/3 p-2 bg-gray-100 font-semibold">0500 HRS</td>
            <td class="w-1/3 py-2"><fa-icon class="text-gray-200" :icon="['far', 'clock']" size="2x"/></td>
            <td class="border-4 border-white w-1/3 p-2 bg-gray-100 font-semibold">2, Nov, 2020 0500 HRS</td>
          </tr>
          <tr>
            <td class="border-4 border-white w-1/3 p-2 bg-gray-100 text-red-600">2 STOPS</td>
            <td class="border-4 border-white w-1/3 p-2 bg-gray-100">JTU, KUY</td>
            <td class="border-4 border-white w-1/3 p-2 bg-gray-100">24 HOURS</td>
          </tr>
          <tr>
            <td class="border-4 border-white p-2 bg-gray-100" colspan="3">ET 319 Boeing 777-300ER</td>
          </tr>
        </table>
        <table class="w-full md:w-auto table-fixed my-4 lg:m-6 mx-auto text-xs lg:text-base shadow-lg lg:shadow-xl">
          <tr>
            <td colspan="3"><hr/></td>
          </tr>
          <tr class="m-1">
            <td class="border-4 border-white w-1/3 p-2 bg-gray-100 font-semibold">0500 HRS</td>
            <td class="w-1/3 py-2"><fa-icon class="text-gray-200" :icon="['far', 'clock']" size="2x"/></td>
            <td class="border-4 border-white w-1/3 p-2 bg-gray-100 font-semibold">2, Nov, 2020 0500 HRS</td>
          </tr>
          <tr>
            <td class="border-4 border-white w-1/3 p-2 bg-gray-100 text-red-600">2 STOPS</td>
            <td class="border-4 border-white w-1/3 p-2 bg-gray-100">JTU, KUY</td>
            <td class="border-4 border-white w-1/3 p-2 bg-gray-100">24 HOURS</td>
          </tr>
          <tr>
            <td class="border-4 border-white p-2 bg-gray-100" colspan="3">ET 319 Boeing 777-300ER</td>
          </tr>
        </table>
        <table class="w-full md:w-auto table-fixed my-4 lg:m-6 mx-auto text-xs lg:text-base shadow-lg lg:shadow-xl">
          <tr>
            <td colspan="3"><hr/></td>
          </tr>
          <tr class="m-1">
            <td class="border-4 border-white w-1/3 p-2 bg-gray-100 font-semibold">0500 HRS</td>
            <td class="w-1/3 py-2"><fa-icon class="text-gray-200" :icon="['far', 'clock']" size="2x"/></td>
            <td class="border-4 border-white w-1/3 p-2 bg-gray-100 font-semibold">2, Nov, 2020 0500 HRS</td>
          </tr>
          <tr>
            <td class="border-4 border-white w-1/3 p-2 bg-gray-100 text-red-600">2 STOPS</td>
            <td class="border-4 border-white w-1/3 p-2 bg-gray-100">JTU, KUY</td>
            <td class="border-4 border-white w-1/3 p-2 bg-gray-100">24 HOURS</td>
          </tr>
          <tr>
            <td class="border-4 border-white p-2 bg-gray-100" colspan="3">ET 319 Boeing 777-300ER</td>
          </tr>
        </table>
      </div>

    </div>
  </div>
</template>

<script>
import ResultsNav from '@/components/ResultsNav.vue'
export default {
name:'FlightResults',
components:{
  ResultsNav
}
}
</script>
