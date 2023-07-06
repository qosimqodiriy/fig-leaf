<template>
    
    <div class="card border border-gray-secondary flex flex-col">
        <NuxtLink :to="link ? `/products/${link}` : ''" @click="link ? clicked() : null">
            <div class="content p-24 bg-white-secondary">
                <p class="title text-20 lg:text-22 xl:text-24 2xl:text-28 font-babesNeue">Men’s briefs classic</p>
                <p class="text-black-secondary font-interfaces mb-8">Мужская одежда</p>
                <p class="text-18 lg:text-20 text-black-primary font-semibold">99 846 216 sum</p>
            </div>
        </NuxtLink>
        

        <div class="flex items-center justify-center flex-1 w-full relative bg-white-primary">
            <NuxtLink :to="link ? `/products/${link}` : ''" @click="link ? clicked() : null">
                <img class="w-full max-w-full px-20 lg:px-30 py-15 lg:py-20" src="../assets/images/product_img_3.png" alt="">
            </NuxtLink>

            <div class="absolute top-0 right-0 -translate-x-50% -translate-y-50% w-56 h-56 flex items-center justify-center rounded-full border border-gray-secondary bg-white-primary cursor-pointer">
                <img class="w-24 h-24" src="../assets/images/basket.png" alt="">
            </div>
        </div>
    </div>
</template>


<script>
export default {

    props: {
        link: {
            type: String,
            required: false,
        },
    },

    methods: {
        clicked() {
            window.scrollTo(0, 0);
            console.log("clicked");
        }
    }
}
</script>


<style scoped>
* {
    transition: 0.37s;
}

.card:hover .title {
    color: #009A10;
}
</style>