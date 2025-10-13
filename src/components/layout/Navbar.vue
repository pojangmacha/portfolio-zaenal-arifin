<template>
  <header class="z-10 border-t-2 border-t-gray-300 bg-green-100 text-gray-800 dark:border-t-green-600 dark:bg-blue-900 dark:text-white shadow-md">
    <div class="flex justify-between items-center p-4 lg:px-12 relative z-20">
      <div class="text-3xl font-bold dark:text-white">
        <img 
          src="@/assets/images/zaelogo.png" 
          alt="ZA Logo" 
          class="w-12 h-12 object-contain inline-block"
        />
      </div>

      <div class="md:hidden z-30">
        <button class="focus:outline-none" @click="isMenuOpen = !isMenuOpen">
          <span
            v-if="isMenuOpen"
            class="text-4xl text-primary dark:text-white"
          >
            <Icon icon="material-symbols:close" />
          </span>
          <span
            v-else
            class="text-4xl text-primary dark:text-white"
          >
            <Icon icon="material-symbols:menu" />
          </span>
        </button>
      </div>

      <nav
        :class="[
          // MOBILE: Layar penuh, z-index tinggi, background, flex vertikal
          'fixed inset-0 z-20 flex flex-col items-center justify-center bg-primary transition-transform duration-300 ease-in-out',
          
          // DESKTOP: Relative, tanpa background, flex horizontal, muncul di kanan
          'md:relative md:bg-transparent md:flex md:flex-row md:justify-end md:static',
          
          // KONDISI VISIBILITAS: hidden di desktop diatasi oleh md:flex
          isMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0', // Menggunakan transform untuk animasi
        ]"
      >
        <ul
          class="flex flex-col items-center space-y-6 md:flex-row md:space-x-8 md:space-y-0"
        >
          <li v-for="item in Menu" :key="item.name">
            <a
                :href="item.href"
                class="transition ease-linear md:text-lg lg:text-xl font-bold md:text-primary hover:text-secondary dark:text-white dark:hover:text-secondary"
                @click="scrollToSection(item.href)"
            >
                {{ item.name }}
            </a>
          </li>
        </ul>
       <button @click="toggleDarkMode" class="text-white ml-20 z-10 hidden md:block">
        <!-- Show moon icon if dark mode is off, otherwise show sun icon -->
        <Icon v-if="! isDarkMode" icon="line-md:moon-filled" class="text-5x1 ☐ text-primary" />
        <Icon v-else icon="line-md:sunny-outline" class="text-5x1 ☐ text-primary" />
      </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

// Pastikan Anda mengimpor Iconify di sini jika tidak di-import secara global
// import { Icon } from '@iconify/vue'; 

const isMenuOpen = ref(false);
const Menu = ref([
  { name: 'Services', href: '#services' },
  { name: 'Skills', href: '#skills' },
  { name: 'Why Me', href: '#whyme' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]);

const scrollToSection = (href) => {
  // Tutup menu setelah klik (hanya relevan di mobile)
  isMenuOpen.value = false;
  
  const section = document.querySelector(href);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const isDarkMode = ref(localStorage.getItem('theme') === 'dark');

const toggleDarkMode = () => {
  const html = document.documentElement;

  if (isDarkMode.value) {
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }

  // Update dark mode state
  isDarkMode.value = !isDarkMode.value;
};

</script>

<style scoped>
/* Opsional: Jika Anda ingin menambahkan styling tambahan di luar Tailwind */
</style>
