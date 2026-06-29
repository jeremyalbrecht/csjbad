<template>
  <div class="leading-normal tracking-normal text-white gradient-hero w-full">
    <LayoutNav/>
    <main>

      <section class="bg-white border-b py-8 pt-24">
        <div class="container mx-auto m-8">
          <div class="flex flex-wrap">
            <div class="w-full p-1">
              <div class="flex flex-col sm:flex-row sm:items-end gap-4 mb-6">
                <h3 class="text-3xl text-gray-800 font-bold leading-none text-center lg:text-left">
                  Créneaux
                </h3>
                <!-- Legend: dual-encoded (color + shape) for CVD users -->
                <div class="flex items-center gap-5 sm:mb-0.5 justify-center lg:justify-start">
                <span class="flex items-center gap-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  <!-- Circle = jeu libre -->
                  <svg aria-hidden="true" class="w-3 h-3 text-blue-600 shrink-0" fill="currentColor"
                       viewBox="0 0 12 12">
                    <circle cx="6" cy="6" r="6"/>
                  </svg>
                  Jeu libre
                </span>
                  <span class="flex items-center gap-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  <!-- Square = entraînement -->
                  <svg aria-hidden="true" class="w-3 h-3 text-slate-400 shrink-0" fill="currentColor"
                       viewBox="0 0 12 12">
                    <rect height="12" rx="2" width="12"/>
                  </svg>
                  Entraînement
                </span>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-black">
                <template v-for="day in dayOfWeek">
                  <div v-if="adultesData.creneaux.some(c => c.day == day)" class="flex flex-col gap-3">
                    <!-- Day label -->
                    <div class="flex items-center gap-2">
                      <div class="h-px flex-1 bg-gray-200"></div>
                      <span class="text-xs font-bold uppercase tracking-widest text-gray-400">{{ day }}</span>
                      <div class="h-px flex-1 bg-gray-200"></div>
                    </div>

                    <!-- Slot cards -->
                    <div
                      v-for="c in adultesData.creneaux.filter(c => c.day == day)"
                      :class="[
                      'rounded-xl bg-white border border-l-4 shadow-sm p-4',
                      c.color === 'Gris'
                        ? 'border-slate-200 border-l-slate-400'
                        : 'border-blue-100 border-l-blue-600'
                    ]"
                    >
                      <!-- Type badge: shape + color, two independent visual channels -->
                      <div class="flex items-center gap-1.5 mb-2">
                        <svg
                          v-if="c.color !== 'Gris'"
                          aria-hidden="true"
                          class="w-2.5 h-2.5 text-blue-600 shrink-0" fill="currentColor" viewBox="0 0 12 12"
                        >
                          <circle cx="6" cy="6" r="6"/>
                        </svg>
                        <svg
                          v-else
                          aria-hidden="true"
                          class="w-2.5 h-2.5 text-slate-400 shrink-0" fill="currentColor" viewBox="0 0 12 12"
                        >
                          <rect height="12" rx="2" width="12"/>
                        </svg>
                        <span
                          :class="[
                          'text-xs font-bold uppercase tracking-wider',
                          c.color === 'Gris' ? 'text-slate-400' : 'text-blue-600'
                        ]"
                        >
                        {{ c.color === 'Gris' ? 'Entraînement' : 'Jeu libre' }}
                      </span>
                      </div>

                      <h5 class="font-bold text-gray-800 text-sm leading-snug">{{ c.title }}</h5>
                      <p class="text-gray-500 text-xs mt-1 leading-relaxed">{{ c.subtitle }}</p>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </div>
          <div
            class="flex flex-wrap flex-col-reverse sm:flex-row">
            <div class="w-full mt-10">
              <h3 class="text-3xl text-gray-800 font-bold leading-none mb-8 text-center lg:text-left">
                Tarifs
              </h3>

              <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                <div
                  v-for="(license, i) in adultesData.license" :key="i"
                  :class="[
                  'relative bg-white rounded-2xl border shadow-sm overflow-hidden transition-shadow duration-300 hover:shadow-md',
                  isReduction(license.price) ? 'border-emerald-100' : 'border-gray-100'
                ]"
                >
                  <!-- Top accent bar: blue for regular, green for reductions -->
                  <div
                    :class="isReduction(license.price)
                    ? 'bg-gradient-to-r from-emerald-500 to-green-400'
                    : 'gradient'"
                    class="h-1.5 w-full"
                  ></div>

                  <div class="p-6">
                    <!-- Name -->
                    <div
                      class="text-gray-800 font-bold text-base leading-snug mb-4 [&_p]:m-0 [&_p]:leading-snug"
                      v-html="$md(license.name)"
                    ></div>

                    <!-- Reduction card -->
                    <template v-if="isReduction(license.price)">
                      <div class="mb-5">
                      <span
                        class="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-0.5 text-xs font-semibold text-emerald-700 uppercase tracking-wide mb-3">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5"
                             viewBox="0 0 24 24">
                          <path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Réduction
                      </span>
                        <div
                          class="text-3xl font-extrabold text-emerald-600 [&_p]:m-0 leading-none"
                          v-html="$md(license.price)"
                        ></div>
                      </div>
                    </template>

                    <!-- Regular price card -->
                    <template v-else>
                      <div class="mb-5">
                        <span class="text-xs text-gray-400 uppercase tracking-widest font-semibold block mb-2">Cotisation</span>
                        <div
                          class="text-3xl font-extrabold text-blue-600 [&_p]:m-0 leading-none"
                          v-html="$md(license.price)"
                        ></div>
                      </div>
                    </template>

                    <!-- Description / conditions -->
                    <div
                      v-if="license.description"
                      :class="[
                      'border-t pt-4 text-sm leading-relaxed',
                      isReduction(license.price) ? 'border-emerald-100 text-emerald-800' : 'border-gray-100 text-gray-500'
                    ]"
                      v-html="license.description"
                    ></div>
                  </div>
                </div>
              </div>

              <div
                v-if="adultesData.tarifs"
                class="mt-6 rounded-xl bg-blue-50 border border-blue-100 p-5 flex gap-3 items-start"
              >
                <svg class="w-5 h-5 text-blue-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2"
                     viewBox="0 0 24 24">
                  <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round"
                        stroke-linejoin="round"/>
                </svg>
                <div
                  class="text-gray-600 text-sm italic [&_p]:m-0 [&_p]:leading-relaxed"
                  v-html="$md(adultesData.tarifs)"
                ></div>
              </div>
            </div>
          </div>

          <div
            v-if="adultesData.steps.length"
            class="flex flex-wrap flex-col-reverse sm:flex-row">
            <div class="w-full mt-10">
              <div class="align-middle">
                <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3 text-center lg:text-left">
                  Comment s'inscrire au club ?
                </h3>
                <div class="relative border-l border-gray-200 mt-10 mb-10 ml-8 mr-8">
                  <div v-for="step in adultesData.steps" class="mb-5 ml-6">
                  <span
                    class="absolute flex items-center justify-center w-10 h-10 gradient rounded-full -left-5  text-gray-800"
                    v-html="step.icon"></span>

                    <div class="mb-4 pt-2 pl-2 text-base font-normal text-gray-500"
                         v-html="$md(step.description)"></div>

                    <a v-if="step.button_action" :href="step.button_action"
                       class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg"
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
            class="flex flex-wrap flex-col-reverse sm:flex-row">
            <div class="w-full mt-10">
              <div class="align-middle">
                <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3 text-center lg:text-left">
                  <template v-if="adultesData.trainers.length == 1">Notre entraîneur</template>
                  <template v-else>Nos entraîneurs</template>
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-3 place-items-center place-content-around w-full">
                  <div v-for="member in adultesData.trainers"
                       class="sm:basis-1/3 relative w-3/4 bg-white shadow-lg rounded-xl flex items-center gap-6 mt-7 sm:md-0">
                    <img v-if="member.image" :alt="member.image.alternativeText"
                         :src="member.image.url"
                         class="absolute -left-6 w-24 h-24 rounded-full shadow-lg">
                    <img v-else :alt="member.name"
                         class="absolute -left-6 w-24 h-24 rounded-full shadow-lg" src="../assets/imgs/fb-profile.jpeg">
                    <div class="flex flex-col py-5 pl-24">
                      <p class="text-slate-900 font-medium"><strong class="gradient-text">{{ member.name }}</strong>
                        <span
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
          <div class="flex flex-wrap">
            <a
              id="navAction" :href="adultesData.button_action"
              class="mx-auto lg:mx-0 hover:underline gradient-grey text-neutral-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >
              {{ adultesData.button_title }}
            </a>
          </div>
        </div>
      </section>

      <section class="bg-white border-b py-8">
        <div class="container mx-auto m-8">
          <div v-if="adultesData.files.length > 0" class="w-full p-1 mt-10">
            <h3 class="text-3xl text-gray-800 font-bold leading-none mb-6 text-center lg:text-left">
              Téléchargements
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <a
                v-for="file in adultesData.files"
                :href="file.url"
                class="group flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm hover:shadow-md hover:border-blue-100 transition-shadow duration-200 cursor-pointer"
                rel="noopener noreferrer"
                target="_blank"
              >
                <!-- Document icon -->
                <div class="shrink-0 w-10 h-10 rounded-lg gradient flex items-center justify-center">
                  <svg aria-hidden="true" class="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="2"
                       viewBox="0 0 24 24">
                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke-linecap="round"
                          stroke-linejoin="round"/>
                  </svg>
                </div>

                <!-- File info -->
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-semibold text-gray-800 leading-snug break-words">{{ file.caption }}</p>
                  <p class="text-xs text-gray-400 mt-0.5">{{ file.size }} Ko · PDF</p>
                </div>

                <!-- Download arrow, appears on hover -->
                <svg aria-hidden="true"
                     class="w-4 h-4 shrink-0 text-gray-300 group-hover:text-blue-500 transition-colors duration-200" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" stroke-linecap="round"
                        stroke-linejoin="round"/>
                </svg>
              </a>
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

function isReduction(price: string): boolean {
  return !!price?.trim().startsWith('-')
}

const {data, error} = await useFetch(config.public.BACKEND_API_URL, {
  body: {
    query: adultesQuery,
    variables: {}
  },
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
})

if (error.value) throw createError(error.value)

const adultesData = data.value.data.adulte
</script>
