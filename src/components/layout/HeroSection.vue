<template>
  <section class="flex justify-center items-center dark:text-white min-h-screen mt-20 lg:mt-0 relative overflow-hidden">

    <!-- Gradient kiri atas -->
    <header
      class="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full 
             bg-gradient-to-r from-[#00c6cc] via-[#785ae4] to-secondary 
             opacity-30 dark:opacity-20 blur-[100px] left-10 top-0 hidden md:block">
    </header>

    <!-- Gradient kanan bawah -->
    <header
      class="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full 
             bg-gradient-to-r from-[#00c6cc] via-[#785ae4] to-secondary 
             opacity-30 dark:opacity-20 blur-[100px] right-10 bottom-0 hidden md:block">
    </header>

    <!-- Konten utama -->
    <main class="relative grid lg:grid-cols-2 grid-cols-1 items-center p-4 lg:p-8">
      <div class="text-center lg:text-left">
        <h1 class="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold">
         👋 Hallo, I'm
          <span class="text-secondary stroke-text text-stroke-primary dark:text-stroke-secondary">
            Zaenal Arifin
          </span>
        </h1>
        <p class="text-lg max-w-xl mx-auto lg:mx-0 font-semibold">
          I'm Web Developer with experience in various web development technologies and platforms.
        </p>
       <div class="mt-6 flex justify-center lg:justify-start">
          <Button label="Hire Me" />
          <a 
           href="/CV_Zaenal_Arifin.pdf" 
            download="CV Zaenal_Arifin.pdf"
            class="flex justify-center items-center font-semibold text-lg w-[11rem] h-[60px] 
                  rounded-full ml-2 border-2 transition-transform duration-300
                  bg-white text-primary border-primary 
                  dark:bg-transparent dark:text-secondary dark:border-secondary
                  hover:scale-105"
          >
            <Icon icon="line-md:download-loop" class="text-4xl" />
            <span class="ml-1">Resume</span>
          </a>
        </div>
      </div>
     <!-- <aside class="container flex justify-center lg:justify-end mt-20 lg:mt-0 items-center flex-wrap">
        <figure
          class="card relative m-[10px] 
          md:w-[420px] md:h-[450px] 
          md:before:w-[450px] md:before:h-[450px] 
          w-[280px] h-[350px] 
          before:content-[''] before:absolute before:top-0 before:left-0 before:z-10
          before:w-[300px] before:h-[300px] before:border-[25px] 
          before:border-primary before:shadow-[5px_5px_10px_primary,_-5px_-5px_10px_primary] 
          dark:before:border-secondary dark:before:shadow-[7px_7px_21px_secondary,_-7px_-7px_21px_secondary]"
        > -->
         <div
            class="relative w-full h-full bg-cover flex flex-row md:flex-col justify-center items-center gap-4 p-4"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div 
              class="mt-10 p-[3px] bg-gradient-to-r from-blue-400 to-green-300 rounded-xl shadow-[5px_5px_15px_#999,-5px_-5px_15px_#fff] animate-[fadeZoom_2s_ease-in-out]"
            >
              <img
                src="@/assets/images/zae.jpeg"
                alt="Hero picture"
                class="w-[230px] h-[310px] object-cover rounded-lg shadow-[inset_1px_1px_3px_#fff,inset_-1px_-1px_3px_#666]"
                loading="lazy"
              />
            </div>
          </div>


        <!-- </figure>
      </aside> -->
    </main>
    <svg class="hidden">
      <filter id="wavy1">
        <feTurbulence x="0" y="0" baseFrequency="0.2" numOctaves="5" seed="1"></feTurbulence>
        <feDisplacementMap in="SourceGraphic" scale="30" />
      </filter>
  </svg>
  </section>
</template>
<script setup>
import Button from '@/components/UI/Button.vue';
import { Icon } from '@iconify/vue';

</script>

<style scoped>
.container .card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background: transparent;
}
.container .card:nth-of-type(1)::before {
  filter: url(#wavy1);
}
</style>
