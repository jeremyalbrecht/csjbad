<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
    <CookieConsent></CookieConsent>
  </div>
</template>
<script lang="ts" setup>
import CookieConsent from '~/components/CookieConsent.vue';

useHead({
  htmlAttrs: {lang: 'fr'},
  title: 'CSJBAD Augny Badminton - Club et école de badminton à côté de Metz licenciés FFBad',
  meta: [
    {
      name: 'description',
      content: 'Découvrez le club de badminton d\'Augny près de Metz. Adhérez à notre club affilié à la FFBad et vivez la passion du badminton avec nous!'
    },
  ],
});

useSeoMeta({
  title: 'Augny Badminton - Club et école de badminton licenciés FFBad',
  ogTitle: 'Augny Badminton - Club et école de badminton licenciés FFBad',
  description: 'Découvrez le club de badminton d\'Augny près de Metz. Adhérez à notre club affilié à la FFBad et vivez la passion du badminton avec nous !',
  ogDescription: 'Découvrez le club de badminton d\'Augny près de Metz. Adhérez à notre club affilié à la FFBad et vivez la passion du badminton avec nous !',
  ogImage: 'https://augny-badminton.s3.gra.io.cloud.ovh.net/og_main_b19ca8cc60.png',
  ogLocale: 'fr_FR',
  //twitterCard: 'summary_large_image',
})
</script>
