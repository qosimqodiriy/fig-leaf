<template>
    <p class="text-20 md:text-22 lg:text-24 xl:text-28 2xl:text-32 font-semibold font-firsNeue leading-150 mb-24">{{ $t('recommended') }}</p>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-16">
        <product-card v-for="card in 5" :key="card" :link="`item_slug`" />
    </div>
</template>


<script>
import axios from 'axios'

export default {

    data() {
        return {
            list: [],
        }
    },

    methods: {
        async getBooks() {
            const res = await axios.get(`https://mediasaboq.uz/api/v1/books`)
            // console.log(res.data);
            // console.log("Response");
        },
    },

    mounted() {
        // console.log("Hello recommended");
        // this.getBooks();
    }
}
</script>