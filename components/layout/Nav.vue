<template>
  <nav id="header" class="fixed w-full z-30 top-0 text-white bg-white navbar-active">
    <div
      class="w-full container mx-auto flex flex-wrap items-center justify-center mt-0 py-2"
    >
      <div class="pl-4 flex justify-center ">
        <a
          class="text-white no-underline hover:no-underline w-1/2"
          href="/"
        >
          <img class="" src="../../assets/imgs/logo.png" />
        </a>
      </div>
      <div class="block lg:hidden pr-4">
        <button
          @click="mobileSidebar = !mobileSidebar"
          id="nav-toggle"
          class="flex items-center p-1 text-blue-700 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
        >
          <svg
            class="fill-current h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        :class="mobileSidebar ? '' : 'hidden'"
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20 "
        id="nav-content"
      >
        <ul class="list-reset lg:flex justify-end flex-1 items-center">
          <li class="mr-3">
            <a
              class="inline-block uppercase no-underline hover:underline font-medium hover:text-gray-800 hover:text-underline py-2 px-4"
              href="/club"
              >Le Club</a
            >
          </li>
          <li class="mr-3">
            <a
              class="inline-block uppercase no-underline hover:underline font-medium hover:text-gray-800 hover:text-underline py-2 px-4"
              href="/adultes"
              >Adultes</a
            >
          </li>
          <li class="mr-3">
            <a
              class="inline-block uppercase no-underline hover:underline font-medium hover:text-gray-800 hover:text-underline py-2 px-4"
              href="/events"
            >Vie du club</a
            >
          </li>
          <li class="mr-3">
            <a
              class="inline-block uppercase no-underline hover:underline font-medium hover:text-gray-800 hover:text-underline py-2 px-4"
              href="/doublejeu"
            >Tournois</a
            >
          </li>
          <li class="mr-3 mt-3">
            <a
              href="#contact"
              class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full mt-8 lg:mt-0 py-4 px-8 shadow focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >
              Nous contacter
            </a>
          </li>
        </ul>

      </div>
    </div>
    <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
  </nav>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "layout-nav",
  data() {
    return {
      mobileSidebar: false,
    };
  },
  mounted() {

  },

  methods: {
  },

  watch: {

  },
});
</script>

<style>
a {
  font-weight: 600;
  font-style: normal !important;
}

</style>
