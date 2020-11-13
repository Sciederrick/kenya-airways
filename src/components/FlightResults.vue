<template>
  <div id="flightResults">
    <!-- results nav -->
    <ResultsNav/>
    <!-- header -->
    <div class="">

    </div>
    <!-- results -->
    <div class="flex flex-wrap justify-center">
      <table class="table-fixed my-4 lg:m-6 mx-auto text-xs lg:text-base shadow-lg">
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
      <table class="table-fixed my-4 lg:m-6 mx-auto text-xs lg:text-base shadow-lg">
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
      <table class="table-fixed my-4 lg:m-6 mx-auto text-xs lg:text-base shadow-lg">
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
      <table class="table-fixed my-4 lg:m-6 mx-auto text-xs lg:text-base shadow-lg">
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
</template>

<script>
export default {
name:'FlightResults',
components:{
  ResultsNav
}
}
</script>
