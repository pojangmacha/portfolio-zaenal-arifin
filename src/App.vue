// File: App.vue
<script setup>
// Hapus defineAsyncComponent. Gunakan import normal (jalur relatif):
import HeroSection from './components/layout/HeroSection.vue';
import Navbar from './components/layout/Navbar.vue' // <-- Periksa ulang jalur ini
import Counter from './components/layout/Counter.vue';
import Services from './components/layout/Services.vue';
import Skills from './components/layout/Skills.vue';
import WhyME from './components/layout/WhyME.vue';
import Projects from './components/layout/Projects.vue';
import Contact from './components/layout/Contact.vue';
import Footer from './components/layout/Footer.vue';
import BackToTop from './components/layout/BackToTop.vue';

import LoadingSpinner from './components/layout/LoadingSpinner.vue';
// Pastikan jalur relatif ke Navbar.vue dari App.vue sudah benar.
</script>
<style>
    *{
        scrollbar-width: thin;
        scrollbar-collor: #111827 #f1f1f1;
    }
</style>
<template>


    <div class="bg-[#D4EBF8] dark:bg-[#080326] min-h-screen">
        <Suspense>
            <template #default>
                <div>
                <Navbar />
                <HeroSection />
                <Counter />
                <Services />
                <Skills />
                <WhyME />
                <Projects />
                <Contact />
                <Footer />
                <BackToTop />
                </div>
             </template>
        <template #fallback>
                <div class="flex justify-center items-center min-h-screen">
                    <LoadingSpinner />
                </div>
        </template>
        </Suspense>
        
    </div>
</template>