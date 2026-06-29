<template>
  <div class="leading-normal tracking-normal text-white gradient-hero w-full bg-top bg-contain">
    <LayoutNav/>
    <main>

      <section class="bg-white border-b  pt-28">
        <div class="container mx-auto m-8">
          <h2
            class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
          >
            Boutique
          </h2>
          <div class="w-full mb-4">
            <div
              class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
            ></div>
          </div>
          <div class="text-gray-900 w-full text-center mb-5" v-html="$md(shopData.description)"></div>
          <div class="flex mb-4 flex-wrap items-center justify-around justify-items-center gap-4">
            <div v-for="item in shopData.items"
                 class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
              <img :alt="item.image[0].alternativeText || item.title" :src="item.image[0].url"
                   class="p-8 rounded-t-lg"
                   loading="lazy"/>
              <div class="px-5 pb-5">
                <div class="flex items-center justify-between mt-3">
                  <h5 class="text-xl font-semibold tracking-tight text-gray-900">{{ item.title }}</h5>
                  <div class="text-3xl font-bold text-white gradient rounded-lg px-5 py-2.5 text-center">{{
                      item.price
                    }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <LayoutContact/>
    <LayoutFooter/>
  </div>
</template>

<script lang="ts" setup>
import {shopQuery} from "~/graphql/query"
import {useRuntimeConfig} from "nuxt/app";

useHead({
  title: 'Boutique | CSJBAD Augny Badminton',
  meta: [
    {
      name: 'description',
      content: 'Volants, vestes aux couleurs d\'Augny, maillots officiel: retrouvez le merch officiel du CSJBAD Badminton'
    },
  ],
});

const config = useRuntimeConfig();
const {$md} = useNuxtApp()

const {data, error} = await useFetch(config.public.BACKEND_API_URL, {
  body: {
    query: shopQuery,
    variables: {}
  },
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
})

if (error.value) throw createError(error.value)

const shopData = data.value.data.shop
</script>
