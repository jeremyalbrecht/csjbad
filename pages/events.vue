<template>
  <div class="leading-normal tracking-normal text-white gradient-hero w-full bg-top bg-contain">
    <LayoutNav/>
    <section v-if="eventsData.teams.length > 0" class="bg-white border-b py-8 pt-24">
      <div class="container mx-auto m-8">
        <div class="grid grid-cols-12 place-items-center">
          <h2
            class="col-span-12 mb-5 md:md-0 md:col-span-8 md:col-start-3 text-5xl font-bold leading-tight text-center text-gray-800"
            data-aos="fade-up"
          >
            Nos équipes
          </h2>

          <div class="col-span-12 mb-5 block md:hidden" data-aos="fade-up">
            <div
              class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
            ></div>
          </div>

          <div class="col-span-12 md:col-span-2 text-center">
            <button id="dropdownRadioBgHoverButton" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                    data-dropdown-toggle="dropdownRadioBgHover"
                    type="button">
              Saison {{ currentSeason.attributes.name }}
              <svg aria-hidden="true" class="w-2.5 h-2.5 ms-3" fill="none" viewBox="0 0 10 6"
                   xmlns="http://www.w3.org/2000/svg">

                <path d="m1 1 4 4 4-4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="2"/>
              </svg>
            </button>

            <div id="dropdownRadioBgHover"
                 class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-xl ">
              <ul aria-labelledby="dropdownRadioBgHoverButton" class="p-3 space-y-1 text-sm text-gray-700">
                <li v-for="season in seasons.data.seasons.data" v-on:click="currentSeason = season">
                  <div class="flex items-center p-2 rounded hover:bg-gray-100">
                    <input :id="'default-radio-' + season.id" :checked="currentSeason.id == season.id" :value="season"
                           class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2" name="season"
                           type="radio">
                    <label :for="'default-radio-' + season.id"
                           class="w-full ms-2 text-sm font-medium text-gray-900 rounded">{{
                        season.attributes.name
                      }}</label>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="hidden md:block col-span-12 mb-5" data-aos="fade-up">
            <div
              class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
            ></div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 m-6" data-aos="fade-up-right">
          <template v-for="team in filteredTeams">
            <div v-if="team.major && team.leaderboard"
                 class="md:col-span-4 min-h-[30vh] relative rounded-3xl shadow-2xl hover:scale-105 transition duration-500">

              <div class="md:grid md:grid-cols-2 md:col-span-2 min-w-full">

                <Carousel v-if="team.images.data.length > 0" :images="team.images.data"/>
                <div v-else
                     :class="'min-h-full rounded-t-3xl md:rounded-tr-none flex ' + ((team.color == 'blue') ? 'gradient' : 'gradient-grey')">
                  <img alt="Logo d'Augny badminton" class="m-auto h-24 inline-block align-middle "
                       src="../assets/imgs/logo.png" style="filter: brightness(0) invert(1);">
                </div>

                <div v-if="team.leaderboard">
                  <table
                    class="h-96 table-fixed max-w-full w-full overflow-x-auto min-w-full text-xs text-left text-gray-500 gradient md:rounded-tr-3xl">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 md:rounded-tr-3xl">
                    <tr>
                      <th class="px-6 py-3 w-1/12" scope="col">
                        #
                      </th>
                      <th class=" py-3 w-5/12" scope="col">
                        Club
                      </th>
                      <th class="px-2 py-3 w-1/12" scope="col">
                        V
                      </th>
                      <th class="px-2 py-3 w-1/12" scope="col">
                        D
                      </th>
                      <th class="px-2 py-3 w-1/12 md:rounded-tr-3xl" scope="col">
                        P
                      </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(row, index) in team.leaderboard.rows"
                        :class="'border-b' + (row.club.includes('Cercle St Jean') ? ' text-white' : ' bg-gray-50')">
                      <td class="px-6 py-4">
                        {{ index + 1 }}
                      </td>
                      <td v-if="row.club.includes('Cercle St Jean')"
                          class="py-3 px-3">
                        <img class="h-10 mx-auto" src="../assets/imgs/logo.png"
                             style="filter: brightness(0) invert(1);">
                      </td>
                      <th v-else class="py-4 font-medium text-gray-900 whitespace-nowrap truncate ...">
                        {{ row.club }}
                      </th>
                      <td class="px-2 py-4">
                        {{ row.won }}
                      </td>
                      <td class="px-2 py-4">
                        {{ row.lost }}
                      </td>
                      <td class="px-2 py-4">
                        {{ row.total }}
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <h1
                class="text-4xl uppercase text-white bg-blue-700 bg-opacity-75 rounded-full p-5 absolute -left-4 -top-4 ">
                {{ team.ranking }}
              </h1>
              <div v-if="team.leaderboard" class="p-2 text-right">
                <a :href="team.leaderboard.competition_id"
                   class="mr-0 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blue-700 hover:underline focus:ring-4 focus:outline-none focus:ring-blue-300">
                  Classement complet sur le site officiel des IC
                  <svg aria-hidden="true" class="w-3.5 h-3.5 ml-2" fill="none" viewBox="0 0 14 10"
                       xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="2"/>
                  </svg>
                </a>
              </div>
            </div>
            <div v-else-if="team.major"
                 :class="'md:col-span-2 min-h-[30vh] relative rounded-3xl shadow-xl hover:scale-105 transition duration-500 ' + ((team.color == 'blue') ? 'gradient' : 'gradient-grey')">
              <div class="md:col-span-2 max-w-full h-full">

                <Carousel v-if="team.images.data.length > 0" :images="team.images.data" :round-all="true"/>
                <div v-else
                     :class="'min-h-full rounded-t-3xl md:rounded-tr-none flex ' + ((team.color == 'blue') ? 'gradient' : 'gradient-grey')">
                  <img alt="Logo d'Augny badminton" class="m-auto h-24 inline-block align-middle "
                       src="../assets/imgs/logo.png" style="filter: brightness(0) invert(1);">
                </div>

              </div>
              <h1
                class="text-4xl uppercase text-white bg-blue-700 bg-opacity-75 rounded-full p-5 absolute -left-4 -top-4 ">
                {{ team.ranking }}
              </h1>
            </div>
            <div v-else
                 :class="'md:col-span-2 flex justify-center items-center min-h-[10vh] rounded-3xl shadow-xl '+ ((team.color == 'blue') ? 'gradient' : 'gradient-gray') + ' hover:scale-105 transition duration-500 '">
              <h1 :class="'text-4xl ' + ((team.color == 'blue') ? 'text-white' : 'text-gray-800') ">
                {{ team.ranking }}
              </h1>
            </div>
          </template>
        </div>
      </div>
    </section>

    <section class="bg-white border-b py-8">
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
                <img alt="Photo de profile Facebook du club de Badminton d'Augny"
                     class="object-cover w-full hidden md:block h-96 md:h-auto md:w-64 rounded-full"
                     src="../assets/imgs/fb-profile.jpeg">
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
import {eventsQuery, seasonsQuery} from "~/graphql/query"
import {useRuntimeConfig} from "nuxt/app";
import {onMounted} from 'vue'
import {useFlowbite} from '~/composables/useFlowbite';
import Carousel from "~/components/carousel.vue";

onMounted(() => {
  useFlowbite(() => {
    initFlowbite();
    initDropdowns();

  })
})

useHead({
  title: 'Vie du Club | CSJBAD Augny Badminton',
  meta: [
    {
      name: 'description',
      content: 'Augny Badminton est engagé dans les compétitions régionales avec des équipes d\'Interclub. Découvrez les équipes et les différents évènements qui animent le club'
    },
  ],
});

const config = useRuntimeConfig();
const {$md} = useNuxtApp()

const {data: seasons} = await useFetch(config.public.BACKEND_API_URL, {
  body: {
    query: seasonsQuery,
    variables: {}
  },
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
})

const currentSeason = ref(seasons.value.data.seasons.data.filter((s) => s.attributes.default)[0]);
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
const filteredTeams = computed(() => {
  return eventsData.teams.filter(t =>
    t.season.data.id == currentSeason.value.id
  )
})

</script>
