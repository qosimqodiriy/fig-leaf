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
                        <!-- <a href="#" target="_blank"><img class="w-24 h-24 cursor-pointer" src="../assets/icons/facebook.png" alt=""></a> -->
                        <a href="https://t.me/figleaftextile" target="_blank"><img class="w-24 h-24 cursor-pointer" src="../assets/icons/telegram.png" alt=""></a>
                        <a href="https://www.wechat.com/figleaftextile" target="_blank"><img class="w-24 h-24 cursor-pointer" src="../assets/icons/wechat.png" alt=""></a>
                        <a href="https://www.instagram.com/figleaftextile/" target="_blank"><img class="w-24 h-24 cursor-pointer" src="../assets/icons/instagram.png" alt=""></a>
                    </div>
                </div>


                <div class="flex flex-col md:flex-row gap-80 md:gap-100 lg:gap-120 xl:gap-150">
                    <div class="space-y-24 max-w-400">
                        <p class="footer_title">{{ $t('products') }}</p>

                        <NuxtLink :to="{path: '/products', query:{category: 'children'}}" class="footer_text">{{ $t('baby') }}</NuxtLink>
                        <NuxtLink :to="{path: '/products', query:{category: 'men'}}" class="footer_text">{{ $t('men') }}</NuxtLink>
                        <NuxtLink :to="{path: '/products', query:{category: 'women'}}" class="footer_text">{{ $t('women') }}</NuxtLink>
                    </div>


                    <div class="space-y-24 max-w-400">
                        <p class="footer_title">{{ $t('company') }}</p>

                        <NuxtLink to="/about" class="footer_text">{{ $t('aboutUs') }}</NuxtLink>
                        <NuxtLink to="/contact" class="footer_text">{{ $t('contacts') }}</NuxtLink>
                    </div>


                    <div class="space-y-24 max-w-400">
                        <p class="footer_title">{{ $t('contact') }}</p>

                        <p class="footer_text"><a href="tel:+998971811112" class="footer_text">+998 97 181 11 12</a></p>
                        <p class="footer_text"><a href="mailto:figleaftextile@gmail.com" class="">figleaftextile@gmail.com</a></p>
                        <p class="footer_text"><a href="https://yandex.uz/maps/10335/tashkent/?ll=69.146134%2C41.253285&mode=whatshere&whatshere%5Bpoint%5D=69.145321%2C41.253183&whatshere%5Bzoom%5D=17&z=17.62" target="_blank" class="">Тошкент вилояти, Зангиота тумани, Эшонгузар қўрғони, Охунбобев кўчаси 1-a уй</a></p>
                    </div>
                </div>
            </div>

            <hr class="border border-gray-secondary my-24">

            <div>
                <p class="text-18 leading-150 text-black-secondary">Все права защищены © 2023</p>
            </div>
        </div>
    </div>
</template>




<script>
export default {
    methods: {
        click() {
            window.scrollTo(0, 0);
        }
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
        font-family: 'TT Interfaces';
        color: var(--dark-green, #1D2B1E);
    }
</style>