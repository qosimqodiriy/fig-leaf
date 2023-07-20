<template>
    <div class="py-10 lg:py-15 border-b border-white-secondary">
        <div class="container flex items-center justify-between">
            <div class="flex items-center gap-20 md:gap-30 lg:gap-40 xl:gap-64 2xl:gap-80">
                <NuxtLink to="/">
                    <div class="max-w-82 max-h-58 w-60 md:w-82 md:h-58">
                        <img class="max-w-full max-h-full" src="@/assets/images/Logo.png" alt="">
                    </div>
                </NuxtLink>

                <NuxtLink to="/"><p class="text-18 font-medium leading-150 hidden md:block">{{ $t('home') }}</p></NuxtLink>
                <NuxtLink to="/products"><p class="text-18 font-medium leading-150 hidden md:block">{{ $t('products') }}</p></NuxtLink>
                <NuxtLink to="/about"><p class="text-18 font-medium leading-150 hidden md:block">{{ $t('aboutUs') }}</p></NuxtLink>
                <NuxtLink to="/contact"><p class="text-18 font-medium leading-150 hidden md:block">{{ $t('contacts') }}</p></NuxtLink>
            </div>

            <div class="flex items-center gap-50">
                <div class="relative">
                    <div class="flex items-center gap-6 cursor-pointer min-w-60" @click="langRef = langRef ? false : true">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
    
                        <p>{{ $i18n.locale }}</p>
                    </div>

                    <div class="language_box absolute top-30 left-0 px-2 bg-white-secondary space-y-5 shadow-lg" :class="langRef ? 'active' : 'not_active'">
                        <div @click="changeLang('eng')" class="flex items-center w-full gap-10">
                            <img class="w-20 h-20 rounded-full border border-gray-secondary shrink-0" src="../assets/images/en-flag.png" alt="">
                            <p class="text-14 cursor-pointer">English</p>
                        </div>
                        <div @click="changeLang('ru')" class="flex items-center w-full gap-10">
                            <img class="w-20 h-20 rounded-full border border-gray-secondary shrink-0" src="../assets/images/ru-flag.png" alt="">
                            <p class="text-14 cursor-pointer">Русский</p>
                        </div>
                        <div @click="changeLang('uz')" class="flex items-center w-full gap-10">
                            <img class="w-20 h-20 rounded-full border border-gray-secondary shrink-0" src="../assets/images/uz-flag.png" alt="">
                            <p class="text-14 cursor-pointer">O'zbekcha</p>
                        </div>                        
                    </div>
                </div>
                <NuxtLink to="/backet">
                    <div class="w-40 h-40 md:w-56 md:h-56 rounded-full bg-gray-secondary flex items-center justify-center">
                        <img class="w-18 h-18 md:w-24 md:h-24" src="@/assets/images/basket.png" alt="">
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            langRef: false,
        }
    },

    methods: {
        changeLang(lang) {
            this.langRef = false;
            this.$i18n.locale = lang;
            localStorage.setItem('language', lang);
        },

        clicked() {
            console.log("clicked");
            this.langRef = this.langRef ? false : true;
            console.log(this.langRef);
        },
    },

    mounted() {
        // console.log("Hello index");

        addEventListener("keydown", (evt) => {
            console.log(evt.key);
            console.log("Clicked add event listener");
        })
    }
}
</script>


<style scoped>
.language_box {
    min-width: 110px;
    transition: 0.5s;
}

.language_box.active {
    opacity: 1;
    z-index: 1;
    transform: translateY(0px);
}

.language_box.not_active {
    opacity: 0;
    z-index: -1;
    transform: translateY(-30px);
}
</style>