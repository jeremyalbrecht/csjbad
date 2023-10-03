<template>
  <div class="leading-normal tracking-normal text-white gradient-hero w-full bg-top bg-contain">
    <LayoutNav/>

    <section class="bg-white border-b py-8 pt-28">
      <div class="container mx-auto m-8">
        <h2
          data-aos="fade-up"
          class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
        >
          Vie du club
        </h2>
        <div data-aos="fade-up-right" class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <template v-for="(event, index) in eventsData.events" :key="event">
            <div
              :class="((((index)) % 4) >= 2 || index == 0 ? 'md:col-span-2 ' : '') + 'flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row'">
              <img v-if="event.image.data"
                   :alt="event.image.data.attributes.alternativeText"
                   :src="event.image.data.attributes.url"
                   class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-64 md:rounded-none md:rounded-l-lg">
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{{ event.title }}</h5>
                <div class="mb-3 font-normal text-gray-700" v-html="$md(event.content)"></div>
              </div>
            </div>
            <a v-if="index % 8 == 0" href="https://www.facebook.com/augnybadminton/" target="_blank">
              <div
                class="flex flex-col items-center bg-white border gradient rounded-lg shadow md:flex-row md:max-w-xl border-gray-700 ">
                <img alt=""
                     class="object-cover w-full hidden md:block h-96 md:h-auto md:w-64 rounded-full" src="../assets/imgs/fb-profile.jpeg">
                <div class="flex flex-col justify-between p-4 leading-normal">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Retrouvez nos événements sur
                    Facebook</h5>
                  <p class="mb-3 font-normal text-gray-400">Nous publions régulièrement sur Facebook, venez nous suivre
                    !</p>
                </div>
              </div>
            </a>
          </template>
        </div>
      </div>
    </section>
    <LayoutContact/>
    <LayoutFooter/>
  </div>
</template>


<script lang="ts" setup>
import {eventsQuery} from "~/graphql/query"
import {useRuntimeConfig} from "nuxt/app";

const config = useRuntimeConfig();
const {$md} = useNuxtApp()

const {data, error} = await useFetch(config.public.BACKEND_API_URL, {
  body: {
    query: eventsQuery,
    variables: {}
  },
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
})

if (error.value) throw createError(error.value)

const eventsData = data.value.data.vieDuClub.data.attributes
</script>
