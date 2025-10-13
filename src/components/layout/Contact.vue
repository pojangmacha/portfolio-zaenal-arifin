<template>
  <section class="mt-32" id="contact">
    <SectionHeader title="Contact Me" />
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <form class="space-y-8">
        <div v-for="(item, index) in inputs" :key="index">
          <Input
            :id="item.id"
            :label="item.label"
            :type="item.type"
            :placeholder="item.placeholder"
            :rows="item.rows"
          />
        </div>
        <div class="flex justify-center">
          <!-- <Button label="Send" /> -->

          <div class="mt-2 flex justify-center space-x-4 md:space-x-8">
              <!-- WhatsApp -->
              <a 
                href="https://wa.me/6281927303019"
                target="_blank"
                rel="noopener noreferrer"
                class="text-green-200 hover:text-green-500 transition-all duration-300 transform hover:scale-110 hover:drop-shadow-[0_0_10px_#25D366]"
              >
                <Icon icon="fa-brands:whatsapp" style="font-size:2rem" />
              </a>

              <!-- LinkedIn -->
              <a 
                href="https://www.linkedin.com/in/zaenal-arifin-2609a9222/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-400 hover:text-blue-700 transition-all duration-300 transform hover:scale-110 hover:drop-shadow-[0_0_10px_#0077b5]"
              >
                <Icon icon="fa-brands:linkedin" style="font-size:2rem" />
              </a>

              <!-- GitHub -->
              <a 
                href="https://github.com/pojangmacha/portfolio-zaenal-arifin"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-500 hover:text-gray-200 transition-all duration-300 transform hover:scale-110 hover:drop-shadow-[0_0_10px_#999]"
              >
                <Icon icon="fa-brands:github" style="font-size:2rem" />
              </a>

              <!-- Instagram -->
              <a 
                href="https://www.instagram.com/zynarifin/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-pink-400 hover:text-pink-600 transition-all duration-300 transform hover:scale-110 hover:drop-shadow-[0_0_10px_#E1306C]"
              >
                <Icon icon="fa-brands:instagram" style="font-size:2rem" />
              </a>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '@/components/UI/SectionHeader.vue';
import Input from '@/components/UI/Input.vue';
import Button from '@/components/UI/Button.vue';
import { ref } from 'vue';

// const inputs = ref([
//   { id: 'email', label: 'Your email', type: 'email', placeholder: 'zaenalskom21@gmail.com', rows: undefined },
//   { id: 'subject', label: 'Subject', type: 'text', placeholder: 'Let us know how can help you', rows: undefined },
//   { id: 'message', label: 'Message', type: 'textarea', placeholder: 'Leave a comment', rows: 6 },
// ]);
</script>
