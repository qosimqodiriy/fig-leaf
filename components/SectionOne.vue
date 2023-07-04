<template>
    <div class="main">
        <div class="container h-full flex flex-col">
            <div class="top grid grid-cols-1 lg:grid-cols-5 py-30 md:py-36 lg:py-40 xl:py-44 gap-20 md:gap-30 lg:gap-42 xl:gap-50 bg-white-primary">
                <div class="lg:col-span-3">
                    <p class="text-22 md:text-28 lg:text-38 xl:text-46 2xltext-56 leading-100 font-semibold">Основной целью компании Fig-leaf является создание комфорта для клиентов</p>
                </div>

                <div class="lg:col-span-2">
                    <p class="text-16 md:text-18 leading-110 md:leading-150 mb-24">Амина ТМ специализируется на производстве мужского нижнего белья. Наша продукция нашла своего покупателя не только в нашей стране, но и в России, других государствах.</p>
                    <div class="inline-flex items-center bg-green-secondary rounded-2 gap-8 py-10 md:py-12 lg:py-14 xl:py-16 px-20 md:px-26 lg:px-32 xl:px-40">
                        <p class="text-14 font-semibold leading-130 uppercase">Свяжется с нами</p>
                        <img src="@/assets/icons/arrow-right.svg" alt="">
                    </div>
                </div>
            </div>

            <div class="bottom w-full h-full bg-green-primary overflow-hidden">
                <video class="w-full h-full object-cover object-center" src="../assets/videos/background.mp4" autoplay muted loop></video>
            </div>
        </div>
    </div>
</template>


<style scoped>
    .main {
        width: 100%;
        height: calc(100vh - 89px);
    }

    video {
        width: 100% !important;
        height: 100% !important;
    }
</style>