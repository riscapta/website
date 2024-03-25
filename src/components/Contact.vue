<script>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
export default {
  name: 'Contact',
  setup() {
    const name = ref('')
    const company = ref('')
    const mail = ref('')
    const notes = ref('')

    return { name, company, mail, notes }
  },
  methods: {
    navigateHome() {
      console.log('hi')
      router.push('/')
    },
    submitForm() {
      if (!this.name || !this.company || !this.mail || !this.notes) {
        console.log('Please fill all the fields')
        return
      }
      console.log('Name:', this.name)
      console.log('Company:', this.company)
      console.log('Mail:', this.mail)
      console.log('Notes:', this.notes)

      console.log('Form submitted')
      this.name = ''
      this.company = ''
      this.mail = ''
      this.notes = ''
    },
  },
}
</script>

<template>
  <div class="flex flex-col bg-[#1b1b1b]">
    <body class="w-screen h-screen items-center flex justify-center sm:pb-[600px] mb-[700px]">
      <div class="w-full pt-5 flex flex-col h-screen px-5 sm:px-0 sm:pt-0">
        <div class="flex sm:mx-5 mx-3 mt-5 justify-between items-center">
          <div class="flex bg-white rounded-full sm:py-2 py-1 sm:px-4 sm:gap-6 gap-1 px-2 items-center text-xs sm:text-sm text-gray-500">
            <a class="text-violet-600" href="">Home</a>
            <a href="https://drp.riscapta.com/">DRP</a>
            <a href="">Blog</a>
          </div>
          <div class="flex items-center gap-2 sm:gap-4">
            <img class="h-4 sm:h-7" src="/src/assets/riscapta.png" alt="logo" />
            <a class="sm:text-4xl font-ibm font-medium text-white">Riscapta</a>
          </div>
          <div class="w-24"></div>
        </div>
        <!-- HEADER END -->
        <div class="h-2/3 sm:mx-14 mx-3 px-1 my-10 flex flex-col sm:grid sm:grid-cols-3">
          <div class="flex flex-col">
            <div class="flex">
              <div class="bg-[#D7CBFE] rounded-tl-3xl h-20 w-full"></div>
              <div class="triangle h-20"></div>
            </div>
            <div class="bg-[#D7CBFE] rounded-bl-3xl h-full flex flex-col sm:pl-10 px-5">
              <a class="text-9xl font-bold font-ibm">Let's Talk</a>
              <a class="sm:pt-10 py-5"
                >As experts in thread intelligence and digital risk protection for banks, we're here to strengthen your cybersecurity. Reach out to discuss how we can safeguard
                your institution from evolving threats.</a
              >
            </div>
          </div>
          <div class="flex flex-col sm:col-span-2">
            <div class="flex">
              <div class="sm:h-20 w-full"></div>
            </div>
            <div class="sm:bg-[#D7CBFE] w-full h-full sm:relative flex justify-center pt-10 rounded-r-3xl">
              <div class="bg-[#2b2b2b] sm:w-11/12 sm:absolute rounded-3xl flex flex-col sm:px-20 px-10 pt-20 pb-10 text-white gap-10">
                <div class="flex flex-col gap-4">
                  <a class="text-3xl text-gray-200 pb-5">I am</a>
                  <input v-model="name" class="tex-lg text-gray-400 bg-transparent placeholder:text-gray-400 focus:outline-none" type="text" placeholder="Your name" />
                  <div class="h-0.5 w-full bg-[#cfcfcf] rounded-full"></div>
                </div>
                <div class="flex flex-col gap-4">
                  <a class="text-3xl text-gray-200 pb-5">Company Name</a>
                  <input v-model="company" class="tex-lg text-gray-400 bg-transparent placeholder:text-gray-400 focus:outline-none" type="text" placeholder="Your company name" />
                  <div class="h-0.5 w-full bg-[#cfcfcf] rounded-full"></div>
                </div>
                <div class="flex flex-col gap-4">
                  <a class="text-3xl text-gray-200 pb-5">Your Email</a>
                  <input v-model="mail" class="tex-lg text-gray-400 bg-transparent placeholder:text-gray-400 focus:outline-none" type="mail" placeholder="you@company.com" />
                  <div class="h-0.5 w-full bg-[#cfcfcf] rounded-full"></div>
                </div>
                <div class="flex flex-col gap-4">
                  <a class="text-3xl text-gray-200 pb-5">Any details you want to add?</a>
                  <input
                    v-model="notes"
                    class="tex-lg text-gray-400 bg-transparent placeholder:text-gray-400 focus:outline-none"
                    type="text"
                    placeholder="Tell us more about the problem"
                  />
                  <div class="h-0.5 w-full bg-[#cfcfcf] rounded-full"></div>
                </div>
                <button v-on:click="submitForm" class="flex mt-3 text-black gap-2 bg-white w-max px-4 py-2 rounded-full items-center font-ibm font-bold">
                  <a class="text-xl">Let's Talk</a>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
                    <path
                      class="stroke-black stroke-1"
                      fill-rule="evenodd"
                      d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
    <footer class="bg-[#1b1b1b] w-screen">
      <div class="mx-auto w-full p-4 py-6 lg:py-8 px-16">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <a href="/" class="flex items-center">
              <img src="/src/assets/riscapta.png" class="h-8 me-3" alt="FlowBite Logo" />
              <span class="self-center text-2xl font-semibold font-ibm whitespace-nowrap text-white">Riscapta</span>
            </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="/" class="hover:underline">Riscapta</a>
                </li>
                <li>
                  <a href="#contact" class="hover:underline">Contacto</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="https://github.com/riscapta" class="hover:underline">Github</a>
                </li>
                <li>
                  <a href="/" class="hover:underline">Discord</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="#privacy_policy" class="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#terms_and_conditions" class="hover:underline">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="/" class="hover:underline">Riscapta™</a>. All Rights Reserved. </span>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.triangle {
  aspect-ratio: 1;
  clip-path: polygon(0 100%, 0 0, 100% 100%);
  background: #d7cbfe;
}
</style>
