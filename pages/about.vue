<template>
    <Head>
        <Title>Figleaf | About</Title>
        
        <meta property="type" content="website">
        <meta property="og:type" content="website">
        
        <meta property="url" content="https://www.figleaf.uz">
        <meta property="og:url" content="https://www.figleaf.uz">
        
        <meta property="image" content="https://www.figleaf.uz/files/images/2023-08-06-15-38-23-505.png">
        <meta property="og:image" content="https://www.figleaf.uz/files/images/2023-08-06-15-38-23-505.png">


        <meta name="keywords" content="Figleaf, Figleaf uz, figleaf, Kiyimlar, Erkaklar kiyimlari, Ayollar kiyimlari, Bolalar kiyimlari">
        <meta name="og:keywords" content="Figleaf, Figleaf uz, figleaf, Kiyimlar, Erkaklar kiyimlari, Ayollar kiyimlari, Bolalar kiyimlari">

        <Meta name="description" content="Kompaniyaning asosiy faoliyati iste'molchilarning didi va afzalliklariga qaratilgan erkaklar ichki kiyimlarini ishlab chiqarishdir." />
        <Meta name="og:description" content="Kompaniyaning asosiy faoliyati iste'molchilarning didi va afzalliklariga qaratilgan erkaklar ichki kiyimlarini ishlab chiqarishdir." />
    </Head>

    <div class="py-40">
        <PageTitle :text="$t('informationCompany')" :pageName="$t('aboutUs')" />
        <div class="container">
            <div class="py-40 max-w-1100 mx-auto mb-30 lg:mb-50">
                <p class="text-22 lg:text-24 xl:text-28 2xl:text-32 mb-24">{{ $t('text6') }}</p>
                <p class="text-16 lg:text-18 font-interfaces leading-150">{{ $t('text7') }}</p>

                <div class="grid md:grid-cols-2 lg:grid-cols-3 bg-white-secondary gap-y-40 p-24 md:p-28 lg:p-32 my-30 lg:my-40">
                    <div class="flex flex-col items-center">
                        <p class="text-38 md:text-42 lg:text-46 xl:text-50 2xl:text-56 leading-150 font-bold text-green-primary mb-10">7</p>
                        <p class="text-18 md:text-18 lg:text-20 xl:text-22 2xl:text-24 font-interfaces font-semibold mb-8">{{ $t('experience') }}</p>
                        <p class="max-w-245 font-interfaces text-black-secondary text-center">{{ $t('experienceText') }}</p>
                    </div>
                    <div class="flex flex-col items-center md:border-l lg:border-x border-gray-secondary">
                        <p class="text-38 md:text-42 lg:text-46 xl:text-50 2xl:text-56 leading-150 font-bold text-green-primary mb-10">04</p>
                        <p class="text-18 md:text-18 lg:text-20 xl:text-22 2xl:text-24 font-interfaces font-semibold mb-8">{{ $t('production') }}</p>
                        <p class="max-w-245 font-interfaces text-black-secondary text-center">{{ $t('productionText') }}</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <p class="text-38 md:text-42 lg:text-46 xl:text-50 2xl:text-56 leading-150 font-bold text-green-primary mb-10">0,98</p>
                        <p class="text-18 md:text-18 lg:text-20 xl:text-22 2xl:text-24 font-interfaces font-semibold mb-8">{{ $t('workers') }}</p>
                        <p class="max-w-245 font-interfaces text-black-secondary text-center">{{ $t('workersText') }}</p>
                    </div>
                </div>

                <p class="text-18 font-interfaces">{{ $t('text8') }}</p>
                <div class="grid grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 my-30 lg:my-40">
                    <div class="w-full min-h-180 lg:min-h-270 col-span-2 lg:col-span-1 row-span-2">
                        <base-image :src="data.image4" class="w-full h-full object-cover object-center" />
                    </div>
                    <div class="w-full min-h-180 lg:min-h-270 col-span-2">
                        <base-image :src="data.image5" class="w-full h-full object-cover object-center" />
                    </div>
                    <div class="w-full min-h-180 lg:min-h-270">
                        <base-image :src="data.image6" class="w-full h-full object-cover object-center" />
                    </div>
                    <div class="w-full min-h-180 lg:min-h-270">
                        <base-image :src="data.image7" class="w-full h-full object-cover object-center" />
                    </div>
                </div>
                <p class="text-18 font-interfaces">Торговая марка AMINA™ начала свой путь с 1995 года. На сегодняшний день наша компания достигла значительных успехов: AMINA™- это состоявшийся бренд, который представлен коллекциями мужского нижнего белья. Отличительной особенностью нашей компании является то, что мы осуществляем весь спектр работ, начиная от производства трикотажного полотна и заканчивая реализацией готовой продукции. В нашем ассортименте нижнего белья Вы всегда найдете всё, что нужно современному мужчине: майки, безрукавки, трусов различных видов и многое другое. Они эстетичны, удобны и изготовлены из натурального хлопка.</p>
            </div>


            <NasipaCard />
        </div>
    </div>
</template>


<script>
import axios from 'axios'
import PageTitle from '~/components/PageTitle.vue';


export default {
    components: {
        PageTitle,
    },

    data() {
        return {
            data: {},
        }
    },

    methods: {
        async getImages() {
            const response = await axios.get('https://www.figleaf.uz/api/v1/image');
            this.data = response.data;
        },
    },

    mounted() {
        this.getImages();
    }
}
</script>


<style scoped>
    .nasipa {
        font-size: 120px;
        color: rgb(56, 255, 45);
    }




    @media (max-width: 1024px) {
        .nasipa {
            font-size: 80px;
        }
    }

    @media (max-width: 768px) {
        .nasipa {
            font-size: 56px;
        }
    }
</style>