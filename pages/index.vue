<template>
    <Head>
        <Title>Figleaf</Title>
        
        <meta property="type" content="website">
        <meta property="og:type" content="website">
        
        <meta property="url" content="https://www.figleaf.uz">
        <meta property="og:url" content="https://www.figleaf.uz">
        
        <meta property="image" content="https://www.figleaf.uz/files/images/2023-08-06-15-38-23-505.png">
        <meta property="og:image" content="https://www.figleaf.uz/files/images/2023-08-06-15-38-23-505.png">
        
        <meta name="description" content="Fig Leafning asosiy maqsadi mijozlar uchun qulaylik yaratishdir" />
        <meta name="og:description" content="Fig Leafning asosiy maqsadi mijozlar uchun qulaylik yaratishdir" />

        <meta name="keywords" content="Figleaf, Figleaf uz, figleaf, Kiyimlar, Erkaklar kiyimlari, Ayollar kiyimlari, Bolalar kiyimlari">
        <meta name="og:keywords" content="Figleaf, Figleaf uz, figleaf, Kiyimlar, Erkaklar kiyimlari, Ayollar kiyimlari, Bolalar kiyimlari">
    </Head>

    <SectionOne />
    <SectionTwo :image_list="data" />
    <SectionThree :img="data.image3" />
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