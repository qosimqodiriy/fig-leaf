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

export default {
    // head() {
    //     return {
    //         title: "My Awesome Site",
    //         meta: [
    //         {
    //             hid: 'description',
    //             name: 'description',
    //             content: 'Kutubxona — bosma va ayrim qoʻlyozma asarlardan ommaviy foydalanishni taʼminlovchi madaniy-maʼrifiy va ilmiy muassasa.'
    //         },
    //         {
    //             hid: 'keywords',
    //             name: 'keywords',
    //             content: 'kutubxona, kitoblar',
    //         },
    //         {
    //             hid: 'og_description',
    //             property: 'og:description',
    //             content: 'kutubxona, kitoblar',
    //         },
    //         {
    //             hid: 'og_url',
    //             property: 'og:url',
    //             content: '/kutubxona',
    //         },
    //         { hid: 'og:title', property: 'og:title', content: "My Awesome Site" },
    //             { hid: 'description', name: 'description', content: this.post.body },
    //             { hid: 'og:title', property: 'og:title', content: this.post.title },
    //             { hid: 'og:description', property: 'og:description', content: this.post.body },
    //             { hid: 'og:image', property: 'og:image', content: this.post.image },
    //             { hid: 'og:url', property: 'og:url', content: `https://example.com/blog/${this.post.id}` },
    //             { hid: 'article:published_time', property: 'article:published_time', content: this.post.date },
    //             { hid: 'article:author', property: 'article:author', content: this.post.author },
    //             { hid: 'article:section', property: 'article:section', content: this.post.category }
    //         ]
    //     }
    // },

    components: {
        Maps,
        SectionOne,
        SectionTwo,
        SectionThree,
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