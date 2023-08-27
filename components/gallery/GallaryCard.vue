<template>
    <div class="card w-full min-h-300 max-h-400 overflow-hidden" :class="[index % 3 == 2 && index % 6 != 5 ? 'lg:col-span-5' : 'lg:col-span-3', index % 6 == 5 ? 'lg:col-span-3' : '', index % 6 == 0 || index % 6 == 4 ? 'lg:col-span-4': '', index % 3 == 0 ? 'md:col-span-2' : '']">
        <img class="w-full h-full max-h-full object-cover object-center" src="../../assets/images/img_6.png" alt="">
    </div>
</template>



<script>
export default {
    props: {
        index: {
            type: Number,
            required: true,
        },
    },
}
</script>


<style scoped>
.card:hover img {
    transition: 0.5s;
    transform: scale(1.2);
}
</style>