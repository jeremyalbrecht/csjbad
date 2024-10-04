<template>
  <div class="relative max-h-[70vh]">
    <!-- Carousel Images -->
    <div class="overflow-hidden">
      <div
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        class="flex max-h-full max-w-full min-w-full transition-transform duration-500 ease-in-out "
      >
        <div
          v-for="(image, index) in images"
          :key="index"
          class="flex-shrink-0 h-auto min-w-full max-h-full max-w-full"
        >
          <img
            :src="image.attributes.url"
            alt="carousel-image"
            :class="{
              'max-h-full min-w-full max-w-full aspect-[4/3]': true,
              'rounded-t-3xl md:rounded-tr-none': !roundAll,
              'rounded-3xl': roundAll
            }"
          />
        </div>
      </div>
    </div>

    <!-- Left Arrow -->
    <button
      v-if="images.length > 1"
      class="absolute top-1/2 left-3 transform -translate-y-1/2 p-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 focus:outline-none"
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
      class="absolute top-1/2 right-3 transform -translate-y-1/2 p-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 focus:outline-none"
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

<style scoped>
.carousel-img {
  width: 100%;
  height: 16rem;
  object-fit: cover;
}
</style>
