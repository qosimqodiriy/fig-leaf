<template>
    <div class="py-60 bg-black">
        <page-title name="О компания" />
        <section-one color="white" bg_color="black" />
        <section-two></section-two>
        
    </div>
</template>



<script>
import axios from 'axios'
import SectionOne from '../components/index/SectionTwo.vue';
import SectionTwo from '../components/about/SectionTwo.vue';

export default {
    data() {
        return {
            
        }
    },

    components: {
        SectionOne,
        SectionTwo,
    },

    methods: {
        click() {
            window.scrollTo(0, 0);
        },
    },

    mounted() {
        
    }
}
</script>