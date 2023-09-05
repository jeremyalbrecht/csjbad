<template>
  <div class="leading-normal tracking-normal text-white gradient-hero w-full bg-top bg-contain">
    <LayoutNav />

    <section id="about" class="bg-white border-b py-8 pt-24">
      <div class="container mx-auto m-8">
        <div data-aos="fade-up-right" class="flex flex-wrap">
          <div class="w-full p-1">
            <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3 text-center lg:text-left">
              Créneaux
            </h3>
            <div class="grid grid-cols-1 lg:grid-cols-4 lg:gap-4 flex items-start text-black">
              <div class="mt-4 lg:mt-0">
                <div>Lundi</div>
                <div class="rounded-lg gradient hover p-6">
                  <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-50">
                    Jeu Libre
                  </h5>
                  <p class="mb-4 text-base text-neutral-200 dark:text-neutral-200">
                    19h - 22h
                  </p>
                </div>
              </div>

              <div class="mt-4 lg:mt-0">
                <div>Mercredi</div>
                <div
                  class="rounded-lg gradient-grey p-6">
                  <h5
                    class="mb-2 text-xl font-medium leading-tight text-neutral-800">
                    Entraînement Jeune
                  </h5>
                  <p class="mb-4 text-base text-neutral-600">
                    18h30 - 20h
                  </p>
                </div>
                <div
                  class="rounded-lg gradient-grey p-6 mt-4">
                  <h5
                    class="mb-2 text-xl font-medium leading-tight text-neutral-800">
                    Entraînement Adulte
                  </h5>
                  <p class="mb-4 text-base text-neutral-600">
                    20h - 21h30
                  </p>
                </div>
              </div>
              <div class="mt-4 lg:mt-0">
                <div>Jeudi</div>
                <div
                class="rounded-lg gradient hover p-6">
                <h5
                  class="mb-2 text-xl font-medium leading-tight text-neutral-50">
                  Jeu Libre
                </h5>
                <p class="mb-4 text-base text-neutral-200 dark:text-neutral-200">
                  19h - 22h
                </p>
              </div>
              </div>

              <div class="mt-4 lg:mt-0">
                <div>Dimanche</div>
                <div
                  class="rounded-lg gradient hover p-6">
                  <h5
                    class="mb-2 text-xl font-medium leading-tight text-neutral-50">
                    Jeu Libre
                  </h5>
                  <p class="mb-4 text-base text-neutral-200 dark:text-neutral-200">
                    10h - 12h (sur demande)
                  </p>
                </div>
              </div>
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
                  <thead class="border-b gradient font-medium text-white">
                  <tr>
                    <th scope="col" class="px-6 py-4">Licence (du 1er septembre au 31 aout)</th>
                    <th scope="col" class="px-6 py-4">Prix</th>
                    <th scope="col" class="px-6 py-4"></th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr class="border-b dark:border-neutral-500 border">
                    <td class="px-6 py-4 font-medium">Adulte Compétition</td>
                    <td class="px-6 py-4">140€</td>
                    <td class="px-6 py-4">Accès à tout les entraînements + jeu libre + compétitions</td>
                  </tr>
                  <tr class="border-b dark:border-neutral-500 border">
                    <td class="px-6 py-4 font-medium">Adulte Loisirs</td>
                    <td class="px-6 py-4">100€</td>
                    <td class="px-6 py-4">Accès aux créneaux de jeu libre</td>
                  </tr>
                  <tr class="border-b dark:border-neutral-500 border">
                    <td class="px-6 py-4 font-medium">Enfant - École de badminton</td>
                    <td class="px-6 py-4">90€</td>
                    <td class="px-6 py-4">Entraînement jeune</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <p class="text-gray-600 mb-5 mt-5">Les réductions suivantes peuvent s'appliquer dans certains cas:</p>
              <div class="flex justify-center w-full">
                <table class="table-auto text-left text-sm text-black">
                  <tbody>
                  <tr class="border-b dark:border-neutral-500 border">
                    <td class="whitespace-nowrap px-6 py-4">-10€</td>
                    <td class="whitespace-nowrap px-6 py-4">Famille</td>
                  </tr>
                  <tr class="border-b dark:border-neutral-500 border">
                    <td class="whitespace-nowrap px-6 py-4 font-medium">-10€</td>
                    <td class="whitespace-nowrap px-6 py-4">Réinscription</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="adherer" class="gradient border-b py-8">
      <div class="container mx-auto m-8 flex justify-center">
        <div data-aos="fade-up-left" class="flex flex-wrap">
      <a
        id="navAction" href="https://adherer.myffbad.fr/csjbad57"
        class="mx-auto lg:mx-0 hover:underline gradient-grey text-neutral-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
      >
        Adhérer au club sur le site de la FFBad
      </a>
        </div>
      </div>
    </section>
    <LayoutFooter />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IndexPage",
});
</script>
