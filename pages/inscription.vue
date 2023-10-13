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
              <div class="flex justify-center w-full ">
                <table class="table text-left text-sm text-black gradient">
                  <thead class="border font-medium text-white">
                  <tr>
                    <th class="px-6 py-4" scope="col">Licence</th>
                    <th class="px-6 py-4 " scope="col">Prix</th>
                    <th class="px-6 py-4 " scope="col"></th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="license in adultesData.license" class="border odd:bg-white even:bg-slate-50">
                    <td class="px-6 py-4 font-medium" v-html="$md(license.name)"></td>
                    <td class="px-6 py-4" v-html="$md(license.price)"></td>
                    <td class="px-6 py-4" v-html="license.description"></td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="flex flex-col md:items-center justify-center italic text-gray-600 mb-5 mt-10 p-5"
                   v-html="$md(adultesData.tarifs)"></div>

            </div>
          </div>
        </div>

        <div
          v-if="adultesData.steps.length"
          class="flex flex-wrap flex-col-reverse sm:flex-row" data-aos="fade-up-left">
          <div class="w-full mt-10">
            <div class="align-middle">
              <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3 text-center lg:text-left">
                Comment s'inscrire au club ?
              </h3>
              <div class="relative border-l border-gray-200 mt-10 mb-10 ml-8 mr-8">
                <div v-for="step in adultesData.steps" class="mb-5 ml-6">
                  <span class="absolute flex items-center justify-center w-10 h-10 gradient rounded-full -left-5  text-gray-800"
                        v-html="step.icon"></span>

                  <div class="mb-4 pt-2 pl-2 text-base font-normal text-gray-500" v-html="$md(step.description)"></div>

                  <a v-if="step.button_action" :href="step.button_action" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg"
                     target="_blank">
                    <svg v-if="step.button_icon == 'download'" aria-hidden="true" class="w-3.5 h-3.5 mr-2.5"
                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
                      <path
                        d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
                    </svg>
                    <svg v-if="step.button_icon == 'link'" class="w-5 h-5 mr-2.5" fill="#000000"
                         viewBox="-2 -2 24.00 24.00" xmlns="http://www.w3.org/2000/svg">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M7.50004 2C6.11933 2 5.00004 3.11929 5.00004 4.5V12.5C5.00004 13.8807 6.11933 15 7.50004 15H15.5C16.8807 15 18 13.8807 18 12.5V4.5C18 3.11929 16.8807 2 15.5 2H7.50004ZM17 4.5V5H10.5C10.2239 5 10 4.77614 10 4.5V3H15.5C16.3285 3 17 3.67157 17 4.5ZM9.00004 4.5C9.00004 5.32843 9.67161 6 10.5 6H17V12.5C17 13.3284 16.3285 14 15.5 14H7.50004C6.67161 14 6.00004 13.3284 6.00004 12.5V4.5C6.00004 3.67157 6.67161 3 7.50004 3H9.00004V4.5Z"
                          fill="#212121"></path>
                        <path
                          d="M12.5002 18C13.7097 18 14.7186 17.1411 14.9502 16H13.9149C13.709 16.5826 13.1534 17 12.5002 17H6.00024C4.34339 17 3.00024 15.6568 3.00024 14V7.49998C3.00024 6.84687 3.41765 6.29125 4.00025 6.08533V5.04999C2.85913 5.28162 2.00024 6.2905 2.00024 7.49998V14C2.00024 16.2091 3.79111 18 6.00024 18H12.5002Z"
                          fill="#212121"></path>
                      </g>
                    </svg>
                    {{ step.button_title }}
                  </a>
                </div>
              </div>

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

useHead({
  title: 'Horaires & Licences | CSJBAD Augny Badminton',
  meta: [
    {
      name: 'description',
      content: 'Comment venir jouer au club de badminton d\'Augny ? Renseignez-vous sur les horaires et les différentes licences de ce club de Badminton affilié FFBad'
    },
  ],
});

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
