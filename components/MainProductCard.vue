<template>
    <div class="card w-full min-w-300 lg:min-w-350 max-w-350 lg:max-w-500 p-24 bg-white-secondary cursor-pointer overflow-hidden relative">
        <p class="card_text text-20 md:text-24 font-semibold leading-140 text-black-primary mb-32 lg:mb-40">Майки</p>
        <div class="w-full px-46">
            <img v-if="num == 1" class="card_img max-w-full" src="../assets/images/product_img_1.png" alt="">
            <img v-else-if="num == 2" class="card_img max-w-full" src="../assets/images/product_img_2.png" alt="">
            <img v-else-if="num == 3" class="card_img max-w-full" src="../assets/images/product_img_3.png" alt="">
            <img v-else-if="num == 4" class="card_img max-w-full" src="../assets/images/product_img_4.png" alt="">
            <img v-else class="card_img max-w-full" src="../assets/images/product_img_3.png" alt="">
        </div>


        <!-- <div class="content_box absolute bottom-0 left-0 ring-0 w-full bg-orange-primary px-24 py-20 pt-30">
            <p class="content_box_text mb-10 text-white-primary">Футболки и Безрукавки</p>

            <div class="flex flex-wrap items-center gap-15">
                <p class="px-12 text-14 text-white-primary border border-white-primary">L</p>
                <p class="px-12 text-14 text-white-primary border border-white-primary">XL</p>
                <p class="px-12 text-14 text-white-primary border border-white-primary">XXL</p>
                <p class="px-12 text-14 text-white-primary border border-white-primary">XXXL</p>
            </div>
        </div> -->
    </div>
</template>


<script>
export default {

    props: {
        num: {
            type: Number,
            required: true,
        },
    },
}
</script>


<style scoped>
* {
    transition: 0.5s;
}

.card_img  {
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.7));
}

.content_box {
    transform: translateY(100%);
    background: linear-gradient(180deg, rgba(63, 65, 69, 0) 10%, #313338 100%);
}

.content_box_text {
    text-shadow: 0px 0px 3px rgba(0, 0, 0, 1);
}

.card:hover .card_text {
    transform: translateX(calc(-100% - 24px));
}

.card:hover .card_img {
    transform: scale(1.15) translateY(-30px);
    filter: drop-shadow(8px 8px 10px rgba(0, 0, 0, 0.7));
}

.card:hover .content_box {
    transform: translateY(0px);
}
</style>