<template>
  <div id="extras">
    <!-- change passenger details and almost done message -->
    <div class="flex justify-between py-2 px-3 md:px-5 lg:px-16 md:py-3 lg:py-4 mt-4 md:mt-5 lg:mx-2 bg-gray-800 text-sm md:text-base lg:text-lg text-white">
      <router-link :to="{name:'PassengerDetails', hash:'#passengerDetails'}">
        <span class="my-auto underline cursor-pointer uppercase font-semibold"><fa-icon class="mr-1 text-lg self-center mt-1" :icon="['fas', 'angle-double-left']" size="1x"/>passenger details</span>
      </router-link>
      <span @click.prevent="persistExtras()" class="my-auto underline cursor-pointer font-semibold uppercase">pay<fa-icon class="ml-1 text-lg self-center mt-1" :icon="['fas', 'angle-double-right']" size="1x"/></span>
    </div>
    <!-- header -->
    <div class="flex justify-between px-2 md:px-4 lg:px-16 bg-green-300 md:mx-2 py-2 my-1">
      <!-- seat price * no of seats -->
      <div class="">
        <span class="text-red-600">3</span> * 70,000 + 7000
      </div>
      <!-- total fee -->
      <div class="">
        Total Fee: <span class="text-red-600">217,000 KES</span>
      </div>
    </div>
    <!-- luggage -->
    <div class="flex flex-wrap justify-end mx-1 py-2 relative">
      <div class="absolute inset-0 w-full h-auto border-l border-white rounded">
        <img class="h-full w-full object-cover opacity-50" :src="require('@/assets/images/jeshoots-com-mSESwdMZr-A-unsplash.jpg')" alt="luggage photo">
      </div>
      <div class="w-5/6 md:w-2/3 mr-2 py-5 pl-5 pr-2 md:pl-10 z-10 bg-gray-100">
        <form>
        <!-- bags -->
        <div>
          <h2 class="text-left text-gray-800 font-semibold">Bags</h2>
          <div class="flex flex-wrap justify-start items-center">
            <label class="pr-2" for="numberOfBags">Number of Bags(non-cabin size):</label>
            <input v-model="numberOfBags" class="w-24 p-1 pl-4 my-4 border rounded-sm border-black shadow" type="number" step="1" min="0" max="20" placeholder="0" id="numberOfBags">
          </div>
          <div class="text-left text-sm">
            <p class="py-2">Charges apply for luggage: in excess of <span class="text-red-500">23.5</span> to <span class="text-red-500">32 kg</span> ; <span class="text-red-500">2+ bags</span></p>
            <p class="py-2">luggage in flight are subject to space available. Cabin size luggage is not charged.</p>
            <p class="py-2"><span class="text-red-500">7000 KES</span> per bag</p>
          </div>
        </div>
        <!-- pets -->
        <div>
          <h2 class="text-left pt-6 text-gray-800 font-semibold">Pets</h2>
          <div class="flex flex-wrap justify-start items-center">
            <div class="flex flex-col flex-wrap ml-2 my-1">
              <!-- dog -->
              <div class="flex justify-between items-center">
                <div class="flex justify-between items-center">
                  <input @click="pet.dog.show=!pet.dog.show" type="checkbox" value="Dog" id="petDog"><label class="px-2 text-sm" for="petDog">Dog</label>
                </div>
                <div :class="{'invisible':!pet.dog.show}" class="flex justify-between items-center">
                  <label class="px-2 text-xs text-gray-600" for="numberOfDogs">Number of dogs:</label>
                  <input v-model="pet.dog.count" class="w-10 lg:w-16 my-1 text-center border rounded-sm border-black shadow" type="number" step="1" min="0" max="20" value="1" id="numberOfDogs">
                </div>
              </div>
              <!-- cat -->
              <div class="flex justify-between items-center">
                <div class="flex justify-between items-center">
                  <input @click="pet.cat.show=!pet.cat.show" type="checkbox" value="Cat" id="petCat"><label class="px-2 text-sm" for="petCat">Cat</label>
                </div>
                <div :class="{'invisible':!pet.cat.show}" class="flex justify-between items-center">
                  <label class="px-2 text-xs text-gray-600" for="numberOfCats">Number of cats:</label>
                  <input v-model="pet.cat.count" class="w-10 lg:w-16 my-1 text-center border rounded-sm border-black shadow" type="number" step="1" min="0" max="20" value="1" id="numberOfCats">
                </div>
              </div>
              <!-- snake -->
              <div class="flex justify-between items-center">
                <div class="flex justify-between items-center">
                  <input @click="pet.snake.show=!pet.snake.show" type="checkbox" value="Snake" id="petSnake"><label class="px-2 text-sm" for="petSnake">Snake</label>
                </div>
                <div :class="{'invisible':!pet.snake.show}" class="flex justify-between items-center">
                  <label class="px-2 text-xs text-gray-600" for="numberOfSnakes">Number of snakes:</label>
                  <input v-model="pet.snake.count" class="w-10 lg:w-16 my-1 text-center border rounded-sm border-black shadow" type="number" step="1" min="0" max="20" value="1" id="numberOfSnakes">
                </div>
              </div>
              <!-- spider -->
              <div class="flex justify-between items-center">
                <div class="flex justify-between items-center">
                  <input @click="pet.spider.show=!pet.spider.show" type="checkbox" value="Spider" id="petSpider"><label class="px-2 text-sm" for="petSpider">Spider</label>
                </div>
                <div :class="{'invisible':!pet.spider.show}" class="flex justify-between items-center">
                  <label class="px-2 text-xs text-gray-600" for="numberOfSpiders">Number of spiders:</label>
                  <input v-model="pet.spider.count" class="w-10 lg:w-16 pl-2 my-1 text-center border rounded-sm border-black shadow" type="number" step="1" min="0" max="20" value="1" id="numberOfSpiders">
                </div>
              </div>
              <!-- monkey -->
              <div class="flex justify-between items-center">
                <div class="flex justify-between items-center">
                  <input @click="pet.monkey.show=!pet.monkey.show" type="checkbox" value="Monkey" id="petMonkey"><label class="px-2 text-sm" for="petMonkey">Monkey</label>
                </div>
                <div :class="{'invisible':!pet.monkey.show}" class="flex justify-between items-center">
                  <label class="px-2 text-xs text-gray-600" for="numberOfMonkeys">Number of monkeys:</label>
                  <input v-model="pet.monkey.count" class="w-10 lg:w-16 pl-2 my-1 text-center border rounded-sm border-black shadow" type="number" step="1" min="0" max="20" value="1" id="numberOfMonkeys">
                </div>
              </div>
            </div>
          </div>
          <div class="text-left text-sm">
            <p class="py-2">Charges apply for all pets</p>
            <p class="py-2">Pets are carried and delivered by a separate cargo flight. Pick up date will be as communicated by our handlers.</p>
            <p class="py-2"><span class="text-red-500">10000 KES</span> per pet</p>
          </div>
        </div>
      </form>
      </div>
    </div>
  </div>
</template>

<script>
import {bus} from '@/main'
export default{
  name: 'Extras',
  data(){
    return{
      numberOfBags: '',
      pet:{
        dog:{show:false, count:''},
        cat:{show:false, count:''},
        snake:{show:false, count:''},
        spider:{show:false, count:''},
        monkey:{show:false, count:''}
      }
    }
  },
  methods:{
    activeComponent(){
      bus.$emit('activeComponent', 'Extras')
    },
    previousDetails(){
      let previousData = JSON.parse(localStorage.getItem('extras'))
      if(previousData){
        this.numberOfBags = previousData.numberOfBags
        this.pet[previousData.pet.name].show = true
        this.pet[previousData.pet.name].count = previousData.pet.number
      }
    },
    persistExtras(){
      /*From Stack Overflow👀*/
      Object.filter = (obj, predicate) =>
        Object.keys(obj)
              .filter( key => predicate(obj[key]) )
              .reduce( (res, key) => (res[key] = obj[key], res), {} )

      let filtered = Object.filter(this.pet, pet => pet.show !== false)
      if(Object.entries(filtered).length === 0){
        // No Extras defined
        this.$router.push({ name: 'Visa', hash: '#visa'})
      }else{
        let extras = {numberOfBags:this.numberOfBags, pet:{name:Object.keys(filtered)[0], number:filtered[Object.keys(filtered)].count}}
        localStorage.setItem('extras', JSON.stringify(extras))
        console.log(extras)
        this.$router.push({ name: 'Visa', hash: '#visa'})
      }
    }
  },
  created(){
    this.activeComponent()
    this.previousDetails()
  }
}
</script>
