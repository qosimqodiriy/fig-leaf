<template>
    <div class="main">
        <div class="container h-full flex flex-col relative">
            <div class="lg:absolute top-0 left-0 2xl:relative w-full md:px-15 lg:px-50 2xl:px-0">
                <div class="top grid grid-cols-1 lg:grid-cols-5 py-30 md:py-36 lg:py-40 xl:py-44 gap-20 md:gap-30 lg:gap-42 xl:gap-50 h-full">
                    <div class="lg:col-span-3">
                        <p class="text_shadov text-22 md:text-26 lg:text-32 xl:text-46 2xl:text-56 leading-120 2xl:leading-100 font-semibold">{{ $t('text1') }}</p>
                    </div>
    
                    <div class="lg:col-span-2">
                        <p class="text_shadov text-16 md:text-18 leading-110 md:leading-150 mb-24">{{ $t('text2') }}</p>
                        <NuxtLink to="/contact">
                            <div class="inline-flex items-center bg-green-secondary rounded-2 gap-8 py-10 md:py-12 lg:py-14 xl:py-16 px-20 md:px-26 lg:px-32 xl:px-40">
                                <p class="text-14 font-semibold leading-130 uppercase">{{ $t('contact') }}</p>
                                <img src="@/assets/icons/arrow-right.svg" alt="">
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <div class="bottom w-full h-full overflow-hidden">
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

    .text_shadov {
        color: #1D2B1E;
        text-shadow: none;
    }

    @media (max-width: 1536px) {
        .text_shadov {
            color: white;
            text-shadow: 2px 2px 4px rgba(0,0,0,1);
        }
    }

    @media (max-width: 1024px) {
        .text_shadov {
            color: #1D2B1E;
            text-shadow: none;
        }
    }
</style>