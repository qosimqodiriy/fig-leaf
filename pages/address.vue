<template>
    <div class="py-60 bg-black">
        <page-title name="Наши направления" />
        <section-one />
    </div>
</template>



<script>
import axios from 'axios';
import SectionOne from '../components/address/SectionOne.vue';

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