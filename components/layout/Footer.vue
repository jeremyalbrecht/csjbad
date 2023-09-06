<template>
  <footer class="bg-white">
    <div class="container mx-auto px-8">
      <div class="w-full flex flex-col md:flex-row justify-items-center items-center py-6 gap-4">
        <div class="flex-1 mb-6 text-black">
          <a
            class="text-blue-700 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            href="/"
          >
            CSJBAD
          </a>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <p
                class="text-gray-800"
              >&copy; 2023 <a href="https://jalbrecht.fr" class="text-gray-800 hover:text-blue-700">Jérémy Albrecht</a></p>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline hover:underline text-gray-800 hover:text-blue-700"
              >Contact</a
              >
            </li>
          </ul>
        </div>
        <div class="flex-1 justify-self-center">
            <img src="../../assets/imgs/logo-moselle.png" class="m-auto h-auto max-w-full" alt="Logo du département de la Moselle"/>
          </div>
        <div class="flex-1 justify-self-center">
          <img src="../../assets/imgs/jo-moselle.png" class="m-auto h-auto max-w-full" alt="Logo du département de la Moselle"/>
        </div>
          <div class="flex-1 justify-self-center">
            <img src="../../assets/imgs/logo-augny.png" class="m-auto h-auto max-w-full" alt="Logo de la ville d'Augny"/>
          </div>
          <div class="flex-1 justify-self-center">
            <img src="../../assets/imgs/logo-ffbad.jpeg" class="m-auto h-auto max-w-full" alt="Logo de la fédération française de badminton"/>
          </div>
          <div class="flex-1 justify-self-center">
            <img src="../../assets/imgs/logo-ministere.png" class="m-auto h-auto max-w-full" alt="Logo du ministère des sports"/>
          </div>
      </div>

    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "layout-footer",
});
</script>
