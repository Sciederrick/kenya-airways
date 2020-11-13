<template>
  <div id="bookingEnquiry">
    <form class="py-2">
      <div v-if="false" class="md:mx-auto md:w-2/3 lg:w-3/4 text-right">
        <fa-icon :icon="['fas','redo-alt']" size="1x" color="maroon"/>
        <input class="p-2 lg:py-4 bg-transparent text-red-700" type="reset" value="reset fields">
      </div>
      <div class="flex md:mx-auto md:w-2/3 lg:w-3/4 border border-t-0 mx-2 my-4 md:my-10 border-black shadow p-1">
        <div class="md:py-2">
          <label class="text-sm" for="from">FROM:</label>
          <fa-icon class="float-left ml-2" :icon="['fas', 'plane-departure']" size="1x"/>
        </div>
        <input class="w-full p-2 self-center focus:outline-none" type="text" name="from" id="from">
      </div>
      <div class="flex md:mx-auto md:w-2/3 lg:w-3/4 border border-t-0 mx-2 my-4 md:my-10 border-black shadow p-1">
        <div class="md:py-2">
          <label class="text-sm" for="to">TO:</label>
          <fa-icon class="float-left ml-2" :icon="['fas', 'plane-arrival']" size="1x"/>
        </div>
        <input class="w-full p-2 self-center focus:outline-none" type="text" name="from" id="to">
      </div>
      <div class="flex md:mx-auto md:w-2/3 lg:w-3/4 border border-t-0 mx-2 my-4 md:my-10 border-black shadow p-1">
        <div class="md:py-2">
          <label class="text-sm" for="date">DATE:</label>
          <fa-icon class="float-left ml-2" :icon="['fas', 'calendar-alt']" size="1x"/>
        </div>
        <input class="w-full p-2 self-center focus:outline-none" type="text" name="from" id="date">
      </div>
      <div class="md:mx-auto md:w-2/3 lg:w-3/4 p-2 md:p-0">

        <router-link :to="{name:'FlightResults'}">
          <input class="w-full p-2 lg:py-4 mx-auto bg-green-700 text-white text-sm hover:bg-red-700" type="submit" name="submit" value="BOOK NOW">
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {

}
</script>
