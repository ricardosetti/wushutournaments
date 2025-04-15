<template>
    <div>
      <Header />
      <section
        class="hero min-h-screen bg-cover bg-center flex items-center justify-center relative"
        :style="{ backgroundImage: 'url(/hero-bg.png)' }"
      >
        <!-- Subtle concentric lines background overlay -->
        <div class="absolute inset-0 bg-wushu-white bg-opacity-80 bg-[url('/concentric-lines.png')] bg-repeat opacity-30"></div>
        
        <div class="relative text-center text-wushu-black p-8 rounded-lg">
          <img src="/logo.png" alt="Wushu Tournaments Logo" class="mx-auto h-32 mb-4" />
          <h1 class="text-5xl font-bold mb-4 tracking-tight">Precision Judging for Martial Arts Excellence</h1>
          <p class="text-xl mb-6 text-wushu-dark-gray">
            Automating Wushu Tournaments with Real-Time Scoring and Analytics
          </p>
          <router-link
            to="/products"
            class="bg-wushu-black text-wushu-white px-6 py-3 rounded-none font-semibold hover:bg-wushu-dark-gray transition"
          >
            Discover Our System
          </router-link>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue';
  
  export default {
    name: 'Home',
    components: {
      Header,
    },
  };
  </script>