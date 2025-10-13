<template>
  <section id="projects" class="relative w-11/12 px-16 mx-auto">
    <SectionHeader title="My Projects" />

    <!-- Custom navigation buttons -->
    <button
      class="swiper-prev absolute top-2/3 left-4 transform -translate-y-1/2 z-10 text-white dark:bg-secondary bg-primary p-4 rounded-full"
    >
      <Icon icon="line-md:arrow-left" class="font-bold text-3xl" />
    </button>

    <button
      class="swiper-next absolute top-2/3 right-4 transform -translate-y-1/2 z-10 text-white dark:bg-secondary bg-primary p-4 rounded-full"
    >
      <Icon icon="line-md:arrow-right" class="font-bold text-3xl" />
    </button>

    <!-- Swiper Component -->
    <swiper
      :effect="'coverflow'"
      grabCursor
      centeredSlides
      :slidesPerView="'auto'"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
      :navigation="navigationOptions"
      loop
      pagination
      :modules="[EffectCoverflow, Navigation]"
      class="max-w-full mt-32"
    >
      <swiper-slide
        class="max-w-[300px]"
        v-for="(project, index) in projects"
        :key="index"
      >
        <ProjectCard
          :title="project.title"
          :description="project.description"
          :image="'/src/assets/images' + project.image"
          :tags="project.tags"
          :livelink="project.liveLink"
          :codelink="project.codeLink"
        />
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
import SectionHeader from '@/components/UI/SectionHeader.vue';
import ProjectCard from '@/components/UI/ProjectCard.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import { ref } from 'vue';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Define navigation options
const navigationOptions = {
  prevEl: '.swiper-prev',
  nextEl: '.swiper-next',
};

// Projects data
const projects = ref([
  {
    title: 'Anggrek Sinar Mulia',
    description:'Anggrek Sinar Mulia adalah toko terpercaya yang melayani jual beli emas murni dengan sistem COD (Cash On Delivery).',
    image: '/anggrek.png',
    tags: ['Wordpress', 'Elementor', 'Tabelpress', 'Rank Math SEO'],
    liveLink: 'https://anggreksinarmulia.my.id/',
    codeLink: 'https://anggreksinarmulia.my.id/'
  },
  {
    title: 'Pojangmacha Korean Street Food',
    description:'POJANGMACHA dalam bahasa Indonesia memiliki arti makanan pinggir jalan atau Angkringan.',
    image: '/pojangmacha.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://pojangmacha.github.io/pojangmacha.github.aio/',
    codeLink: 'https://pojangmacha.github.io/pojangmacha.github.aio/'
  },
  {
    title: 'Tembakau Rakyat +62',
    description:'Jual tembakau linting/ Tingwe',
    image: '/tembakau.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://tembakaurakyat.github.io/TembakauRakyat/',
    codeLink: 'https://tembakaurakyat.github.io/TembakauRakyat/'
  },

  {
    title: 'Samawa Digital',
    description:'Undangan Digital',
    image: '/samawa.png',
    tags: ['HTML', 'CSS', 'PHP', 'Codeigniter 4'],
    liveLink: 'https://samawadigital.online/',
    codeLink: 'https://samawadigital.online/',
  },

  {
    title: 'Ellysan Property',
    description:'Jasa jual beli rumah',
    image: '/5.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://ellysanproperty.github.io/',
    codeLink: 'https://ellysanproperty.github.io/'
  },

  {
    title: 'Surili Global Industries',
    description:'Surili Global Industries is a dynamic export company dedicated to connecting businesses with international markets.',
    image: '/4.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://suriliglobalindustries.github.io/surili.globalindustries.github.io/',
    codeLink: 'https://suriliglobalindustries.github.io/surili.globalindustries.github.io/'
  },

  {
    title: 'PT Mesa Global Energi (Mesa Energy)',
    description:'PT Mesa Global Energi (Mesa Energy) founded in 2021 is a fully integrated Industrial Fuel Trading & Services Company',
    image: '/14.png',
    tags: ['Wordpress', 'Elementor'],
    liveLink: 'https://mesaenergy.id/',
    codeLink: 'https://mesaenergy.id/'
  },

  
]);
</script>

<style>
.swiper-button-prev,
.swiper-button-next {
  cursor: pointer;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
