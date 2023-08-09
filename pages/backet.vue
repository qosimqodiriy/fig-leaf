<template>
    <Head>
        <Title>Figleaf | Savat</Title>
        
        <meta property="type" content="website">
        <meta property="og:type" content="website">
        
        <meta property="url" content="https://www.figleaf.uz">
        <meta property="og:url" content="https://www.figleaf.uz">
        
        <meta property="image" content="https://www.figleaf.uz/files/images/2023-08-06-15-38-23-505.png">
        <meta property="og:image" content="https://www.figleaf.uz/files/images/2023-08-06-15-38-23-505.png">
        
        <meta name="description" content="Fig Leafning asosiy maqsadi mijozlar uchun qulaylik yaratishdir" />
        <meta name="og:description" content="Fig Leafning asosiy maqsadi mijozlar uchun qulaylik yaratishdir" />

        <meta name="keywords" content="Figleaf, Figleaf uz, figleaf, Kiyimlar, Erkaklar kiyimlari, Ayollar kiyimlari, Bolalar kiyimlari">
        <meta name="og:keywords" content="Figleaf, Figleaf uz, figleaf, Kiyimlar, Erkaklar kiyimlari, Ayollar kiyimlari, Bolalar kiyimlari">
    </Head>

    <div class="py-40">
        <PageTitle text="Наши корзина" pageName="backet" />
        <div class="container">
            <div v-if="products && products.length > 0" class="grid md:grid-cols-2 lg:grid-cols-3 items-start gap-6 py-40 md:py-50 lg:py-60 xl:py-70">
                <!-- Mahsulotlar ro'yxati -->
                <div class="space-y-15 p-20 md:p-24 lg:p-28 xl:p-32 border border-gray-secondary lg:col-span-2">
                    <div v-for="(item, index) in products" :key="item.id">
                        <div class="card pb-15 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-24">
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
                                        <p class="text-20 lg:text-24 font-babesNeue font-semibold lg:font-bold">count: {{ item.count }}</p>
                                        <p class="font-interfaces text-black-secondary leading-150">Размер: <span class="text-black-primary font-medium">{{ item.size.name }}</span></p>
                                    </div>
                                </div>

                                <div class="flex items-center ml-auto lg:ml-0 gap-5 border border-gray-secondary p-4">
                                    <img @click="minus(index, item)" class="w-30 h-30 p-3 cursor-pointer hover:bg-white-secondary transition-all duration-300" src="../assets/icons/minus-black.png" alt="">
                                    <p class="text-18 text-center w-60">{{ item.count }}</p>
                                    <img @click="plus(index, item)" class="w-30 h-30 p-3 cursor-pointer hover:bg-white-secondary transition-all duration-300" src="../assets/icons/add-black.png" alt="">
                                </div>
                            </div>

                            <div class="flex flex-row xl:flex-col w-full lg:w-auto justify-between items-end gap-16">
                                <div @click="deleteItem(index, item)" class="p-8 cursor-pointer rounded-full transition-all duration-300 hover:bg-gray-secondary border border-gray-secondary">
                                    <img class="w-24 h-24" src="../assets/icons/delete.png" alt="">
                                </div>
                                <p class="text-18 md:text-20 font-semibold whitespace-nowrap">{{ formatPrice(item.price * item.count) }} sum</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Rasmiylashtirish -->
                <div class="p-20 md:p-24 lg:p-28 xl:p-32 border border-gray-secondary">
                    <p class="text-18 md:text-20 lg:text-22 xl:text-24 font-semibold font-interfaces mb-20 lg:mb-32">{{ $t('order') }}</p>
                    <div class="flex items-center justify-between mb-24">
                        <p class="text-16 md:text-18 font-interfaces text-black-secondary">{{ $t('ordercount') }}, {{ products && products.length ? products.length : 0 }} {{ $t('count') }}</p>
                        <p class="text-16 md:text-18 font-interfaces text-black-dark font-medium">{{ formatPrice(totalPrice) }} so'm</p>
                    </div>
                    <!-- <hr class="w-full border border-gray-secondary my-24">
                    <div class="flex items-center justify-between mb-20 lg:mb-32">
                        <p class="text-18 md:text-20 font-interfaces text-black-secondary font-medium">{{ $t('ordercount') }}, 3 {{ $t('count') }}</p>
                        <p class="text-20 md:text-24 font-interfaces text-green-primary font-semibold">4 000 000 so'm</p>
                    </div> -->
                    <button @click="createOrder()" :disabled="loading ? true : false" class="text-14 block w-full cursor-pointer uppercase font-semibold font-firsNeue text-black-dark leading-150 py-10 md:py-12 lg:py-16 text-center bg-green-secondary">{{ $t('checkout') }}</button>
                </div>
            </div>
            <p v-else class="text-32 text-gray-text pt-40">Sizning savatingiz bo'sh</p>

            <hr v-if="products && products.length > 0" class="border border-gray-secondary my-24 lg:my-40">

            <login-modal v-if="modal" @close="modal = false" />

            <div class="my-24 lg:my-40">
                <!-- <Recommended /> -->
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios'
import { OPEN_NOTIFICATION } from '~/store';
import PageTitle from '~/components/PageTitle.vue';
import BasketItem from '~/components/BasketItem.vue';
import ProductCard from '~/components/ProductCard.vue';
import Recommended from '~/components/Recommended.vue';


export default {
    components: {
        PageTitle,
        BasketItem,
        ProductCard,
        Recommended,
    },

    data() {
        return {
            modal: false,
            products: [],
            totalPrice: 0,
            loading: false,
        }
    },



    methods: {
        plus(index) {
            this.products[index].count = Math.round(this.products[index].count / 10) * 10;
            if(this.products[index].count < 100) {
                this.products[index].count += 10;
            } else if(this.products[index].count < 300) {
                this.products[index].count += 20;
            } else {
                this.products[index].count += 50;
            }

            this.totalPriceCalculator()
            localStorage.setItem('products', JSON.stringify(this.products));
        },

        minus(index) {
            if(this.products[index].count > 10) {
                this.products[index].count = Math.round(this.products[index].count / 10) * 10;
            } else this.products[index].count = 10;


            if(this.products[index].count > 10) {
                if(this.products[index].count < 100) {
                    this.products[index].count -= 10;
                } else if(this.products[index].count < 300) {
                    this.products[index].count -= 20;
                } else {
                    this.products[index].count -= 50;
                }

                this.totalPriceCalculator()
                localStorage.setItem('products', JSON.stringify(this.products));
            } else {
                OPEN_NOTIFICATION("Mahsulot 10tadan kam bo'lmasligi kerak", 'varning');
            }
        },

        deleteItem(index) {
            this.products.splice(index, 1);
            this.totalPriceCalculator()
            localStorage.setItem('products', JSON.stringify(this.products));
        },

        async createOrder() {
            let name = localStorage.getItem('name');
            let email = localStorage.getItem('email');
            let phone = localStorage.getItem('phone');

            if(name && email && phone) {
                this.loading = true;
                axios.post('https://www.figleaf.uz/api/v1/order', {
                    name: name,
                    phone: phone,
                    email: email,
                    message: '',
                    products: this.products
                })
                .then(response => {
                    this.products = [];
                    this.loading = false;
                    sessionStorage.removeItem('products');
                    OPEN_NOTIFICATION('Buyurtmangiz tasdiqlandi', 'success')
                    localStorage.setItem('products', JSON.stringify(this.products));
                })
                .catch(error => {
                    this.loading = false;
                    OPEN_NOTIFICATION('Buyurtmangiz taqdiqlanmadi', 'error')
                });


            } else {
                this.modal = true;
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
        },

        totalPriceCalculator() {
            this.totalPrice = 0;
            this.products.forEach(item => {
                this.totalPrice += item.price * item.count;
            })
        }
    },

    mounted() {
        if(localStorage.getItem('products')) {
            this.products = JSON.parse(localStorage.getItem('products'));
            this.totalPriceCalculator()
        } else {
            // console.log("Savat bo'sh");
        }
    }
}
</script>


<style scoped>
.card {
    border-bottom: 1px solid #EBEBEB;
}
</style>