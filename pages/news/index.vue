<template>
    <div class="py-60 bg-white">
        <page-title name="Наши Новости" />
        <section-one />
    </div>
</template>



<script>
import axios from 'axios'
import SectionOne from '../../components/news/SetcionOne.vue';

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



<style scoped>
* {
    transition: 0s;
}
</style>