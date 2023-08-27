<template>
    <div class="py-60 lg:pt-80 2xl:pt-100">
        <div class="my_container">
            <div class="flex flex-wrap items-center justify-center gap-16 mb-32">
                <p @click="typeChange(1, '')" class="px-20 md:px-24 lg:px-28 xl:px-32 py-8 md:py-10 xl:py-12 rounded-20 lg:rounded-30 border cursor-pointer" :class="active == 1 ? 'border-facebook-blue text-facebook-blue' : 'border-grey_border text-black'">Все Галерея</p>
                <p @click="typeChange(2, 'image')" class="px-20 md:px-24 lg:px-28 xl:px-32 py-8 md:py-10 xl:py-12 rounded-20 lg:rounded-30 border cursor-pointer" :class="active == 2 ? 'border-facebook-blue text-facebook-blue' : 'border-grey_border text-black'">Фотогалерея</p>
                <p @click="typeChange(3, 'video')" class="px-20 md:px-24 lg:px-28 xl:px-32 py-8 md:py-10 xl:py-12 rounded-20 lg:rounded-30 border cursor-pointer" :class="active == 3 ? 'border-facebook-blue text-facebook-blue' : 'border-grey_border text-black'">Видеогалерея</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-11 gap-24">
                <gallery-card v-for="item in 12" :key="item" :index="item" />
            </div>

            <Pagination :active="Math.trunc(Number($route.query.offset)/10) + 1 || 1" :perPage="10" :items="100" @change="(val) => changeQuery('offset', (val - 1)*10)" />
            <!-- <Pagination :active="Math.trunc(Number($route.query.offset)/10) + 1 || 1" :perPage="10" :items="items.count" @change="(val) => changeQuery({key: 'offset', value: (val - 1)*10})" /> -->
        </div>
    </div>
</template>


<script>
import axios from 'axios'
// import Pagination from '../Pagination.vue';
import GalleryCard from './GallaryCard.vue';

export default {
    data() {
        return {
            data: [],
            type: '',
            active: 1,
        }
    },

    components: {
        // Pagination,
        GalleryCard,
    },

    methods: {
        click() {
            window.scrollTo(0, 0);
        },

        async typeChange(number, type) {
            this.type = type;
            this.active = number;

            if(type != '')  await this.$router.replace({'query': {'type': type}});
            else await this.$router.replace(this.$route.path)
        },

        async changeQuery(key, value) {
            const query = { ...this.$route.query }
            query[key] = String(value)
            await this.$router.replace({ query })
            console.log("Get data");
            // getItems()
        }
    },

    mounted() {
        if(this.$route.query.type == '') {
            this.active = 1;
            this.type = '';
        } else if(this.$route.query.type == 'image') {
            this.active = 2;
            this.type = 'image';
        } else if(this.$route.query.type == 'video') {
            this.active = 3;
            this.type = 'video';
        }
    }
}
</script>