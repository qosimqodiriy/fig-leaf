<template>
    <div class="bg-white">
        <section-two />
    </div>
</template>



<script>
import axios from 'axios'
import SectionTwo from '../../components/news/SectionTwo.vue';

export default {
    data() {
        return {
            
        }
    },

    components: {
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



<style scoped>
* {
    transition: 0s;
}
</style>