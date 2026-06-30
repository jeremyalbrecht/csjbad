<template>
  <div>
    <NuxtPage/>
    <CookieConsent></CookieConsent>
  </div>
</template>
<script lang="ts" setup>
import CookieConsent from '~/components/CookieConsent.vue';

const SITE_URL = 'https://www.augny-badminton.fr'
const route = useRoute()
const canonicalHref = computed(() => `${SITE_URL}${route.path}`)

useHead({
  htmlAttrs: {lang: 'fr'},
  link: [
    {rel: 'canonical', href: canonicalHref}
  ],
});

useSeoMeta({
  title: 'Badminton à Metz – Club CSJBAD Augny | Loisir & compétition (FFBad)',
  ogTitle: 'Badminton à Metz – Club CSJBAD Augny | Loisir & compétition (FFBad)',
  description: 'Club de badminton à Augny, à 5 minutes de Metz (Moselle). École de badminton labellisée FFBad, équipes en interclubs, créneaux loisir adultes et jeunes.',
  ogDescription: 'Club de badminton à Augny, à 5 minutes de Metz (Moselle). École de badminton labellisée FFBad, équipes en interclubs, créneaux loisir adultes et jeunes.',
  ogImage: 'https://augny-badminton-website.s3.fr-par.scw.cloud/og_main_945543309b.png',
  ogImageAlt: 'Logo et photo du gymnase de l\'Augny Badminton',
  ogType: 'website',
  ogUrl: canonicalHref,
  ogLocale: 'fr_FR',
  twitterCard: 'summary_large_image',
})
</script>
