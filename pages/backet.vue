<template>
    <div class="py-40">
        <PageTitle />
        <div class="container">
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-40 md:py-50 lg:py-60 xl:py-70">
                <div class="p-20 md:p-24 lg:p-28 xl:p-32 border border-gray-secondary lg:col-span-2 bg-orange-primary">
                    evlnelk
                </div>

                <div class="p-20 md:p-24 lg:p-28 xl:p-32 border border-gray-secondary">
                    <p class="text-18 md:text-20 lg:text-22 xl:text-24 font-semibold font-interfaces mb-20 lg:mb-32">Ваш заказ</p>
                    <div class="flex items-center justify-between">
                        <p class="text-16 md:text-18 font-interfaces text-black-secondary">Товары, 3 шт</p>
                        <p class="text-16 md:text-18 font-interfaces text-black-dark font-medium">4 000 000 сум</p>
                    </div>
                    <hr class="w-full border border-gray-secondary my-24">
                    <div class="flex items-center justify-between mb-20 lg:mb-32">
                        <p class="text-18 md:text-20 font-interfaces text-black-secondary font-medium">Товары, 3 шт</p>
                        <p class="text-20 md:text-24 font-interfaces text-green-primary font-semibold">4 000 000 сум</p>
                    </div>
                    <p class="text-14 uppercase font-semibold font-firsNeue text-black-dark leading-150 py-10 md:py-12 lg:py-16 text-center bg-green-secondary">Оформить заказ</p>
                </div>
            </div>

            <hr class="border border-gray-secondary my-24 lg:my-40">

            <div class="bg-colour-green my-24 lg:my-40">
                <p class="text-18 md:text-22 lg:text-24 xl:text-28 2xl:text-32 font-semibold font-firsNeue leading-150 mb-24">РЕКОМЕНДОВАННЫЕ ТОВАРЫ</p>
            </div>
        </div>
    </div>
</template>


<script>
import PageTitle from '~/components/PageTitle.vue';


export default {
    components: {
        PageTitle,
    },
}
</script>