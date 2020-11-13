<template>
  <div class="fixed inset-y-0 right-0 h-screen w-5/6 flex flex-col uppercase bg-white z-50">
    <!-- KQ logo -->
    <div class="w-full h-24">
      <img class="h-full w-full object-cover" :src="require('@/assets/logo3.jpg')" alt="KQ logo">
    </div>
    <!-- navigation links -->
    <fa-icon @click="closeNav()" class="mb-3 ml-2" :icon="['fas','times']" size="2x" color="black"/>
    <ul class="mt-4" id="nav">
      <li @click="closeNav()" class="pl-20 py-8 text-left underline hover:text-green-600"><router-link :to="{name:'Home'}">Home</router-link></li>
      <li @click="closeNav()" class="pl-20 py-8 text-left underline hover:text-green-600"><router-link :to="{name:'ContactUs'}">Contact&nbsp;Us</router-link></li>
      <li @click="closeNav()" class="pl-20 py-8 text-left underline hover:text-green-600"><router-link :to="{name:'AboutUs'}">About&nbsp;Us</router-link></li>
    </ul>
  </div>
</template>

<script>
import {bus} from '@/main.js'
export default{
  name:'MobileNav',
  methods:{
    closeNav(){
      bus.$emit('closeNav', false)
    }
  }
}
</script>

<style scoped>
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #D12626;
}
</style>
