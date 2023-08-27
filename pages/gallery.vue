<template>
    <div class="py-60 bg-white">
        <page-title name="О компания" />
        <section-one />
    </div>
</template>



<script>
import axios from 'axios'
import SectionOne from '../components/gallery/SectionOne.vue';

export default {
    data() {
        return {
            
        }
    },

    components: {
        SectionOne,
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