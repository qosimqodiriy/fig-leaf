<template>
    <div class="container">
        <div class="py-60 md:py-72 lg:py-85 xl:py-100 2xl:py-120 space-y-60 lg:space-y-90">
            <div>
                <p class="text-24 lg:text-28 xl:text-32 font-firsNeue mb-24">{{ $t('specialization') }}</p>

                <div class="grid_box flex flex-nowrap gap-16 overflow-x-scroll pb-10">
                    <SpecializationCard v-for="card in 6" :key="card" :num="card" />
                </div>
            </div>


            <NasipaCard />
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
            list: [],
        }
    },

    methods: {
        async getBooks() {
            const res = await axios.get(`http://207.154.207.34:8083/api/v1/products`)
            console.log(res.data);
        },
    },

    mounted() {
        this.getBooks();
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