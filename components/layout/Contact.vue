<template>

  <section
    id="contact"
    data-aos="zoom-in-up"
    class="container mx-auto text-center py-6 mb-12"
  >
    <h2
      class="w-full my-2 text-5xl font-bold leading-tight text-center text-white"
    >
      Nous contacter ?
    </h2>
    <div class="w-full mb-4 flex justify-around">
      <a v-for="contact in data.data.contacts.data" :href="contact.attributes.action"
        class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
      >
        {{ contact.attributes.title }}
      </a>
    </div>

  </section>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {contactQuery} from "~/graphql/query";

export default defineComponent({
  name: "layout-contact",
  setup() {
    const config = useRuntimeConfig();
    const {data, error} = useFetch(config.public.BACKEND_API_URL, {
      body: {
        query: contactQuery,
        variables: {}
      },
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
    })

    if (error.value) throw createError(error.value)

    return {config, data, error}
  },

});
</script>
