<template>
  <div class="mt-16 md:mt-24">
    <form action="" class="form bg-white p-6 my-10 relative">

        <div class="icon bg-blue-600 text-white w-6 h-6 absolute flex items-center justify-center p-5" style="left:-40px"><i class="fal fa-phone-volume fa-fw text-2xl transform -rotate-45"></i></div>
        <h3 class="text-2xl text-gray-900 font-semibold">Let us call you!</h3>
        <p class="text-gray-600"> To help you with your enquiry, fill below</p>
        <div class="flex space-x-5 mt-3">
            <input type="text" name="" id="" placeholder="Your Name" class="border p-2  w-1/2">
            <input type="tel" name="" id="" placeholder="Your Number" class="border p-2 w-1/2">
        </div>
        <input type="email" name="" id="" placeholder="Your Email" class="border p-2 w-full mt-3">
        <textarea name="" id="" cols="10" rows="3" placeholder="Tell us about your enquiry" class="border p-2 mt-3 w-full"></textarea>
        <p class="font-bold text-sm mt-3">GDPR Agreement *</p>
        <div class="flex items-baseline space-x-2 mt-2">
            <input type="checkbox" name="" id="" class="inline-block">
            <p class="text-gray-600 text-sm">I consent to having this website store my submitted information so they can respond to my inquiry.</p>
        </div>
        <input type="submit" value="Submit" class="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3">

    </form>
    <!-- mobile navigation bar -->
    <MobileNav v-if="showNav" class="md:hidden"/>
  </div>
</template>

<script>
import MobileNav from '@/components/MobileNav.vue'
export default{
  components:{
    MobileNav
  },
  props:{
    showNav:{
      type:Boolean,
      required:true
    }
  }
}
</script>


<style scoped>
  .icon::after{
  content: '';
  display: block;
  position: absolute;
  border-top: 23px solid transparent;
  border-bottom: 17px solid transparent;
  border-left: 12px solid #3182ce;
  left: 100%;
  top: 0;
  }
</style>
