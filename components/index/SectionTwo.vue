<template>
    <section class="py-40 md:py-50 lg:py-62 xl:py-74 2xl:py-88 relative overflow-hidden" :class="`bg-${bg_color} text-${color}`">
        <div class="bg absolute top-0 left-0"></div>
        <div class="my_container grid lg:grid-cols-11 gap-20 z-10 relative">
            <div class="w-full lg:col-span-6">
                <p class="font-interfaces text-24 lg:text-28 xl:text-32 2xl:text-40 mb-24" :class="color == 'black' ? 'text-black' : 'text-white'">О холдинге </p>
                <p class="text-16 lg:text-18 xl:text-20 font-interfaces leading-150 mb-24">За годы существования компания JIP зарекомендовала себя как надежного и ответственного производителя, в продукции которого вы можете быть уверены. На сегодняшний день предприятие обладает одним из крупнейших в Средней Азии автоматизированным производственным комплексом</p>
                <p class="text-16 lg:text-17 xl:text-18 font-interfaces leading-150 text-grey mb-40 lg:mb-54">За годы существования компания JIP зарекомендовала себя как надежного и ответственного производителя, в продукции которого вы можете быть уверены. На сегодняшний день предприятие обладает одним из крупнейших в Средней Азии автоматизированным производственным комплексом</p>


                <div v-if="color == 'black'" class="flex flex-wrap items-center gap-50 gap-y-20 mb-40 lg:mb-54">
                    <div class="flex items-center gap-16">
                        <p class="text text-18  text-blue whitespace-nowrap">Подробнее о холдинге</p>
                        <img class="w-24" src="../../assets/icons/arrow-right-blue.png" alt="">
                    </div>

                    <div class="flex items-center gap-16">
                        <p class="text_2 text-18 text-black_48 whitespace-nowrap">Сертификаты</p>
                        <img class="w-24" src="../../assets/icons/arrow-right-black.png" alt="">
                    </div>
                </div>

                <div class="grid grid-cols-2 xl:grid-cols-4 gap-7">
                    <div class="flex flex-col py-10 px-20 pb-20 md:pb-30" :class="color == 'black' ? 'bg-white_primary text-black' : 'text-white'">
                        <div class="flex items-start gap-15">
                            <p class="text-24 md:text-28 lg:text-38 xl:text-50 2xl:text-64 font-bold leading-140">17</p>
                            <img class="w-22 h-22" src="../../assets/icons/plus-blue.png" alt="">
                        </div>
                        <p class="text-18 font-interfaces flex-auto">Года на рынке</p>
                    </div>
                    <div class="flex flex-col py-10 px-20 pb-20 md:pb-30" :class="color == 'black' ? 'bg-white_primary text-black' : 'text-white'">
                        <div class="flex items-start gap-15">
                            <p class="text-24 md:text-28 lg:text-38 xl:text-50 2xl:text-64 font-bold leading-140">600</p>
                            <img class="w-22 h-22" src="../../assets/icons/plus-blue.png" alt="">
                        </div>
                        <p class="text-18 font-interfaces flex-auto">Специалистов на предприятиях</p>
                    </div>
                    <div class="flex flex-col py-10 px-20 pb-20 md:pb-30" :class="color == 'black' ? 'bg-white_primary text-black' : 'text-white'">
                        <div class="flex items-start gap-15">
                            <p class="text-24 md:text-28 lg:text-38 xl:text-50 2xl:text-64 font-bold leading-140">40</p>
                            <img class="w-22 h-22" src="../../assets/icons/plus-blue.png" alt="">
                        </div>
                        <p class="text-18 font-interfaces flex-auto">млн. $ вовлечено инвестиций</p>
                    </div>
                    <div class="flex flex-col py-10 px-20 pb-20 md:pb-30" :class="color == 'black' ? 'bg-white_primary text-black' : 'text-white'">
                        <div class="flex items-start gap-15">
                            <p class="text-24 md:text-28 lg:text-38 xl:text-50 2xl:text-64 font-bold leading-140">5</p>
                            <img class="w-22 h-22" src="../../assets/icons/plus-blue.png" alt="">
                        </div>
                        <p class="text-18 font-interfaces flex-auto">международных партнеров</p>
                    </div>
                </div>
            </div>

            <div class="flex items-center justify-center w-full lg:col-span-5 min-h-300">
                <div class="flex items-center gap-20">
                    <img class="w-150 md:w-180 lg:w-180 xl:w-220 2xl:w-240" src="../../assets/images/logo_img.gif" alt="">
                    <img v-if="color == 'white'" class="w-180 md:w-200 lg:w-230 xl:w-280 2xl:w-300" src="../../assets/images/logo_name.png" alt="">
                    <img v-else class="w-180 md:w-200 lg:w-230 xl:w-280 2xl:w-300" src="../../assets/images/logo_name_blue.png" alt="">
                </div>
            </div>
        </div>
    </section>
</template>




<script>
export default {
    props: {
        color: {
            type: String,
            required: true,
        },

        bg_color: {
            type: String,
            required: true,
        },
    },
}
</script>


<style scoped>
.bg {
    width: 100%;
    height: 100%;
    opacity: 0.2;
    filter: grayscale(100%);
    background: url('../../assets/images/logo_img.gif') no-repeat center right;
    background-size: 1400px;
    transform: translateX(250px);
}




@media (max-width: 1350px) {
    .bg {
        background: url('../../assets/images/logo_img.gif') no-repeat center right;
        background-size: 1000px;
        transform: translateX(180px);
    }
}

@media (max-width: 1024px) {
    .bg {
        background: url('../../assets/images/logo_img.gif') no-repeat center right;
        background-size: 1000px;
        transform: translateX(180px);
    }
}

@media (max-width: 768px) {
    .bg {
        background: url('../../assets/images/logo_img.gif') no-repeat center;
        background-size: 1000px;
        transform: translateX(0);
    }
}
</style>