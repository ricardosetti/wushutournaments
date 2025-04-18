<template>
    <nav class="bg-wushu-white text-wushu-black p-4 flex justify-between items-center shadow-md">
      <div class="flex items-center">
        <img src="/Yin_yang-txt-horiz-no-shadow.png" alt="Wushu Tournaments Logo" class="h-12" />
        <span class="ml-4 text-xl font-bold tracking-wide"></span>
      </div>
      <div class="space-x-6">
        <router-link to="/" class="text-wushu-dark-gray hover:text-wushu-black transition">Home</router-link>
        <router-link to="/about" class="text-wushu-dark-gray hover:text-wushu-black transition">About</router-link>
        <router-link to="/products" class="text-wushu-dark-gray hover:text-wushu-black transition">Products</router-link>
        <router-link to="/events" class="text-wushu-dark-gray hover:text-wushu-black transition">Events</router-link>
        <router-link to="/contact" class="text-wushu-dark-gray hover:text-wushu-black transition">Contact</router-link>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Header',
  };
  </script>