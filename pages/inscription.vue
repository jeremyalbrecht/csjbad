<template>
  <div class="leading-normal tracking-normal text-white gradient-hero w-full">
    <LayoutNav/>

    <section class="bg-white border-b py-8 pt-24">
      <div class="container mx-auto m-8">
        <div data-aos="fade-up-right" class="flex flex-wrap">
          <div class="w-full p-1">
            <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3 text-center lg:text-left">
              Créneaux
            </h3>
            <div class="grid grid-cols-1 lg:grid-cols-4 lg:gap-4 flex items-start text-black">
              <template v-for="day in dayOfWeek">
                <div v-if="adultesData.creneaux.some(c => c.day == day)" class="mt-4 lg:mt-0">
                  <div>{{ day }}</div>
                  <div v-for="c in adultesData.creneaux.filter(c => c.day == day)"
                       :class="'rounded-lg mb-4 hover p-6 ' + ((c.color == 'Gris') ? 'gradient-grey' : 'gradient')">
                    <h5
                      :class="'mb-2 text-xl font-medium leading-tight ' + ((c.color == 'Gris') ? 'text-neutral-800' : 'text-neutral-50')">
                      {{ c.title }}
                    </h5>
                    <p :class="'mb-4 text-base ' + ((c.color == 'Gris') ? 'text-neutral-600' : 'text-neutral-200')">
                      {{ c.subtitle }}
                    </p>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up-left"
          class="flex flex-wrap flex-col-reverse sm:flex-row">
          <div class="w-full mt-10">
            <div class="align-middle">
              <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3 text-center lg:text-left">
                Tarifs
              </h3>
              <div class="flex justify-center w-full">
                <table class="table text-left text-sm text-black">
                  <thead class="border gradient font-medium text-white">
                  <tr>
                    <th class="px-6 py-4" scope="col">Licence</th>
                    <th class="px-6 py-4 " scope="col">Prix</th>
                    <th class="px-6 py-4 " scope="col"></th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="license in adultesData.license" class="border">
                    <td class="px-6 py-4 font-medium" v-html="$md(license.name)"></td>
                    <td class="px-6 py-4" v-html="$md(license.price)"></td>
                    <td class="px-6 py-4" v-html="license.description"></td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="flex flex-col items-center justify-center italic text-gray-600 mb-5 mt-10"
                   v-html="$md(adultesData.tarifs)"></div>
            </div>
          </div>
        </div>

        <div
          v-if="adultesData.trainers.length > 0"
          class="flex flex-wrap flex-col-reverse sm:flex-row" data-aos="fade-up-left">
          <div class="w-full mt-10">
            <div class="align-middle">
              <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3 text-center lg:text-left">
                <template v-if="adultesData.trainers.length == 1">Notre entraîneur</template>
                <template v-else>Nos entraîneurs</template>
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3 place-items-center place-content-around w-full">
                <div v-for="member in adultesData.trainers"
                     class="sm:basis-1/3 relative w-3/4 bg-white shadow-lg rounded-xl flex items-center gap-6 mt-7 sm:md-0">
                  <img v-if="member.image.data" :alt="member.image.data.attributes.alternativeText"
                       :src="member.image.data.attributes.url"
                       class="absolute -left-6 w-24 h-24 rounded-full shadow-lg">
                  <img v-else :alt="member.name"
                       class="absolute -left-6 w-24 h-24 rounded-full shadow-lg" src="../assets/imgs/fb-profile.jpeg">
                  <div class="flex flex-col py-5 pl-24">
                    <p class="text-slate-900 font-medium"><strong class="gradient-text">{{ member.name }}</strong> <span
                      class="text-xs font-extrabold">{{
                        member.function
                      }}</span></p>
                    <p class="text-slate-700 text-sm">{{ member.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="adultesData.button_title" id="adherer" class="gradient border-b py-8">
      <div class="container mx-auto m-8 flex justify-center">
        <div class="flex flex-wrap" data-aos="fade-up-left">
          <a
            id="navAction" :href="adultesData.button_action"
            class="mx-auto lg:mx-0 hover:underline gradient-grey text-neutral-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            {{ adultesData.button_title }}
          </a>
        </div>
      </div>
    </section>

    <section class="bg-white border-b py-8 ">
      <div class="container mx-auto m-8">
        <div v-if="adultesData.files.data.length > 0" class="w-full p-1 mt-10">
          <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3 text-center lg:text-left">
            Téléchargements
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-3 flex items-start">
            <a v-for="file in adultesData.files.data" :href="file.attributes.url" class="max-w-full">
              <div class="rounded-lg p-3 gradient-grey flex flex-row items-center">
                <img alt="" class="w-24 h-24" src="../assets/imgs/pdf.png">
                <div class="col-span-2">
                  <h5 style="overflow-wrap: break-word;"
                    :class="'mb-2 text-l font-medium leading-tight text-neutral-800'">
                    {{ file.attributes.caption }} ({{ file.attributes.size }} Ko)
                  </h5>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>


    <LayoutContact/>
    <LayoutFooter/>
  </div>
</template>

<script lang="ts" setup>
import {adultesQuery} from "~/graphql/query"
import {useRuntimeConfig} from "nuxt/app";

const config = useRuntimeConfig();
const {$md} = useNuxtApp()
const dayOfWeek = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]

const {data, error} = await useFetch(config.public.BACKEND_API_URL, {
  body: {
    query: adultesQuery,
    variables: {}
  },
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
})

if (error.value) throw createError(error.value)

const adultesData = data.value.data.adulte.data.attributes
</script>
