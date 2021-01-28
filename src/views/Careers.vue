<template>
  <div>
    <div class="hidden lg:block">
      <div class="flex flex-wrap md:items-center h-screen mt-5">
        <div class="bg-white w-full md:w-1/2 h-screen">
          <div class="mx-32">
            <h1 class="text-6xl font-bold mt-16">Openings</h1>

            <!-- country region island -->
            <div class="flex mt-16 font-light text-gray-500">
              <div class="pr-4">
                <span class="uppercase">Pilot</span>
                <p class="text-2xl text-gray-900 font-semibold pt-2">junior</p>
              </div>
              <div class="pr-4">
                <span class="uppercase">Air Traffic Controller</span>
                <p class="text-2xl text-gray-900 font-semibold pt-2">senior</p>
              </div>
              <div class="pr-4">
                <span class="uppercase">Airport Manager</span>
                <p class="text-2xl text-gray-900 font-semibold pt-2">junior</p>
              </div>
              <div class="pr-4">
                <span class="uppercase">Aeronautical Engineer</span>
                <p class="text-2xl text-gray-900 font-semibold pt-2">senior</p>
              </div>
            </div>

            <!-- description -->
            <div
            class="description w-full md:w-2/3 mt-16 text-gray-500 text-sm"
            >
            Kenya Airways continues to grow and support growth in Africa and the World through sustained quality standards from hard-working and loyal staff and management.
            We aim to consistently develop our business with the highest standards of quality and service by recruiting the best.
          </div>

          <button class="uppercase mt-5 text-sm text-red-600 font-semibold focus:outline-none">
            Openings closed
          </button>
        </div>
      </div>
      <div class="bg-red-600 w-full hidden lg:block md:w-1/3 lg:w-1/2 h-screen">
        <img
        src="./../assets/images/careers.jpg"
        class="h-screen w-full object-cover"
        alt=""
        />
      </div>
    </div>
    </div>
  <div class="block lg:hidden">

  </div>
  </div>
</template>
