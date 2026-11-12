<template>
  <div
    :class="{
      'relative w-full overflow-hidden': true,
      'rounded-t-3xl md:rounded-tr-none': !roundAll && !flat,
      'rounded-3xl': roundAll && !flat
    }"
  >
    <!-- Carousel Images: every photo sits in the same 4:3 frame, whatever its own format -->
    <div
      :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      class="flex motion-safe:transition-transform motion-safe:duration-500 ease-out"
    >
      <div
        v-for="(image, index) in images"
        :key="index"
        :aria-hidden="index !== currentSlide"
        class="relative flex-shrink-0 w-full aspect-[4/3] bg-[#202043] overflow-hidden"
      >
        <!-- Blurred copy fills the frame so portrait / square photos never leave empty bars -->
        <img
          :loading="index === 0 ? 'eager' : 'lazy'"
          :src="image.url"
          alt=""
          aria-hidden="true"
          class="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-60"
        />
        <!-- The real photo, shown whole and never distorted -->
        <img
          :alt="image.alternativeText || `Photo de l'équipe ${index + 1} sur ${images.length}`"
          :loading="index === 0 ? 'eager' : 'lazy'"
          :src="image.url"
          class="relative w-full h-full object-contain"
        />
      </div>
    </div>

    <!-- Left Arrow -->
    <button
      v-if="images.length > 1"
      aria-label="Photo précédente"
      class="absolute top-1/2 left-3 transform -translate-y-1/2 p-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/70"
      @click="prevSlide"
    >
      <svg
        class="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          aria-hidden="true"
          d="M15 19l-7-7 7-7"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
      </svg>
    </button>

    <!-- Right Arrow -->
    <button
      v-if="images.length > 1"
      aria-label="Photo suivante"
      class="absolute top-1/2 right-3 transform -translate-y-1/2 p-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/70"
      @click="nextSlide"
    >
      <svg
        class="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 5l7 7-7 7"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
    roundAll: {
      type: Boolean,
      required: false,
      default: false,
    },
    flat: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      currentSlide: 0,
    };
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.images.length;
    },
    prevSlide() {
      this.currentSlide =
        (this.currentSlide - 1 + this.images.length) % this.images.length;
    },
    goToSlide(index) {
      this.currentSlide = index;
    },
  },
};
</script>

