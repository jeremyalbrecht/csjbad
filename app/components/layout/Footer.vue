<template>
  <footer class="bg-white">
    <div class="container mx-auto px-8">
      <div class="w-full flex flex-col md:flex-row justify-items-center items-stretch md:items-center py-6 gap-4">
        <div class="flex-1 mb-6 text-black">
          <a
            class="text-blue-700 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            href="/"
          >
            CSJBAD
          </a>
          <address class="not-italic text-sm text-gray-800 mt-3 leading-relaxed">
            <div class="font-semibold">Cercle Saint-Jean Badminton d'Augny</div>
            <div>Gymnase d'Augny – entrée du parc Simon</div>
            <div>3 rue de la Libération, 57685 Augny</div>
            <div>Moselle, à 5 min de Metz</div>
          </address>
          <ul class="list-reset mt-4 mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <p
                class="text-gray-800"
              >&copy; {{ new Date().getFullYear() }} <a class="text-gray-800 hover:text-blue-700"
                                                        href="https://jalbrecht.fr">Jérémy Albrecht</a>
              </p>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                class="no-underline hover:underline text-gray-800 hover:text-blue-700"
                href="#contact"
              >Contact</a
              >
            </li>
          </ul>
        </div>
        <div v-for="sponsor in data?.data?.sponsors" class="flex-1 justify-self-center">
          <img v-if="sponsor.logo"
               :alt="sponsor.logo.alternativeText || 'Logo partenaire du club'"
               :src="sponsor.logo.url"
               class="mx-auto h-24 "/>
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
