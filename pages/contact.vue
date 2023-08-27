<template>
    <div class="py-60 bg-white">
        <page-title name="Связатся с нами" />
        <section-one />
    </div>
</template>



<script>
import axios from 'axios'
import SectionOne from '../components/contact/SectionOne.vue';

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