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
        <div v-for="sponsor in data.data.sponsors.data" class="flex-1 justify-self-center">
          <img v-if="sponsor.attributes.logo.data"
               :src="sponsor.attributes.logo.data.attributes.url" alt="Logo du département de la Moselle"
               class="m-auto h-auto max-w-full"/>
          </div>
      </div>

    </div>
  </footer>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {sponsorQuery} from "~/graphql/query"


export default defineComponent({
  setup() {
    const config = useRuntimeConfig();
    const {data, error} = useFetch(config.public.BACKEND_API_URL, {
      body: {
        query: sponsorQuery,
        variables: {}
      },
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
    })

    if (error.value) throw createError(error.value)

    return {config, data, error}
  },
  name: "layout-footer",
});
</script>
