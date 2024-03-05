<script setup>
import { ref } from 'vue'
</script>

<template>
  <body class="w-screen h-screen">
    <div class="bg-[#1b1b1b] w-full h-full flex flex-col justify-between">
      <div
        class="relative h-screen bg-cover bg-[url('/src/assets/back.jpg')] mt-10 mx-10 rounded-3xl before:absolute before:left-0 before:bottom-80 before:w-10 before:h-10 before:rounded-full before:shadow-[-20px_20px_0_0] before:shadow-[#1b1b1b]"
      >
        <div class="flex mx-5 mt-5 justify-between">
          <div class="flex bg-white rounded-full py-2 px-4 gap-6 text-sm text-gray-500">
            <a class="text-violet-600" href="">Home</a>
            <a href="">Apps</a>
            <a href="">Blog</a>
          </div>
          <div class="flex items-center gap-4">
            <img class="h-7" src="/src/assets/aurora_white.png" alt="logo" />
            <a class="text-4xl font-chillax font-medium text-white">Aurora</a>
          </div>
          <div class="flex gap-3 items-center bg-white rounded-full px-4 py-2 font-medium cursor-pointer">
            <a class="text-black">Contact Us</a>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
              <path
                class="stroke-black stroke-1"
                fill-rule="evenodd"
                d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
              />
            </svg>
          </div>
        </div>
        <div class="flex right-0 bottom-0 absolute mr-10 mb-10">
          <div class="w-56 h-48 bg-white flex flex-col pl-5 pt-5 pr-1 rounded-3xl rounded-tr-none gap-2">
            <div class="flex items-center gap-2">
              <svg viewBox="0 0 24 24" class="h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M3 18.433C3 16.4308 4.45485 14.7254 6.43204 14.4098L6.61013 14.3814C8.19336 14.1287 9.80664 14.1287 11.3899 14.3814L11.568 14.4098C13.5451 14.7254 15 16.4308 15 18.433C15 19.2984 14.2984 20 13.433 20H4.56697C3.70156 20 3 19.2984 3 18.433Z"
                    stroke="#363853"
                    stroke-width="1.5"
                  ></path>
                  <path
                    d="M12.5 7.5C12.5 9.433 10.933 11 9 11C7.067 11 5.5 9.433 5.5 7.5C5.5 5.567 7.067 4 9 4C10.933 4 12.5 5.567 12.5 7.5Z"
                    stroke="#363853"
                    stroke-width="1.5"
                  ></path>
                  <path
                    d="M15 11C16.933 11 18.5 9.433 18.5 7.5C18.5 5.567 16.933 4 15 4M17.3899 20H19.433C20.2984 20 21 19.2984 21 18.433C21 16.4308 19.5451 14.7254 17.568 14.4098V14.4098C17.4494 14.3909 17.3293 14.3814 17.2093 14.3814C16.8895 14.3814 16.7902 14.3814 16.2412 14.3814"
                    stroke="#363853"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>
                </g>
              </svg>
              <a class="text-purple-500 font-medium">About Us</a>
            </div>
            <a class="text-sm text-gray-500"
              >Our journey began with a shared vision among a group of tech enthusiasts, brought together by the idea of revolutionizing the threat intelligence.</a
            >
          </div>
          <div class="flex flex-col">
            <div class="w-16 h-32 bg-white rounded-3xl rounded-l-none"></div>
            <div
              class="flex items-center justify-center w-12 h-12 mt-3 ml-3 bg-white rounded-full before:absolute before:right-6 before:bottom-6 before:w-10 before:h-10 before:rounded-full before:shadow-[-20px_-20px_0_0] before:shadow-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
                <path
                  class="stroke-black stroke-1"
                  fill-rule="evenodd"
                  d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="relative h-10 mb-10 ml-10">
        <span
          class="absolute h-24 bg-[#1b1b1b] w-1/4 -top-80 rounded-tr-xl before:absolute before:-right-10 before:bottom-0 before:w-10 before:h-10 before:rounded-full before:shadow-[-20px_20px_0_0] before:shadow-[#1b1b1b]"
        >
          <div class="text-white h-full items-center flex justify-between pr-5">
            <a class="text-[#C8C8C8]"
              >It is about creating something<br />
              bigger than yourself</a
            >
            <img class="h-12" src="/src/assets/arrow.png" alt="logo" />
          </div>
        </span>
        <span
          class="absolute h-28 bg-[#1b1b1b] w-1/3 -top-56 rounded-tr-xl before:absolute before:-right-10 before:bottom-0 before:w-10 before:h-10 before:rounded-full before:shadow-[-20px_20px_0_0] before:shadow-[#1b1b1b]"
        >
          <div class="text-white h-full items-center flex text-8xl font-medium">
            <a>Unlocking</a>
          </div>
        </span>
        <span
          class="absolute h-28 bg-[#1b1b1b] w-7/12 -top-28 rounded-tr-xl before:absolute before:-right-10 before:bottom-0 before:w-10 before:h-10 before:rounded-full before:shadow-[-20px_20px_0_0] before:shadow-[#1b1b1b]"
        >
          <div class="text-white h-full items-center flex text-8xl font-medium">
            <a>Digital Excellence</a>
          </div>
        </span>
      </div>
    </div>
  </body>
</template>

<style scoped>
.card .content .price {
  position: absolute;
  height: 70px;
  background: #000;
  width: 50%;
  top: -80px;
  left: 0;
  border-top: 10px solid #fff;
  border-right: 10px solid #fff;
  border-top-right-radius: 25px;
}
.card .content .price::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  box-shadow: -10px -10px 0 #fff;
}
.card .content .price::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: -25px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  box-shadow: -10px 10px 0 #000;
}

.card .content {
  position: relative;
  width: 100%;
  height: 150px;
  background: #000;
  border-radius: 15px;
  border-top-left-radius: 0;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #fff;
}
.card {
  position: relative;
  width: 320px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card .imgBx {
  position: relative;
  width: 100%;
  height: 240px;
  background: #f00;
  border-radius: 15px;
  background: url(/src/assets/back.jpg);
  background-size: cover;
}
.card .imgBx::before {
  content: '';
  position: absolute;
  bottom: 0;
  right: 130px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  box-shadow: -10px 10px 0 #fff;
}
.card .imgBx::after {
  content: '';
  position: absolute;
  bottom: 70px;
  left: 0;
  width: 20px;
  height: 20px;

  border-radius: 50%;
  box-shadow: -10px 10px 0 #fff;
}
</style>
