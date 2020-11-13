<template>
  <div id="resultsNav" class="flex justify-between py-2 px-3 md:px-5 lg:px-16 md:py-3 lg:py-4 my-4 md:my-5 lg:mx-2 bg-gray-800 text-sm md:text-base lg:text-lg text-white">
    <span>4 results</span>
    <span @click="$router.go(-1)" class="underline cursor-pointer">Go back</span>
  </div>
</template>

<script>
export default{
name:'ResultsNav'
}
</script>
