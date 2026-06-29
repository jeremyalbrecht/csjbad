<template>
  <nav
    :class="[
      'fixed w-full z-50 top-0 transition-all duration-300',
      scrolled || !isHomePage
        ? 'bg-[#202043]/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
        : 'bg-transparent',
    ]"
    aria-label="Navigation principale"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">

        <!-- Logo -->
        <a aria-label="Accueil CSJBAD Augny" class="flex-shrink-0" href="/">
          <img
            alt="Logo Club de Badminton d'Augny"
            class="h-10 lg:h-12 w-auto"
            height="48"
            src="~/assets/imgs/logo.png"
            width="120"
          />
        </a>

        <!-- Desktop links -->
        <ul class="hidden lg:flex items-center gap-1 list-none m-0 p-0">
          <li v-for="link in navLinks" :key="link.href">
            <a
              :class="[
                'relative px-4 py-2 text-sm font-bold uppercase tracking-widest transition-colors duration-200 no-underline group',
                isActive(link.href)
                  ? 'text-[#0080F4]'
                  : 'text-white/90 hover:text-white',
              ]"
              :href="link.href"
            >
              {{ link.label }}
              <span
                :class="[
                  'absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-[#0080F4] transition-all duration-300',
                  isActive(link.href) ? 'w-3/4' : 'w-0 group-hover:w-3/4',
                ]"
              />
            </a>
          </li>
        </ul>

        <!-- Desktop CTA -->
        <a
          class="hidden lg:inline-flex items-center gap-2 px-5 py-2 text-sm font-medium tracking-wide text-white rounded-full border border-white/50 no-underline hover:bg-white hover:text-[#202043] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
          href="#contact"
        >
          Nous contacter
        </a>

        <!-- Mobile hamburger -->
        <button
          :aria-expanded="mobileOpen"
          aria-controls="mobile-menu"
          aria-label="Ouvrir le menu"
          class="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#0080F4] transition-colors duration-200 hover:bg-white/10 cursor-pointer"
          @click="toggleMenu"
        >
          <span class="sr-only">Menu</span>
          <svg
            :class="['h-6 w-6 transition-all duration-300', mobileOpen ? 'rotate-90 opacity-0 absolute' : 'rotate-0 opacity-100']"
            aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
          </svg>
          <svg
            :class="['h-6 w-6 transition-all duration-300', mobileOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0 absolute']"
            aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
          </svg>
        </button>

      </div>
    </div>

    <!-- Mobile drawer -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-3"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-3"
    >
      <div
        v-if="mobileOpen"
        id="mobile-menu"
        class="lg:hidden bg-[#202043]/98 backdrop-blur-md border-t border-white/10"
      >
        <ul class="list-none m-0 px-4 pt-3 pb-6 space-y-1">
          <li v-for="link in navLinks" :key="link.href">
            <a
              :class="[
                'flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase tracking-widest rounded-xl no-underline transition-all duration-200',
                isActive(link.href)
                  ? 'text-[#0080F4] bg-white/10'
                  : 'text-white/90 hover:text-white hover:bg-white/5',
              ]"
              :href="link.href"
              @click="mobileOpen = false"
            >
              <span
                :class="['w-1 h-4 rounded-full transition-all duration-200', isActive(link.href) ? 'bg-[#0080F4]' : 'bg-transparent']"
              />
              {{ link.label }}
            </a>
          </li>
          <li class="pt-3">
            <a
              class="flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide text-white rounded-full border border-white/50 no-underline hover:bg-white hover:text-[#202043] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              href="#contact"
              @click="mobileOpen = false"
            >
              Nous contacter
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </nav>
</template>

<script lang="ts" setup>
import {onMounted, onUnmounted, ref} from 'vue'

const route = useRoute()

const isHomePage = computed(() => route.path === '/' || route.path === '/index')

const navLinks = [
  {label: 'Le Club', href: '/club/'},
  {label: 'Inscription', href: '/inscription/'},
  {label: 'Interclubs', href: '/interclub/'},
  {label: 'Tournois', href: '/doublejeu/'},
  {label: 'Boutique', href: '/shop/'},
]

const mobileOpen = ref(false)
const scrolled = ref(false)

function isActive(href: string) {
  return route.path === href || route.path === href.replace(/\/$/, '')
}

function toggleMenu() {
  mobileOpen.value = !mobileOpen.value
}

function handleScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, {passive: true})
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
a {
  font-weight: 700;
}
</style>
