<template>
  <div v-if="!isConsentGiven"
       class="fixed bottom-5 left-5 right-5 bg-gradient-to-r from-blue-500 to-blue-700 text-white p-5 rounded-lg flex flex-col md:flex-row justify-between items-center shadow-lg space-y-3 md:space-y-0 md:space-x-3">
    <p class="flex-1 text-center md:text-left">
      🍪 Nous utilisons des cookies pour améliorer votre expérience sur notre site et analyser son utilisation grâce à
      Microsoft Clarity. Ces données anonymes nous aident à mieux comprendre vos besoins et à optimiser le site web.
    </p>
    <div class="flex flex-col md:flex-row gap-3">
      <button class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition transform hover:scale-105"
              @click="acceptCookies">
        Accepter et continuer
      </button>
      <button class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition" @click="declineCookies">
        Refuser et fermer
      </button>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";

const isConsentGiven = ref(false);

onMounted(() => {
  const consent = localStorage.getItem("cookie-consent");
  isConsentGiven.value = consent === "accepted";
});

const acceptCookies = () => {
  localStorage.setItem("cookie-consent", "accepted");
  isConsentGiven.value = true;
  window.clarity('consent');
};

const declineCookies = () => {
  localStorage.setItem("cookie-consent", "declined");
  isConsentGiven.value = true;
};
</script>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 20px;
  left: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.actions {
  display: flex;
  gap: 10px;
}

.accept-button {
  background: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.decline-button {
  background: #f44336;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
