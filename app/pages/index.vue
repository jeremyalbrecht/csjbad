<template>
  <div class="gradient-hero"></div>
  <div class="leading-normal tracking-normal text-white w-full gradient-hero">
    <LayoutNav/>
    <main>
      <div class="pt-24">
        <div
          class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center"
        >
          <div
            class="flex flex-col w-full pt-40  md:w-2/5 justify-center items-center md:items-start text-center md:text-left"
          >
            <p class="uppercase tracking-loose w-full font-semibold" v-html="homePageData.hero_small_title"></p>
            <h1 class="my-4 text-5xl font-bold leading-tight font-" v-html="homePageData.hero_big_title">
            </h1>
            <p class="leading-normal text-2xl mb-8 font-extralight">
              {{ homePageData.hero_description }}
            </p>
            <a v-if="homePageData.hero_button" :href="homePageData.hero_action"
               class="focus:ring-4 focus:ring-blue-800 hover:underline inline-flex items-center gradient-grey text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg transform transition hover:scale-105 duration-300 ease-in-out"
               target="_blank"
            >
              {{ homePageData.hero_button }}
              <svg class="h-5 w-5" fill="#000000" version="1.1" viewBox="-2.5 0 18 18"
                   xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"><title>tap_click_force_touch [#1383]</title>
                  <desc>Created with Sketch.</desc>
                  <defs></defs>
                  <g id="Page-1" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                    <g id="Dribbble-Light-Preview" fill="#000000" transform="translate(-343.000000, -760.000000)">
                      <g id="icons" transform="translate(56.000000, 160.000000)">
                        <path
                          id="tap_click_force_touch-[#1383]"
                          d="M298.479989,610.79211 L293.68268,610.399562 L293.674903,605.424658 C293.674903,605.076493 293.34938,604.438356 292.559457,604.438356 C291.946183,604.438356 291.44401,604.880219 291.44401,605.424658 L291.44401,613.803288 L290.518545,612.627616 C290.126361,612.132493 289.328661,612.070356 288.846486,612.498411 C288.472078,612.831781 288.419861,613.355507 288.722054,613.742137 L291.120709,617.697205 C291.328466,617.964493 291.670655,618 292.036175,618 L297.407872,618 C298.467768,618 299.379902,617.459507 299.587659,616.538301 L299.956512,612.988603 C300.17649,612.013151 299.543219,611.10674 298.479989,610.79211 M288.111003,607.39726 C287.497729,607.39726 287,606.956384 287,606.410959 L287,605.178082 C287,598.273973 298.110026,598.273973 298.110026,605.178082 L298.110026,606.410959 C298.110026,606.956384 297.612296,607.39726 296.999023,607.39726 C296.38575,607.39726 295.888021,606.956384 295.888021,606.410959 L295.888021,605.178082 C295.888021,601.232877 289.222005,601.232877 289.222005,605.178082 L289.222005,606.410959 C289.222005,606.956384 288.724276,607.39726 288.111003,607.39726"></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="relative">
        <svg
          version="1.1"
          viewBox="0 0 1428 174"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
            <g
              fill="#FFFFFF"
              fill-rule="nonzero"
              transform="translate(-2.000000, 44.000000)"
            >
              <path
                d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                opacity="0.100000001"
              ></path>
              <path
                d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                opacity="0.100000001"
              ></path>
              <path
                id="Path-4"
                d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                opacity="0.200000003"
              ></path>
            </g>
            <g
              fill="#FFFFFF"
              fill-rule="nonzero"
              transform="translate(-4.000000, 76.000000)"
            >
              <path
                d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"
              ></path>
            </g>
          </g>
        </svg>
      </div>
      <section id="about" class="bg-white py-8">
        <div class="container mx-auto">
          <div v-for="(article, index) in homePageData.articles"
               :key="article"
               :class="'flex mb-4 flex-wrap items-center justify-items-center ' + ((index % 2 == 1) ? 'flex-col-reverse sm:flex-row' : '')">
            <div v-if="article.image.length > 0 && index % 2 == 1"
                 :class="(article.showImageOnMobile ? '' : 'hidden sm:block') + ' w-full sm:w-1/3 p-1 sm:pr-10'">
              <img :alt="article.image[0].alternativeText || article.title" :src="article.image[0].url"
                   class="h-auto mx-auto"
                   loading="lazy"/>
            </div>
            <div class="w-full flex flex-col lg:w-2/3 p-1 mb-5 sm:mb-0">
              <h3 class="text-3xl text-gray-800 font-bold leading-none mb-8 text-center lg:text-left">
                {{ article.title }}
              </h3>
              <div class="text-gray-600 mb-8 " v-html="$md(article.content)"></div>
              <div class="flex justify-center">
                <a v-if="article.button_title" :href="article.button_url"
                   :target="article.openNewTab ? '_blank' : '_self'"
                   class="gradient text-white hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:ring-4 focus:ring-blue-500 transform transition hover:scale-105 duration-300 ease-in-out"
                >
                  {{ article.button_title }}
                </a>
              </div>
            </div>
            <div v-if="article.image.length > 0 && index % 2 == 0"
                 :class="(article.showImageOnMobile ? '' : 'hidden sm:block') + ' w-full hidden sm:block sm:w-1/3 p-1'">
              <img :alt="article.image[0].alternativeText || article.title" :src="article.image[0].url"
                   class="h-auto mx-auto"
                   loading="lazy"/>
            </div>
          </div>
        </div>
      </section>
      <section v-if="homePageData.events.length > 0" id="events" class="bg-white py-8">
        <div class="container mx-auto flex flex-wrap pt-4 pb-12">
          <h2
            class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
          >
            Prochains évènements
          </h2>
          <div class="flex flex-nowrap overflow-x-auto">
            <div
              v-for="event in homePageData.events"
              :key="event"
              class="p-6 grow-0 shrink-0 basis-3/4 sm:basis-2/5"
            >
              <div
                class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
              >
                <div class="flex flex-wrap">
                  <p class="w-full text-gray-600 text-xs md:text-sm px-6">
                    {{ dayjs(event.date).format("D MMMM") }}
                  </p>
                  <div class="w-full font-bold text-xl text-gray-800 px-6">
                    {{ event.title }}
                  </div>
                  <div class="text-gray-600 text-base px-6 mb-5" v-html="$md(event.content)">
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      <section id="localisation" class="bg-white py-8">
        <div class="container mx-auto px-4">
          <h2
            class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
          >
            Le gymnase de badminton, à 5 minutes de Metz
          </h2>
          <div class="w-full mb-6">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <p class="text-gray-700 text-center max-w-3xl mx-auto mb-8">
            Le club CSJBAD se trouve au gymnase d'Augny, à seulement 5 minutes de Metz par l'A31. Idéal pour les joueurs
            de
            badminton de Metz, Moulins-lès-Metz, Marly, Montigny-lès-Metz et de toute la métropole messine.
          </p>
          <div class="flex flex-col lg:flex-row gap-6 items-stretch">
            <div class="lg:w-1/3 text-gray-700">
              <address class="not-italic">
                <strong class="block text-gray-900 mb-2">CSJBAD – Augny Badminton</strong>
                Gymnase d'Augny<br>
                Entrée du parc Simon<br>
                3 rue de la Libération<br>
                57685 Augny (Moselle)
              </address>
              <button
                class="mt-4 inline-flex items-center gap-2 gradient text-white font-bold rounded-full py-3 px-6 shadow-lg transform transition hover:scale-105 duration-300 ease-in-out"
                @click="openNavigation"
              >
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                </svg>
                Y aller
              </button>
            </div>
            <div class="lg:w-2/3 w-full">
              <iframe
                class="w-full h-80 rounded-lg shadow"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                src="https://www.openstreetmap.org/export/embed.html?bbox=6.1175%2C49.0568%2C6.1275%2C49.0628&layer=mapnik&marker=49.0598693%2C6.1225417"
                style="border:0"
                title="Carte du gymnase de badminton d'Augny, près de Metz"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" class="bg-white py-8">
        <div class="container mx-auto px-4">
          <h2
            class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
          >
            Questions fréquentes
          </h2>
          <div class="w-full mb-6">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div class="max-w-3xl mx-auto divide-y divide-gray-200">
            <details v-for="(item, i) in faq" :key="i" class="py-4 group">
              <summary
                class="cursor-pointer list-none flex justify-between items-center text-lg font-semibold text-gray-900">
                <span>{{ item.question }}</span>
                <span class="ml-4 text-blue-700 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div class="mt-3 text-gray-700 leading-relaxed prose prose-a:text-blue-700 prose-a:underline max-w-none"
                   v-html="$md(item.answer)"></div>
            </details>
          </div>
        </div>
      </section>
    </main>

    <LayoutContact/>
    <LayoutFooter/>
  </div>
</template>

<script lang="ts" setup>
import {useRuntimeConfig} from "nuxt/app";
import {faqQuery, homePageQuery} from "~/graphql/query";

const config = useRuntimeConfig();
const dayjs = useDayjs()
const {$md} = useNuxtApp()

function openNavigation() {
  const lat = 49.0598693
  const lng = 6.1225417
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
  window.location.href = isIOS
    ? `maps://maps.apple.com/?daddr=${lat},${lng}`
    : `geo:${lat},${lng}?q=${lat},${lng}`
}

const [{data, error}, {data: faqData}] = await Promise.all([
  useFetch(config.public.BACKEND_API_URL, {
    body: {query: homePageQuery, variables: {}},
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
  }),
  useFetch(config.public.BACKEND_API_URL, {
    body: {query: faqQuery, variables: {}},
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
  }),
])

if (error.value) throw createError(error.value)

const homePageData = data.value.data.homePage
const faq = faqData.value?.data?.faqs ?? []

const SITE_URL = 'https://www.augny-badminton.fr'

const sportsClubSchema = {
  "@context": "https://schema.org",
  "@type": "SportsClub",
  name: "CSJBAD – Cercle Saint-Jean Badminton d'Augny",
  alternateName: "Augny Badminton",
  url: SITE_URL,
  logo: `${SITE_URL}/_nuxt/logo.f3773237.png`,
  image: "https://augny-badminton-website.s3.fr-par.scw.cloud/og_main_945543309b.png",
  description: "Club de badminton à Augny, à 5 minutes de Metz (Moselle). Affilié à la Fédération Française de Badminton (FFBad). École de badminton labellisée 2 étoiles, équipes en interclubs, créneaux loisir adultes et jeunes.",
  sport: "Badminton",
  areaServed: [
    {"@type": "City", name: "Metz"},
    {"@type": "City", name: "Augny"},
    {"@type": "AdministrativeArea", name: "Moselle"}
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "3 rue de la Libération",
    postalCode: "57685",
    addressLocality: "Augny",
    addressRegion: "Moselle",
    addressCountry: "FR"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 49.0598693,
    longitude: 6.1225417
  },
  hasMap: "https://www.openstreetmap.org/?mlat=49.0598693&mlon=6.1225417#map=17/49.0598693/6.1225417",
  email: "csjbad.augny@gmail.com",
  sameAs: [
    "https://www.facebook.com/augnybadminton/",
    "https://m.me/augnybadminton"
  ],
  memberOf: {
    "@type": "Organization",
    name: "Fédération Française de Badminton",
    url: "https://www.ffbad.org/"
  }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map(item => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer.replace(/[#*_[\]()]/g, '')
    }
  }))
}

useHead({
  script: [
    {type: 'application/ld+json', innerHTML: JSON.stringify(sportsClubSchema)},
    {type: 'application/ld+json', innerHTML: JSON.stringify(faqSchema)}
  ]
})
</script>
