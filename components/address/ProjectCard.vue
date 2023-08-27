<template>
    <div class="w-full pt-32 grid grid-cols-1 lg:grid-cols-8 gap-24 border-t border-grey_border space-x-reverse" :class="[last ? 'pb-32 border-b' : '', index % 2 == 1 ? 'reverse' : '']">
        <div class="item_1 flex flex-col" :class="index % 2 == 0 ? 'lg:col-span-3' : ''">
            <p class="text-white text-28 md:text-32 lg:text-40 xl:text-50 2xl:text-64 font-interfaces font-medium leading-120 mb-10">Modern City</p>
            <img class="w-40 h-40 object-cover mb-42 lg:mb-auto" src="../../assets/images/project_icon_1.png" alt="">


            <div class="flex items-center gap-24 mb-40">
                <p class="text-24 text-white font-interfaces">Перейти на сайт</p>
                <img class="w-22 h-22" src="../../assets/icons/arrow-up-right.png" alt="">
            </div>
            

            <div class="flex items-center gap-12 flex-wrap">
                <p class="text-14 text-grey_border px-15 md:px-20 py-5 md:py-8 rounded-30 border border-grey_border font-interfaces">Modern City</p>
                <p class="text-14 text-grey_border px-15 md:px-20 py-5 md:py-8 rounded-30 border border-grey_border font-interfaces">строительная компания</p>
                <p class="text-14 text-grey_border px-15 md:px-20 py-5 md:py-8 rounded-30 border border-grey_border font-interfaces">2023</p>
            </div>
        </div>

        <div class="item_2 w-full h-full overflow-hidden relative" :class="index % 2 == 0 ? 'lg:col-span-5' : ''">
            <div class="relative w-full h-250 md:h-400 lg:h-500 overflow-hidden">
                <img class="swiper_img absolute top-0 left-0 w-full h-full max-h-full object-cover object-center" :class="active == 0 ? 'active' : 'not_active'" src="../../assets/images/img_3.png" alt="">
                <img class="swiper_img absolute top-0 left-0 w-full h-full max-h-full object-cover object-center" :class="active == 1 ? 'active' : 'not_active'" src="../../assets/images/img_4.png" alt="">
                <img class="swiper_img absolute top-0 left-0 w-full h-full max-h-full object-cover object-center" :class="active == 2 ? 'active' : 'not_active'" src="../../assets/images/img_5.png" alt="">
                <img class="swiper_img absolute top-0 left-0 w-full h-full max-h-full object-cover object-center" :class="active == 3 ? 'active' : 'not_active'" src="../../assets/images/img_6.png" alt="">
            </div>

            <div @click="prevClick()" class="change_btn absolute z-20 top-50% left-25 -translate-y-50% w-40 md:w-56 h-40 md:h-56 cursor-pointer flex items-center justify-center rounded-full border border-grey_border bg-colour-red">
                <img class="w-24 h-24" src="../../assets/icons/arrow-left-white.png" alt="">
            </div>

            <div @click="nextClick()" class="change_btn absolute z-20 top-50% right-25 -translate-y-50% w-40 md:w-56 h-40 md:h-56 cursor-pointer flex items-center justify-center rounded-full border border-grey_border bg-colour-red">
                <img class="w-24 h-24" src="../../assets/icons/arrow-right-white.png" alt="">
            </div>
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
        index: {
            type: Number,
            required: true,
        },
    },

    data() {
        return {
            active: 0,
            images: [
                'kwlnvl',
                'kwlnvl',
                'kwlnvl',
                'kwlnvl',
            ],
        }
    },

    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        },

        prevClick() {
            console.log("prev");
            this.active = this.active > 0 ? this.active - 1 : this.images.length - 1;
        },

        nextClick() {
            console.log("next");
            this.active = this.active < this.images.length - 1 ? this.active + 1 : 0;
        }

    },


}
</script>


<style scoped>
* {
    transition: 0.5s;
}
.reverse .item_1 {
    grid-row: 1 / span 1;
    grid-column: 6 / span 3;
}

.reverse .item_2 {
    grid-row: 1 / span 1;
    grid-column: 1 / span 5;
}


/* Swiper js */
.swiper_img.active {
    opacity: 1;
    z-index: 10;
    transform: scale(1);
}

.swiper_img.not_active {
    opacity: 0;
    z-index: -1;
    transform: scale(0.9);
}

.change_btn {
    backdrop-filter: blur(8px);
    background: rgba(2, 1, 5, 0.16);
}



@media (max-width: 1024px) {
    .reverse .item_1 {
        grid-row: 2 / span 1;
        grid-column: 1 / span 1;
    }

    .reverse .item_2 {
        grid-row: 1 / span 1;
        grid-column: 1 / span 1;
    }
}
</style>