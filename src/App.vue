<template>
  <div id="app" class="overflow-x-hidden">
    <!-- medium to large screen nav -->
    <nav class="fixed top-0 inset-x-0 flex flex-row justify-between items-center bg-white px-4 py-2 z-40" id="nav">
      <!-- logo -->
      <div class="h-12 md:h-20 pt-3">
        <span class="md:inline font-semibold text-2xl md:text-4xl text-red-700 md:pl-4 pb-2">KQ</span>
      </div>
      <button @click.prevent="showNav=true" class="md:hidden bg-transparent p-1 focus:outline-none" type="button">
        <fa-icon :icon="['fas', 'bars']" size="2x"/>
      </button>
      <ul class="hidden md:block">
        <li class="inline md:px-3 lg:px-6"><router-link :to="{name:'Home'}"><fa-icon class="mx-2 hidden md:inline" :icon="['fas','home']" size="1x"/>Home</router-link></li>
        <li class="inline md:px-3 lg:px-6"><router-link :to="{name:'ContactUs'}"><fa-icon class="mx-2 hidden md:inline" :icon="['fas','tty']" size="1x"/>Contact&nbsp;<span class="md:hidden lg:inline">Us</span></router-link></li>
        <li class="inline md:px-3 lg:px-6"><router-link :to="{hash:'#footer'}"><fa-icon class="mx-2 hidden md:inline" :icon="['fas','info']" size="1x"/>About&nbsp;<span class="md:hidden lg:inline">Us</span></router-link></li>
      </ul>
    </nav>
    <!-- mobile navbar -->
    <router-view :showNav="showNav" />
    <!-- footer -->
    <footer class="bg-gray-800 pt-10 sm:mt-10 pt-10" id="footer">
    <div class="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
        <!-- Col-1 -->
        <div class="p-5 w-full sm:w-8/12 md:w-6/12 md:text-left md:pl-10">
            <!-- Col Title -->
            <div class="text-xs uppercase text-gray-400 font-medium mb-6">
                About Kenya Airways
            </div>

            <p class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
              Kenya Airways, a member of the Sky Team Alliance, is a leading African airline flying to 54 destinations worldwide, 41 of which are in Africa and carries over four million passengers annually. It continues to modernize its fleet with its 36 aircraft being some of the youngest in Africa. This includes its flagship B787 Dreamliner aircraft. The on-board service is renowned and the lie-flat business class seat on the wide-body aircraft is consistently voted among the world’s top 10. Kenya Airways takes pride in being at the forefront of connecting Africa to the World and the World to Africa through its hub at the new ultra-modern Terminal 1A at the Jomo Kenyatta International Airport in Nairobi.
            </p>
            <p>
              Kenya Airways celebrated 43 years of operations in January 2020 and was named Africa Leading Airline 2019 by the World Travel Awards.
            </p>
        </div>


        <!-- Col-3 -->
        <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12 md:text-left md:pl-10 lg:pl-32">
            <!-- Col Title -->
            <div class="text-xs uppercase text-gray-400 font-medium mb-6">
                Other Sites
            </div>

            <!-- Links -->
            <a href="#" class="my-3 block text-gray-300 hover:text-red-600 text-sm font-medium duration-700">
                Msafiri Magazine
            </a>
            <a href="#" class="my-3 block text-gray-300 hover:text-red-600 text-sm font-medium duration-700">
                KQ Ground Services
            </a>
            <a href="#" class="my-3 block text-gray-300 hover:text-red-600 text-sm font-medium duration-700">
                KQ Technical
            </a>
            <a href="#" class="my-3 block text-gray-300 hover:text-red-600 text-sm font-medium duration-700">
                KQ Holiday
            </a>
            <a href="#" class="my-3 block text-gray-300 hover:text-red-600 text-sm font-medium duration-700">
              BlueBiz
            </a>
        </div>

        <!-- Col-3 -->
        <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12 md:text-left md:pl-10 lg:pl-32">
            <!-- Col Title -->
            <div class="text-xs uppercase text-gray-400 font-medium mb-6">
                Social
            </div>

            <!-- Links -->
            <a href="#" class="my-3 block text-gray-300 hover:text-red-600 text-sm font-medium duration-700">
                Instagram
            </a>
            <a href="#" class="my-3 block text-gray-300 hover:text-red-600 text-sm font-medium duration-700">
                Linkedin
            </a>
            <a href="#" class="my-3 block text-gray-300 hover:text-red-600 text-sm font-medium duration-700">
                Twitter
            </a>
            <a href="#" class="my-3 block text-gray-300 hover:text-red-600 text-sm font-medium duration-700">
                Facebook
            </a>
        </div>
    </div>

    <!-- Copyright Bar -->
    <div class="pt-2">
        <div class="flex pb-5 px-3 m-auto pt-5
            border-t border-gray-500 text-gray-400 text-sm
            flex-col md:flex-row max-w-6xl">
            <div class="mt-2">
                &copy; {{new Date().getFullYear()}} Kenya Airways Limited. All rights reserved.
            </div>

            <!-- Required Unicons (if you want) -->
            <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                <a href="#" class="w-6 mx-1">
                    <i class="uil uil-facebook-f"></i>
                </a>
                <a href="#" class="w-6 mx-1">
                    <fa-icon :icon="['fab', 'facebook-f']" size="1x"/>
                </a>
                <a href="#" class="w-6 mx-1">
                    <fa-icon :icon="['fab', 'instagram']" size="1x"/>
                </a>
                <a href="#" class="w-6 mx-1">
                    <fa-icon :icon="['fab', 'linkedin']" size="1x"/>
                </a>
                <a href="#" class="w-6 mx-1">
                    <fa-icon :icon="['fab', 'twitter']" size="1x"/>
                </a>
            </div>
        </div>
        </div>
    </footer>
  </div>
</template>

<script>
import {bus} from '@/main.js'
  export default{
    data(){
      return {
        showNav:false
      }
    },
    created(){
      bus.$on('closeNav', (data)=>{
        this.showNav = data
      })
    }
  }
</script>

<style>
html {
  scroll-behaviour: smooth;
}
body{
  background: #fff url('./assets/images/white_wall_hash.png') repeat fixed;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #D12626;
}

/* width */
::-webkit-scrollbar {
  width: 7px;
}
/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #E0CF35;
  border-radius: 5px;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background-color: #000;
  border-radius: 5px;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background-color: #D12626;
}
</style>
