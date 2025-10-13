<template>
  <section class="mt-32" id="skills">
    <SectionHeader title="My Skills" />

    <div class="mt-20 flex justify-center">
      <ul class="flex flex-wrap justify-center items-center">
        <li
          v-for="(element, index) in skills"
          :key="index"
          ref="skillRefs"
          :class="`mx-[15px] rounded-[12px] mb-7 bg-gradient-to-t ${element.bgGradient}`"
        >
          <div class="rounded-[12px] bg-primary mt-[3px] p-8 md:p-5 text-center">
            <h3
              class="font-bold text-[35px] text-white flex items-center justify-center"
            >
              <Countup
                v-if="visibleItems[index]"
                :endVal="element.percentage"
                :startVal="0"
                :duration="2"
              />
              %
            </h3>
            <p
              class="font-normal text-[16px] mt-2"
              :style="{ color: element.textColor }"
            >
              {{ element.title }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import SectionHeader from "@/components/UI/SectionHeader.vue";
import Countup from "vue-countup-v3"; // pastikan sudah terinstal

const skills = ref([
  {
    percentage: 80,
    title: "PHP",
    bgGradient: "from-[#1f1e1c99] to-[#acac39]",
    textColor: "#FFE600",
  },
  {
    percentage: 70,
    title: "Java Spring",
    bgGradient: "from-[#1f1e1c99] to-[#59c33789]",
    textColor: "#59c378",
  },
  {
    percentage: 90,
    title: "WordPress",
    bgGradient: "from-[#1f1e1c99] to-[#dd584f99]",
    textColor: "#dd584f",
  },
  {
    percentage: 60,
    title: "Vue.js",
    bgGradient: "from-[#1f1e1c99] to-[#ff9a0099]",
    textColor: "#ff9a00",
  },
  {
    percentage: 70,
    title: "Photoshop",
    bgGradient: "from-[#1f1e1c99] to-[#00a9ff99]",
    textColor: "#00a9ff",
  },
  {
    percentage: 80,
    title: "HTML",
    bgGradient: "from-[#1f1e1c99] to-[#acac39]",
    textColor: "#FFE600",
  },
  {
    percentage: 90,
    title: "Microsoft Office",
    bgGradient: "from-[#1f1e1c99] to-[#59c37899]",
    textColor: "#59c378",
  },
]);

// track visibility of items
const visibleItems = ref(skills.value.map(() => false));
const skillRefs = ref([]);

// intersectionObserver logic
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = skillRefs.value.indexOf(entry.target);
          if (index !== -1) {
            visibleItems.value[index] = true;
          }
        }
      });
    },
    { threshold: 0.3 }
  );

  skillRefs.value.forEach((el) => observer.observe(el));
});
</script>
