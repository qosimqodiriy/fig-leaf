<template>
    <div class="w-full pt-32 grid grid-cols-1 lg:grid-cols-8 gap-24 border-t border-grey_border" :class="last ? 'pb-32 border-b' : ''">
        <div class="lg:col-span-3 flex flex-col">
            <img class="w-56 h-56 object-cover mb-16" src="../../assets/images/project_icon_1.png" alt="">
            
            <div class="flex items-center gap-24 mb-40 lg:mb-auto">
                <p class="text-white text-28 md:text-32 xl:text-40 font-interfaces font-medium leading-120">Modern City</p>
                <img class="w-24 md:w-28 2xl:w-36 h-24 md:h-28 2xl:h-36" src="../../assets/icons/arrow-up-right.png" alt="">
            </div>
            

            <div class="flex items-center gap-12 flex-wrap">
                <p class="text-14 text-grey_border px-15 md:px-20 py-5 md:py-8 rounded-30 border border-grey_border font-interfaces">Modern City</p>
                <p class="text-14 text-grey_border px-15 md:px-20 py-5 md:py-8 rounded-30 border border-grey_border font-interfaces">строительная компания</p>
                <p class="text-14 text-grey_border px-15 md:px-20 py-5 md:py-8 rounded-30 border border-grey_border font-interfaces">2023</p>
            </div>
        </div>

        <div class="card lg:col-span-5 w-full h-full max-h-400 min-h-300 overflow-hidden">
            <img class="w-full h-full max-h-full object-cover object-center" src="../../assets/images/img_3.png" alt="">
        </div>
    </div>
</template>




<script>
export default {
    props: {
        last: {
            type: Boolean,
            required: true,
        },
    },

    data() {
        return {
            products: [],
        }
    },

    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        },
    },


}
</script>


<style scoped>
.card:hover > img {
    transition: 0.5s;
    transform: scale(1.2);
}
</style>