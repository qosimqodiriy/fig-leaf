<template>
    <div class="section_two relative">
        <div class="absolute top-0 left-0 w-full h-full">
            <base-image :src="data.image3" class="w-full h-full object-cover object-center" />
        </div>
        <div class="px-36 md:px-52 lg:px-80 pt-30 lg:pt-60 pb-50 lg:pb-100 relative">
            <h2 class="nasipa text-30 lg:text-38 xl:text-56 leading-100 mb-20 lg:mb-40 uppercase opacity-80 text-white-secondary font-interfaces">Nasipa</h2>
            <h3 class="text-28 lg:text-38 leading-120 max-w-670 font-normal text-white-primary font-babesNeue mb-60 lg:mb-80">{{ $t('text5') }}</h3>

            <NuxtLink to="/products">
                <div class="btn inline-flex cursor-pointer gap-10 items-center py-10 lg:py-16 px-24 lg:px-32 border border-white-primary backdrop-blur-md">
                    <p class="text-18 font-interfaces text-white-primary">{{ $t('wiewProduct') }}</p>
                    <img class="w-24 h-24" src="../assets/icons/arrow-right.png" alt="">
                </div>
            </NuxtLink>
        </div>
    </div>
</template>



<script>
import axios from 'axios'
import BaseImage from './BaseImage.vue'

export default {
  components: { BaseImage },

    data() {
        return {
            data: {},
        }
    },

    methods: {
        async getImages() {
            const response = await axios.get('https://www.figleaf.uz/api/v1/image');
            this.data = response.data;
            console.log(response.data);
        },
    },

    mounted() {
        this.getImages();
    }
}
</script>




<style scoped>
.section_two {
    background: url('../assets/images/bg.png') no-repeat center center;
    background-size: cover;
}

.btn > img {
    transition: 0.5s;
}

.btn:hover > img {
    transform: translateX(5px) scale(1.5, 1.15);
}


@media (max-width: 1024px) {
    .nasipa {
        font-size: 80px;
    }
}

@media (max-width: 768px) {
    .nasipa {
        font-size: 56px;
    }
}
</style>