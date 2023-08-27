<template>
    <div class="py-60 lg:pt-80 2xl:pt-100">
        <div class="my_container">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-24">
                <news-card v-for="item in 12" :key="item" :index="item" />
            </div>

            <Pagination :active="Math.trunc(Number($route.query.offset)/10) + 1 || 1" :perPage="10" :items="100" @change="(val) => changeQuery('offset', (val - 1)*10)" />
        </div>
    </div>
</template>


<script>
import axios from 'axios'
import NewsCard from './NewsCard.vue';

export default {
    data() {
        return {
            data: [],
            type: '',
            active: 1,
        }
    },

    components: {
        NewsCard,
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