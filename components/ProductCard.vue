


<template>
    <NuxtLink :to="`/products/${item.id}`" @click="scrollToTop()" class="card border border-gray-secondary flex flex-col">
        <div class="content p-24 bg-white-secondary">
            <p class="title text-20 lg:text-22 xl:text-24 2xl:text-28 font-babesNeue">{{ item && item.name && item.name[$i18n.locale] ? item.name[$i18n.locale] : '' }}</p>
            <p class="text-black-secondary font-interfaces mb-8">{{ item && item.category && item.category.name[$i18n.locale] }}</p>
            <p class="price text-18 lg:text-20 text-black-primary font-semibold">{{ formatPrice(item && item.price ? item.price : '') }} sum</p>
        </div>
        

        <div class="flex items-center justify-center flex-1 w-full relative bg-white-primary">
            <base-image v-if="item && item.image" :src="item && item.image ? item.image : ''" class="w-full max-w-full px-20 lg:px-30 py-15 lg:py-20" />
            <img v-else class="w-full max-w-full px-20 lg:px-30 py-15 lg:py-20" src="../assets/images/product_img_3.png" alt="">

            <!-- <div @click="addBacket(item)" class="absolute top-0 right-0 -translate-x-50% -translate-y-50% w-56 h-56 flex items-center justify-center rounded-full border border-gray-secondary bg-white-primary cursor-pointer">
                <img class="w-24 h-24" src="../assets/images/basket.png" alt="">
            </div> -->
        </div>
    </NuxtLink>
</template>


<script>
import BaseImage from './BaseImage.vue';

export default {
  components: { BaseImage },

    props: {
        item: {
            type: Object,
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

        addBacket(item) {
            if(localStorage.getItem('products')) {
                console.log("Bor");
                let bool = true;
                this.products = JSON.parse(localStorage.getItem('products'));

                this.products.forEach(product => {
                    if(item.id == product.id) {
                        bool = false;
                    }
                })

                if(bool) {
                    console.log("Yangi qo'shildi");
                    this.products.push(item);
                    localStorage.setItem('products', JSON.stringify(this.products));
                } else {
                    console.log("Bu product bor ekan");
                }

                console.log(JSON.parse(localStorage.getItem('products')));
            } else {
                this.products.push(item);
                localStorage.setItem('products', JSON.stringify(this.products));

                console.log(JSON.parse(localStorage.getItem('products')));
            }
        },

        formatPrice(price) {
            if (price == 0) {
                return price
            } else {

                let myArray = [];
                let num = price.toString().split('');
                num = num.reverse();

                for (let i = 0; i < num.length; i++) {
                if (i > 0 && i % 3 == 0) {
                    myArray.unshift(' ')
                }
                myArray.unshift(num.slice(i, i + 1))
                }

                return myArray.join('');
            }
        }
    },


}
</script>


<style scoped>
* {
    transition: 0.37s;
}

.card:hover .price,
.card:hover .title {
    color: #009A10;
}
</style>