<template>
    <footer class="bg-black">
        <div class="my_container py-20 md:py-24 lg:py-30 xl:py-40">
            <div class="flex flex-wrap gap-40 gap-y-24 mb-40 lg:mb-60">
                <div class="flex items-center gap-2">
                    <img class="w-68" src="../assets/images/logo_img.gif" alt="">
                    <img class="w-78" src="../assets/images/logo_name.png" alt="">
                </div>

                <p v-for="item in 5" :key="item" class="p-10 px-24 lg:px-32 text-white text-20 font-medium font-interfaces border border-grey_8">Modern City</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-40 mb-16">
                <div class="py-24 border-y border-grey_border">
                    <div class="flex items-center gap-24 mb-24">
                        <img class="w-40 h-40" src="../assets/icons/Location.png" alt="">
                        <p class="text-white text-24 font-inter font-medium leading-140">Адресс</p>
                    </div>
                    <p class="text-18 font-inter text-grey_40">Республика Узбекистан. Ташкентская обл. Зангиота р-н КФЙ Эркин, Кольцевая дорога Ташкент-Термиз М-39 .</p>
                </div>
                <div class="py-24 border-y border-grey_border">
                    <div class="flex items-center gap-24 mb-24">
                        <img class="w-40 h-40" src="../assets/icons/Call.png" alt="">
                        <p class="text-white text-24 font-inter font-medium leading-140">Тел/Факс:</p>
                    </div>
                    <div class="flex flex-wrap items-center gap-24">
                        <p class="text-18 font-inter text-grey_40">(+998 90) 992 17 77</p>
                        <p class="text-18 font-inter text-grey_40">(0 371) 150 62 74</p>
                    </div>
                </div>
                <div class="py-24 border-y border-grey_border">
                    <div class="flex items-center gap-24 mb-24">
                        <img class="w-40 h-40" src="../assets/icons/Message.png" alt="">
                        <p class="text-white text-24 font-inter font-medium leading-140">Социальные медиа</p>
                    </div>
                    <div class="flex items-center gap-20 md:gap-24 lg:gap-30 xl:gap-40">
                        <img class="w-32 h-32" v-for="item in 4" :key="item" src="../assets/icons/youtube.png" alt="">
                    </div>
                </div>
            </div>

            <div class="flex items-center justify-between gap-40 gap-y-20 flex-wrap">
                <p class="text-18 font-inter text-white">© 2023 JAHON INVEST PLAST</p>

                <div class="flex items-center gap-3">
                    <p class="text-18 font-interfaces font-medium text-grey_40">Design by</p>
                    <p class="text-18 font-interfaces font-medium text-white">Mazmoon Group</p>
                </div>
            </div>
        </div>
    </footer>
</template>




<script>
import axios from 'axios'

export default {
    data() {
        return {
            socials: [],
        }
    },

    methods: {
        click() {
            window.scrollTo(0, 0);
        },

        async getSocials() {
            const responce = await axios.get('https://www.figleaf.uz/api/v1/socials')
            this.socials = responce.data;
        },
    },

    mounted() {
        this.getSocials();
    }
}
</script>



<style scoped>
    .footer_title {
        font-size: 20px;
        font-weight: 600;
        line-height: 150%;
        font-style: normal;
        font-family: 'TT Firs Neue';
        color: var(--dark-green, #1D2B1E);
    }

    .footer_text {
        display: block;
        font-size: 18px;
        font-weight: 400;
        line-height: 150%;
        font-style: normal;
        white-space: nowrap;
        font-family: 'TT Interfaces';
        color: var(--dark-green, #1D2B1E);
    }
</style>