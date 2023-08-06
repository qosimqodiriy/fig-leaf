<template>
    <div class="container">
        <div class="py-60 md:py-72 lg:py-85 xl:py-100 2xl:py-120 space-y-60 lg:space-y-90">
            <div>
                <p class="text-24 lg:text-28 xl:text-32 font-firsNeue mb-24">{{ $t('specialization') }}</p>

                <div class="grid_box flex flex-nowrap gap-16 overflow-x-scroll pb-10">
                    <SpecializationCard v-for="(item, index) in banners" :key="item.id" :item="item" :num="index" />
                </div>
            </div>


            <div class="">
                <NasipaCard />
                <contact-box />
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios'
import SpecializationCard from './SpecializationCard.vue';

export default {
    components: {
        SpecializationCard,
    },


    data() {
        return {
            banners: [],
        }
    },

    methods: {
        async getBanners() {
            const response = await axios.get('https://www.figleaf.uz/api/v1/banners');
            this.banners = response.data;
            // console.log("Banners");
            // console.log(response.data);
        },
    },

    mounted() {
        this.getBanners();
    }
}
</script>



<style scoped>
    .nasipa {
        font-size: 120px;
        color: rgb(56, 255, 45);
    }
    .grid_box::-webkit-scrollbar {
        height: 3px;
        background-color: #F5F5F7;
    }

    .grid_box::-webkit-scrollbar-thumb {
        height: 3px;
        border-radius: 2px;
        background-color: #DADAE2;
    }
</style>