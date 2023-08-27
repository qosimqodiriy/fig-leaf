<template>
    <div class="my_container p-40 relative">
        <div class="absolute top-0 left-0 w-full h-full" :class="color == 'white' ? 'bg-purple_2 opacity-10' : 'bg-dark_blue opacity-100'">
            <img class="w-full h-full object-cover object-center" :class="color == 'white' ? 'opacity-40' : 'opacity-10'"  src="../assets/images/page_title_img.png" alt="">
        </div>
        <p class="text text-white font-interfaces text-28 md:text-38 lg:text-48 xl:text-60 2xl:text-72 text-center mb-16 relative">{{ name }}</p>
        <div class="flex items-center justify-center gap-12 relative">
            <NuxtLink @click="scrollToTop()" to="/Главная" class="text-white md:text-18 font-medium">Главная</NuxtLink>
            <p class="text-white md:text-18 font-medium">/</p>
            <p class="text-white md:text-18 font-medium cursor-pointer">{{ name }}</p>
        </div>
    </div>
</template>



<script>
export default {
    props: {
        name: {
            type: String,
            required: false,
        },
    },

    data() {
        return {
            color: 'white',
            bg_color: 'black',
        }
    },

    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        },
    },

    mounted() {
        this.color = sessionStorage.getItem('color');
        this.bg_color = sessionStorage.getItem('bg_color');
    }
}
</script>