<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
useHead({
  htmlAttrs: {lang: 'fr'},
  title: 'CSJBAD Augny Badminton - Club et école de badminton à côté de Metz licencié FFBad',
  meta: [
    {
      name: 'description',
      content: 'Découvrez le club de badminton d\'Augny près de Metz. Adhérez à notre club affilié à la FFBad et vivez la passion du badminton avec nous!'
    },
  ],
});

useSeoMeta({
  title: 'Augny Badminton - Club et école de badminton licencié FFBad',
  ogTitle: 'Augny Badminton - Club et école de badminton licencié FFBad',
  description: 'Découvrez le club de badminton d\'Augny près de Metz. Adhérez à notre club affilié à la FFBad et vivez la passion du badminton avec nous !',
  ogDescription: 'Découvrez le club de badminton d\'Augny près de Metz. Adhérez à notre club affilié à la FFBad et vivez la passion du badminton avec nous !',
  //ogImage: 'https://example.com/image.png',
  ogLocale: 'fr_FR',
  //twitterCard: 'summary_large_image',
})
</script>
