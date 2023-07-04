<template>
    <div class="container">
        <div class="content_box px-30 md:px-40 lg:px-50 xl:px-60 2xl:px-72 py-40 xl:py-50 2xl:py-60 pb-60 bg-black-primary">
            <p class="text-22 md:text-28 lg:text-38 xl:text-46 2xltext-56 leading-100 font-semibold text-white-primary font-babesNeue mb-10">{{ text }}</p>
            <div class="flex items-center gap-5">
                <NuxtLink to="/"><p class="text-18 font-interfaces text-gray-text transition-all duration-300 hover:text-white-primary">Главная</p></NuxtLink>
                <p class="text-18 font-interfaces text-white-primary">/ {{ pageName }}</p>
            </div>
        </div>
    </div>
</template>


<script>
export default {

    props: {
        text: {
            type: String,
            required: true,
        },
        pageName: {
            type: String,
            required: true,
        },
    },
}
</script>



<style scoped>
.content_box {
    background: #1D2B1E url('../assets/images/leaf.png') no-repeat calc(100% - 100px) center;
    background-size: 450px !important;
}


@media (max-width: 768px) {
    .content_box {
        background: #1D2B1E url('../assets/images/leaf2.png') no-repeat right bottom;
        background-size: 200px !important;
    }
}
</style>