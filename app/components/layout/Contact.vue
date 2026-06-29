<template>
  <div id="contact" style="scroll-margin-top: 40vh;"></div>
  <section class="gradient py-16">
    <div class="container mx-auto text-center px-4">
      <h2 class="text-2xl font-light text-white tracking-widest uppercase mb-10">
        Nous contacter
      </h2>
      <div class="flex flex-wrap justify-center gap-4">
        <a v-for="contact in data?.data?.contacts" :href="contact.action"
           class="inline-block border border-white text-white font-medium rounded-full py-3 px-8 hover:bg-white hover:text-gray-800 transition-all duration-200"
        >
          {{ contact.title }}
        </a>
      </div>
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
