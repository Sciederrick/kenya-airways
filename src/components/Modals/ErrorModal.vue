<template>
  <div class="flex items-center justify-center font-sans" style="background: #edf2f7;" id="errorModal">
    <div class="h-full w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">
      <!-- Error Modal -->
      <div class="md:w-1/3 sm:w-full rounded-lg shadow-lg bg-white my-3">
        <div class="flex justify-between border-b border-gray-100 px-5 py-4">
          <div>
            <fa-icon class="text-red-500 mr-2" :icon="['fas', 'exclamation-triangle']" size="1x"/>
            <span class="font-bold text-gray-700 text-lg">Error</span>
          </div>
          <div>
            <button @click.prevent="closeModal()"><fa-icon class="text-red-500 hover:text-red-600 transition duration-150" :icon="['far', 'times-circle']" size="1x"/></button>
          </div>
        </div>

        <div class="px-10 py-5 text-gray-600">
          <!-- Custom Error Message -->
          <slot></slot>
        </div>

        <div class="px-5 py-4 flex justify-end">
          <button @click.prevent="closeModal()" class="text-sm py-2 px-3 text-gray-500 hover:text-red-600 transition duration-150 focus:outline-none">OK</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {bus} from '@/main'
export default{
  name:'ErrorModal',
  methods:{
    closeModal(){
      bus.$emit('closeErrorModal', false)
    }
  }
}
</script>
