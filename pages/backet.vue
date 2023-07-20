<template>
    <div class="py-40">
        <PageTitle text="Наши корзина" pageName="backet" />
        <div class="container">
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-40 md:py-50 lg:py-60 xl:py-70">
                <div class="space-y-24 p-20 md:p-24 lg:p-28 xl:p-32 border border-gray-secondary lg:col-span-2">
                    <basket-item v-for="card in 3" :key="card" />
                </div>

                <div class="p-20 md:p-24 lg:p-28 xl:p-32 border border-gray-secondary">
                    <p class="text-18 md:text-20 lg:text-22 xl:text-24 font-semibold font-interfaces mb-20 lg:mb-32">{{ $t('order') }}</p>
                    <div class="flex items-center justify-between">
                        <p class="text-16 md:text-18 font-interfaces text-black-secondary">{{ $t('ordercount') }}, 3 {{ $t('count') }}</p>
                        <p class="text-16 md:text-18 font-interfaces text-black-dark font-medium">4 000 000 so'm</p>
                    </div>
                    <hr class="w-full border border-gray-secondary my-24">
                    <div class="flex items-center justify-between mb-20 lg:mb-32">
                        <p class="text-18 md:text-20 font-interfaces text-black-secondary font-medium">{{ $t('ordercount') }}, 3 {{ $t('count') }}</p>
                        <p class="text-20 md:text-24 font-interfaces text-green-primary font-semibold">4 000 000 so'm</p>
                    </div>
                    <p class="text-14 uppercase font-semibold font-firsNeue text-black-dark leading-150 py-10 md:py-12 lg:py-16 text-center bg-green-secondary">{{ $t('checkout') }}</p>
                </div>
            </div>

            <hr class="border border-gray-secondary my-24 lg:my-40">

            <div class="my-24 lg:my-40">
                <Recommended />
                <!-- <p class="text-18 md:text-22 lg:text-24 xl:text-28 2xl:text-32 font-semibold font-firsNeue leading-150 mb-24">РЕКОМЕНДОВАННЫЕ ТОВАРЫ</p>

                <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-16">
                    <product-card v-for="card in 5" :key="card" />
                </div> -->
            </div>
        </div>
    </div>
</template>


<script>
import PageTitle from '~/components/PageTitle.vue';
import BasketItem from '~/components/BasketItem.vue';
import ProductCard from '~/components/ProductCard.vue';
import Recommended from '~/components/Recommended.vue';


export default {
    components: {
        PageTitle,
        BasketItem,
        ProductCard,
        Recommended,
    },
}
</script>