<template>
    <div class="py-24 bg-white-secondary">
        <div class="container">
            <div class="flex flex-col lg:flex-row items-start justify-between gap-80">
                <div class="">
                    <NuxtLink to="/" @click="click()">
                        <div class="max-w-90 lg:max-w-120 mb-60">
                            <img src="../assets/images/Logo.png" alt="">
                        </div>
                    </NuxtLink>

                    <div class="flex items-center flex-wrap gap-15 md:gap-18 xl:gap-24">
                        <a v-for="social in socials" :key="social.id" :href="social.url" target="_blank"><base-image class="w-30 h-30 cursor-pointer" :src="social.icon" /></a>
                    </div>
                </div>


                <div class="flex flex-col md:flex-row gap-80 md:gap-100 lg:gap-120 xl:gap-150">
                    <div class="space-y-24 max-w-400">
                        <p class="footer_title">{{ $t('products') }}</p>

                        <NuxtLink v-for="item in category" :key="item.id" :to="{path: '/products', query:{category: item.id}}" class="footer_text">{{ item.name[$i18n.locale] }}</NuxtLink>
                    </div>


                    <div class="space-y-24 max-w-400">
                        <p class="footer_title">{{ $t('company') }}</p>

                        <NuxtLink to="/about" class="footer_text">{{ $t('aboutUs') }}</NuxtLink>
                        <NuxtLink to="/contact" class="footer_text">{{ $t('contacts') }}</NuxtLink>
                    </div>


                    <div class="space-y-24 max-w-400">
                        <p class="footer_title">{{ $t('contact') }}</p>

                        <div class="flex flex-wrap items-center gap-24">
                            <p><a href="tel:+998971811112" class="footer_text">{{ contact.phone }}</a></p>
                            <p><a href="tel:+998971811112" class="footer_text">{{ contact.phone2 }}</a></p>
                        </div>
                        <p><a href="mailto:figleaftextile@gmail.com" class="footer_text">{{ contact.email }}</a></p>
                        <p><a :href="`https://yandex.uz/maps/10335/tashkent/?ll=${contact.long}%2C${contact.lat}&mode=whatshere&whatshere%5Bpoint%5D=${contact.long}%2C${contact.lat}&whatshere%5Bzoom%5D=17&z=17`" target="_blank" class="whitespace-normal">{{ contact.address && contact.address[$i18n.locale] ? contact.address[$i18n.locale] : 'Тошкент вилояти, Зангиота тумани, Эшонгузар қўрғони, Охунбобев кўчаси 1-a уй' }}</a></p>
                    </div>
                </div>
            </div>

            <hr class="border border-gray-secondary my-24">

            <div>
                <p class="text-18 leading-150 text-black-secondary">{{ $t('copyText') }}</p>
            </div>
        </div>
    </div>
</template>




<script>
import axios from 'axios'

export default {
    data() {
        return {
            contact: {},
            socials: [],
            category: [],
        }
    },

    methods: {
        click() {
            window.scrollTo(0, 0);
        },

        async getSocials() {
            const responce = await axios.get('https://www.figleaf.uz/api/v1/socials')
            this.socials = responce.data;
            // console.log("Socials data");
            // console.log(responce.data);
        },

        async getContacts() {
            const responce = await axios.get('https://www.figleaf.uz/api/v1/contact')
            this.contact = responce.data;
            // console.log("Contacts");
            // console.log(responce.data);
        },

        async getCategories() {
            const responce = await axios.get('https://www.figleaf.uz/api/v1/categories')
            this.category = responce.data;
            // console.log("Categories");
            // console.log(responce.data);
        },
    },

    mounted() {
        this.getSocials();
        this.getContacts();
        this.getCategories();
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