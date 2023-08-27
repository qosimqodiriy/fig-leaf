<template>
    <section class="py-40 lg:py-60 xl:py-80 pb-80 lg:pb-100 xl:pb-130 2xl:pb-160">
        <div class="my_container">
            <p class="text-white font-interfaces text-24 lg:text-28 xl:text-32 2xl:text-40 mb-30">О холдинге</p>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-24 mb-60 md:mb-72 lg:mb-82 xl:mb-95">
                <div class="lg:col-span-2 w-full max-h-600 min-h-400 overflow-hidden relative">
                    <img class="w-full max-h-full h-full object-cover object-center" src="../../assets/images/img_1.png" alt="">

                    <div class="absolute top-12 left-12 right-12 bottom-12 px-28 py-20 flex items-end border border-purple">
                        <p class="text-20 text-white font-semibold leading-140">Фото с III Международного форума PLUS в Ташкенте</p>
                    </div>
                </div>

                <div class="w-full max-h-600 min-h-400 overflow-hidden relative">
                    <img class="w-full max-h-full h-full object-cover object-center" src="../../assets/images/img_2.png" alt="">

                    <div class="absolute top-12 left-12 right-12 bottom-12 px-28 py-20 flex items-end border border-purple">
                        <p class="text-20 text-white font-semibold leading-140">Фото с III Международного форума PLUS в Ташкенте</p>
                    </div>
                </div>
            </div>

            <div class="max-w-1436 mx-auto space-y-32">
                <ProjectCard v-for="item in 4" :key="item" :last="item == 4 ? true : false"></ProjectCard>
            </div>
        </div>
    </section>
</template>


<script>
import axios from 'axios'

import ProjectCard from './Projectcard.vue'

export default {

    components: {
        ProjectCard,
    },

    data() {
        return {
            data: {},
        }
    },

    methods: {
        // async getImages() {
        //     const response = await axios.get('https://www.figleaf.uz/api/v1/image');
        //     this.data = response.data;
        // },
    },

    mounted() {
        // this.getImages();
    }
}
</script>