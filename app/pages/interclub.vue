<template>
  <div class="leading-normal tracking-normal text-white gradient-hero w-full bg-top bg-contain">
    <LayoutNav/>
    <main>
      <section class="bg-white border-b pb-8 pt-[120px]">

        <!-- Page header -->
        <div class="container mx-auto px-4 sm:px-8 mb-4">
          <div class="text-center">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">Interclubs</h2>
            <p class="text-gray-500 mt-2 text-base">Suivez les équipes du CSJBAD en compétition</p>
            <div class="h-1 mx-auto gradient w-24 mt-4 rounded-full opacity-40"></div>
          </div>
        </div>

        <!-- Season selector: full-width sticky strip, outside container -->
        <div v-if="seasons.data.seasons.length > 0"
             class="sticky top-16 lg:top-20 z-20 bg-white border-b border-gray-100 shadow-sm mb-6">

          <!-- Mobile: native select -->
          <div class="md:hidden px-4 py-3">
            <select
              :value="currentSeason"
              class="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer appearance-none"
              @change="currentSeason = ($event.target as HTMLSelectElement).value"
            >
              <option v-for="season in seasons.data.seasons" :key="season.name" :value="season.name">
                Saison {{ season.name }}
              </option>
            </select>
          </div>

          <!-- Desktop: pill tabs -->
          <div class="hidden md:flex justify-center gap-2 px-8 py-3">
            <button
              v-for="season in seasons.data.seasons"
              :key="season.name"
              :class="[
                'px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200',
                currentSeason === season.name
                  ? 'gradient text-white border-transparent shadow-md'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600'
              ]"
              @click="selectSeason(season)"
            >
              Saison {{ season.name }}
            </button>
          </div>

        </div>

        <div class="container mx-auto px-4 sm:px-8">

          <!-- Teams grid -->
          <div v-if="filteredTeams.length > 0" class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <template v-for="team in filteredTeams" :key="team.ranking">

              <!-- Major team with leaderboard: full width -->
              <div
                v-if="team.major && team.leaderboard"
                class="md:col-span-4 rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden"
              >
                <!-- Division header -->
                <div :class="['px-6 py-3 flex items-center gap-4', team.color === 'blue' ? 'gradient' : 'bg-gray-500']">
                  <span class="text-white font-bold text-lg uppercase tracking-widest">{{ team.ranking }}</span>
                  <span class="text-white/50 text-xs uppercase tracking-wider font-medium ml-auto">Interclub</span>
                </div>

                <div class="md:grid md:grid-cols-2">
                  <!-- Image / carousel side -->
                  <div class="min-h-[280px] flex">
                    <Carousel v-if="team.images.length > 0" :flat="true" :images="team.images"/>
                    <div v-else
                         :class="['flex-1 flex items-center justify-center min-h-[280px]', team.color === 'blue' ? 'gradient' : 'gradient-grey']">
                      <img alt="Logo d'Augny badminton" class="h-24" src="../assets/imgs/logo.png"
                           style="filter: brightness(0) invert(1);">
                    </div>
                  </div>

                  <!-- Leaderboard side -->
                  <div class="flex flex-col border-l border-gray-100">
                    <div class="overflow-y-auto max-h-[360px]">
                      <table class="w-full text-sm text-left">
                        <thead class="text-xs text-gray-400 uppercase bg-gray-50 border-b border-gray-100 sticky top-0">
                        <tr>
                          <th class="px-4 py-3 w-12 text-center">Pos.</th>
                          <th class="py-3 pl-2">Club</th>
                          <th class="px-3 py-3 text-center w-10">V</th>
                          <th class="px-3 py-3 text-center w-10">D</th>
                          <th class="px-3 py-3 text-center w-10">Pts</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr
                          v-for="(row, index) in team.leaderboard.rows"
                          :key="index"
                          :class="[
                              'border-b transition-colors',
                              row.club.includes('Cercle St Jean')
                                ? 'gradient text-white font-semibold'
                                : index % 2 === 0
                                  ? 'bg-white hover:bg-gray-50 text-gray-700'
                                  : 'bg-gray-50/60 hover:bg-gray-100 text-gray-700'
                            ]"
                        >
                          <td class="px-4 py-2.5 text-center">
                              <span
                                :class="[
                                  'inline-flex items-center justify-center w-6 h-6 rounded text-xs font-bold',
                                  row.club.includes('Cercle St Jean') ? 'bg-white/20 text-white' :
                                  index === 0 ? 'bg-yellow-100 text-yellow-700' :
                                  index === 1 ? 'bg-gray-100 text-gray-500' :
                                  index === 2 ? 'bg-amber-100 text-amber-700' :
                                  'text-gray-400'
                                ]"
                              >{{ index + 1 }}</span>
                          </td>
                          <td class="py-2.5 px-2">
                            <img v-if="row.club.includes('Cercle St Jean')" class="h-7" src="../assets/imgs/logo.png"
                                 style="filter: brightness(0) invert(1);">
                            <span v-else class="font-medium">{{ row.club }}</span>
                          </td>
                          <td class="px-3 py-2.5 text-center">{{ row.won }}</td>
                          <td class="px-3 py-2.5 text-center">{{ row.lost }}</td>
                          <td class="px-3 py-2.5 text-center font-bold">{{ row.total }}</td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="p-4 border-t border-gray-100 mt-auto">
                      <a
                        :href="team.leaderboard.competition_id"
                        class="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:underline font-medium"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Classement complet sur le site officiel des IC
                        <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="2"/>
                        </svg>
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              <!-- Major team without leaderboard: half width -->
              <div
                v-else-if="team.major"
                class="md:col-span-2 rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden"
              >
                <!-- Division header -->
                <div :class="['px-6 py-3 flex items-center gap-4', team.color === 'blue' ? 'gradient' : 'bg-gray-500']">
                  <span class="text-white font-bold text-lg uppercase tracking-widest">{{ team.ranking }}</span>
                  <span class="text-white/50 text-xs uppercase tracking-wider font-medium ml-auto">Interclub</span>
                </div>
                <div class="min-h-[200px]">
                  <Carousel v-if="team.images.length > 0" :flat="true" :images="team.images"/>
                  <div v-else
                       :class="['min-h-[200px] flex items-center justify-center', team.color === 'blue' ? 'gradient' : 'gradient-grey']">
                    <img alt="Logo d'Augny badminton" class="h-24" src="../assets/imgs/logo.png"
                         style="filter: brightness(0) invert(1);">
                  </div>
                </div>
              </div>

              <!-- Minor team: compact card -->
              <div
                v-else
                class="md:col-span-2 rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden"
              >
                <div :class="['px-6 py-5 flex items-center gap-4', team.color === 'blue' ? 'gradient' : 'bg-gray-500']">
                  <span class="text-white font-bold text-2xl uppercase tracking-widest">{{ team.ranking }}</span>
                  <span class="text-white/50 text-xs uppercase tracking-wider font-medium ml-auto">Interclub</span>
                </div>
              </div>

            </template>
          </div>

          <div v-else class="text-center py-16 text-gray-400">
            <p class="text-lg">Aucune équipe pour cette saison.</p>
          </div>

        </div>
      </section>
    </main>
    <LayoutContact/>
    <LayoutFooter/>
  </div>
</template>


<script lang="ts" setup>
import {eventsQuery, seasonsQuery} from "~/graphql/query"
import {useRuntimeConfig} from "nuxt/app";
import Carousel from "~/components/carousel.vue";

useHead({
  title: 'Interclubs | CSJBAD Augny Badminton',
  meta: [
    {
      name: 'description',
      content: 'Augny Badminton est engagé dans les compétitions régionales avec des équipes d\'Interclub. Découvrez les équipes et leurs classements.'
    },
  ],
});

const config = useRuntimeConfig();

const {data: seasons} = await useFetch(config.public.BACKEND_API_URL, {
  body: {
    query: seasonsQuery,
    variables: {}
  },
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
})

const currentSeason = ref<string | null>(
  (seasons.value.data.seasons.find((s: any) => s.default) ?? seasons.value.data.seasons[0])?.name ?? null
)

function selectSeason(season: any) {
  currentSeason.value = season.name
}

const {data, error} = await useFetch(config.public.BACKEND_API_URL, {
  body: {
    query: eventsQuery,
    variables: {}
  },
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
})

if (error.value) throw createError(error.value)

const eventsData = data.value.data.vieDuClub
const filteredTeams = computed(() => {
  if (!currentSeason.value) return []
  return eventsData.teams.filter(t => t.season?.name === currentSeason.value)
})
</script>
