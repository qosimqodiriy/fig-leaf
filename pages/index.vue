<template>
    <SectionOne />
    <SectionTwo />
    <SectionThree />
</template>

<script>
import axios from 'axios'
import Maps from '~/components/Maps.vue'
import SectionOne from '~/components/SectionOne.vue';
import SectionTwo from '~/components/SectionTwo.vue';
import SectionThree from '~/components/SectionThree.vue';
import ContactBox from '~/components/ContactBox.vue';

export default {

    components: {
        Maps,
        SectionOne,
        SectionTwo,
        SectionThree,
        ContactBox,
    },

    methods: {
        async getBooks() {
            const res = await axios.get(`https://mediasaboq.uz/api/v1/books`)
            console.log(res.data);
            console.log("Response");
        },
    },

    mounted() {
        // console.log("Hello index");
    }
}
</script>