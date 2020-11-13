<template>
  <div class="mt-16 md:mt-24">
    <h1 class="text-center">Contact Us</h1>
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
