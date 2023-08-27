<template>
    <div class="py-60 pt-80 lg:pt-100">
        <div class="my_container">

            <div class="max-w-1436 mx-auto space-y-32">
                <ProjectCard v-for="item in 4" :key="item" :index="item" :last="item == 4 ? true : false"></ProjectCard>
            </div>
        </div>
    </div>
</template>



<script>
import ProjectCard from './ProjectCard.vue'

export default {

    components: {
        ProjectCard,
    },

    data() {
        return {
            data: {},
        }
    },

    methods: {
        // async getImages() {
        //     const response = await axios.get('https://www.figleaf.uz/api/v1/image');
        //     this.data = response.data;
        // },
    },

    mounted() {
        // this.getImages();
    }
}
</script>