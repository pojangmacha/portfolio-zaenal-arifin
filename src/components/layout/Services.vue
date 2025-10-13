<template>
  <section id="services" class="relative text-white mt-32">
    <SectionHeader title="My Services" />

    <div
      class="mt-20 py-8 xl:px-16 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 
             md:gap-10 md:pt-12 lg:grid-cols-3"
    >
      <article
        v-for="element in services"
        :key="element.id"
        class="relative flex flex-col items-center text-center bg-primary dark:bg-[#ffffff29] 
               rounded-3xl border border-secondary shadow-lg p-8 transition-transform 
               hover:scale-105 duration-300 ease-out"
        data-aos="fade-up"
        :data-aos-delay="element.id * 100"
      >
        <!-- Icon Container -->
        <div
          class="relative flex items-center justify-center w-[100px] h-[100px] bg-primary 
                 rounded-full border-2 border-secondary -mt-16 shadow-md"
        >
          <img
            :src="element.icon"
            alt="services"
            class="w-[45px] h-[45px]"
          />
        </div>

        <!-- Content -->
        <div class="mt-6">
          <h3
            class="text-secondary font-semibold text-lg uppercase mb-2 tracking-wide"
          >
            {{ element.name }}
          </h3>
          <p class="text-sm text-gray-200 leading-relaxed px-3">
            {{ element.description }}
          </p>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '@/components/UI/SectionHeader.vue';
import { ref } from 'vue';

const services = ref([
    {
        id:1,
        icon:'https://img.icons8.com/?size=100&id=13664&format=png&color=000000',
        name:'WordPress Developer',
        description:'Build and manage WordPress-based websites using Elementor to create responsive and professional designs. Optimize website performance and visibility with Rank Math SEO to improve search engine discoverability.',
    },
    {
        id:2,
        icon:'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg',
        name:'PHP Web Development (Native,Yii Framework,Codeigniter 3)',
        description:'Develop dynamic and well-structured web applications using the PHP Yii Framework, applying the MVC approach to ensure high efficiency, security, and scalability.',
    },
    {
        id:3,
        icon:'https://img.icons8.com/color/100/daed1a/spring-logo.png',
        name:'Java Development (Intramart & Spring Framework)',
        description:'Build enterprise systems using the Java Spring Framework on the Intramart platform, focusing on modularity, data integration, and corporate-level application performance.',
    },
    {
        id:4,
        icon:'https://img.icons8.com/?size=100&id=QeIg9siFKGgp&format=png&color=000000',
        name:'MySQL',
        description:'Experienced in using MySQL in specific projects for data storage and retrieval, with a basic understanding of queries and database structure.',
    },
    {
        id:5,
        icon:'https://img.icons8.com/?size=100&id=Pv4IGT0TSpt8&format=png&color=000000',
        name:'PostgreSQL',
        description:'Experienced in using PostgreSQL in specific projects for data storage and retrieval, with a basic understanding of queries and database structure.',
    },
    {
        id:6,
        icon:'https://upload.wikimedia.org/wikipedia/commons/3/32/HeidiSQL_logo_image.png',
        name:'HeidiSQL',
        description:'Experienced in using HeidiSQL in specific projects for data storage and retrieval, with a basic understanding of queries and database structure.',
    },
]);
</script>
