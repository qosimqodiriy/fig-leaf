<template>
    <div class="card flex flex-col xl:flex-row items-start xl:items-center justify-between gap-24">
        <div class="flex flex-col lg:flex-row items-start lg:items-center justify-start gap-16 lg:justify-between w-full max-w-600">
            <div class="flex flex-col lg:flex-row items-start lg:items-center gap-16 lg:gap-24 w-full lg:w-auto">
                <div class="flex justify-center w-full lg:w-auto">
                    <router-link :to="`/products/${item.id}`">
                        <div class="w-full h-auto md:w-200 md:h-200 lg:w-110 lg:h-110 p-5 bg-white-secondary">
                            <base-image :src="item.image" class="w-full max-h-full max-w-full" />
                        </div>
                    </router-link>
                </div>

                <div class="">
                    <p class="text-20 lg:text-24 font-babesNeue font-semibold lg:font-bold">{{ item.name[$i18n.locale] }}</p>
                    <p class="font-interfaces text-black-secondary leading-150">Размер: <span class="text-black-primary font-medium">{{ item.size.name }}</span></p>
                </div>
            </div>

            <div class="flex items-center ml-auto lg:ml-0 gap-5 border border-gray-secondary p-4">
                <img class="w-30 h-30 p-3 cursor-pointer hover:bg-white-secondary transition-all duration-300" src="../assets/icons/minus-black.png" alt="">
                <input type="number" value="10" max="1000000" class="text-18 text-center w-80 border-none outline-none" />
                <img class="w-30 h-30 p-3 cursor-pointer hover:bg-white-secondary transition-all duration-300" src="../assets/icons/add-black.png" alt="">
            </div>
        </div>

        <div class="flex flex-row xl:flex-col w-full lg:w-auto justify-between items-end gap-16">
            <div class="p-8 rounded-full transition-all duration-300 hover:bg-gray-secondary border border-gray-secondary">
                <img class="w-24 h-24" src="../assets/icons/delete.png" alt="">
            </div>
            <p class="text-18 md:text-20 font-semibold whitespace-nowrap">{{ formatPrice(item.price) }} sum</p>
        </div>
    </div>
</template>


<script>
import BaseImage from './BaseImage.vue';

export default {
  components: { BaseImage },
    props: {
        item: {
            type: Object,
            required: false,
        },
    },

    data() {
        return {
            products: [],
        }
    },

    methods: {
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



    mounted() {
        console.log(this.item);
    }


}
</script>
