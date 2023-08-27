<template>
    <header class="py-15 md:py-20 xl:py-24 2xl:py-32 border-b border-b-grey">
        <div class="my_container flex items-center justify-between">
            <div class="flex items-center gap-2">
                <img class="w-68" src="../assets/images/logo_img.gif" alt="">
                <!-- <img class="w-68" :class="color == 'black' ? 'logo_img' : ''" src="../assets/images/logo_img.gif" alt=""> -->
                <img v-if="color == 'white'" class="w-78" src="../assets/images/logo_name.png" alt="">
                <img v-else class="w-78" src="../assets/images/logo_name_blue.png" alt="">
            </div>
    
            <div class="hidden md:flex gap-20 xl:gap-30 2xl:gap-40">
                <NuxtLink to="/"        class="text-18 font-interfaces font-medium leading-150" :class="`text-${color}`">Главная</NuxtLink>
                <NuxtLink to="/about"   class="text-18 font-interfaces font-medium leading-150" :class="`text-${color}`">О компания</NuxtLink>
                <NuxtLink to="/address" class="text-18 font-interfaces font-medium leading-150" :class="`text-${color}`">Наши направления</NuxtLink>
                <NuxtLink to="/gallery" class="text-18 font-interfaces font-medium leading-150" :class="`text-${color}`">Галерея</NuxtLink>
                <NuxtLink to="/news"    class="text-18 font-interfaces font-medium leading-150" :class="`text-${color}`">Новости</NuxtLink>
                <NuxtLink to="/contact" class="text-18 font-interfaces font-medium leading-150" :class="`text-${color}`">Контакты</NuxtLink>
            </div>
    
            <div>
                <div class="flex items-center gap-4">
                    <p class="font-inter font-medium leading-150" :class="`text-${color}`">Русский</p>
                    <img v-if="color == 'white'" class="w-24 h-24" src="../assets/icons/arrow-down.png" alt="">
                    <img v-else class="w-24 h-24" src="../assets/icons/arrow-down-black.png" alt="">
                </div>
            </div>
        </div>
    </header>
</template>


<script>
export default {
    data() {
        return {
            path: '',
            load: false,
            color: 'white',
            bg_color: 'black',
        }
    },

    watch: {
        $route() {
            this.load = true;
            this.path = this.$route.path;

            if(this.$route.path == '/' || this.$route.path == '/about'|| this.$route.path == '/address') {
                this.color = 'white';
                this.bg_color = 'black';
            } else {
                this.color = 'black';
                this.bg_color = 'white';
            }
        },
    },

    methods: {
        changeLang(lang) {
            this.langRef = false;
            this.$i18n.locale = lang;
            localStorage.setItem('language', lang);
        },
    },
    
    mounted() {
        this.load = true;
        this.path = this.$route.path;

        if(this.$route.path == '/' || this.$route.path == '/about'|| this.$route.path == '/address') {
            this.color = 'white';
            this.bg_color = 'black';
        } else {
            this.color = 'black';
            this.bg_color = 'white';
        }
    }
}
</script>

<style scoped>
.logo_img {
    -webkit-filter: opacity(.5) drop-shadow(0 0 0 #3B2BB8);
    filter: opacity(.5) drop-shadow(0 0 0 #3B2BB8);
}

.language_box {
    min-width: 110px;
    transition: 0.5s;
}

.language_box.active {
    opacity: 1;
    z-index: 10;
    transform: translateY(0px);
}

.language_box.not_active {
    opacity: 0;
    z-index: -1;
    transform: translateY(-30px);
}
</style>