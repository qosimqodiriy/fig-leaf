<template>
    <Head>
        <Title>Figleaf | Mahsulotlar</Title>
        
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
        <PageTitle :text="$t('product')" :pageName="$t('products')" />
        
        <div class="container">
            <div class="my-40 lg:my-60 2xl:my-80 space-y-40">
                <div class="flex flex-col lg:flex-row gap-16 items-start">
                    <div class="w-full lg:w-250 p-15 md:p-18 lg:p-22 xl:p-26 2xl:p-30 shrink-0 space-y-16 border border-gray-secondary">
                        <div v-for="(item, index) in category" :key="item.id">
                            <div class="tab_box overflow-hidden" :class="tab == index + 1 ? `tab_box_${item.id} tab_active` : `tab_box_${item.id} tab_not_active`">
                                <div class="tab_title flex items-center justify-between gap-10 cursor-pointer"  @click="categoryClick(item.id); tab = tab == index + 1 ? 0 : index + 1">
                                    <p class="text-18 font-medium font-interfaces" :class="route_category == item.id ? 'text-green-primary' : ''">{{ item.name[$i18n.locale] }}</p>
                                    
                                    <img class="w-26 h-26" :class="tab == index + 1 ? 'rotate-90' : ''" src="../../assets/icons/arrow-right-s-green.png" alt="">
                                </div>
    
                                <div class="tab_content ml-5 relative py-6 pl-16 space-y-16 mt-16 border-l border-gray-secondary">
                                    <p v-for="element in item.type" :key="element" @click="typeCllick(element.id)" class="text-18 cursor-pointer font-interfaces" :class="route_type == element.id ? 'text-green-primary' : ''">{{ element.name[$i18n.locale] }} {{ element.id }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-16 w-full">
                        <product-card v-for="product in products" :key="product.id" :item="product" :link="`item_slug`" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios'
import PageTitle from '~/components/PageTitle.vue';
import ProductCard from '~/components/ProductCard.vue';


export default {
    head() {
        return {
            title: "My title",
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'og-type', property: 'og:type', content: 'website' },
            ]
        }
    },

    components: {
        PageTitle,
        ProductCard,
    },


    data() {
        return {
            tab: 0,
            category: [],
            products: [],
            categoryList: [],
            route_type: '',
            route_category: '',
        }
    },

    methods: {
        async typeCllick(num) {
            this.route_type = num;
            await this.$router.replace({'query': {'category': this.$route.query.category, 'type': num}});
            this.getProducts()
        },

        async categoryClick(num) {
            this.route_type = '';
            let category = document.querySelector(`.tab_box_${num}`);

            this.categoryList.forEach(category => {
                category.style.height = category.children[0].offsetHeight + 'px';
            })

            if(category.classList.contains('tab_active')) {
                this.route_category = '';
                await this.$router.replace(this.$route.path)
                category.style.height = category?.children[0].clientHeight + "px";

                this.getProducts()
            } else {
                this.route_category = num;
                await this.$router.replace({'query': {'category': num}});
                category.style.height = category?.children[0].clientHeight + category?.children[1].clientHeight + 16 + "px";

                this.getProducts()
            }
        },

        async getCategories() {
            const responce = await axios.get('https://www.figleaf.uz/api/v1/categories')
            this.category = responce.data;

            this.category.forEach(item => {
                if(item.id == this.$route.query.category){
                    this.tab = item.id;
                    setTimeout(() => {
                        let category = document.querySelector(`.tab_box_${item.id}`);
                        category.style.height = category.children[0].offsetHeight + category.children[1].offsetHeight + 16 + 'px';
                    }, 100);
                }
            })

            setTimeout(() => {
                this.categoryList = document.querySelectorAll('.tab_box');

                this.categoryList.forEach(category => {
                    category.style.height = category.children[0].offsetHeight + 'px';
                })
            }, 50);
        },

        async getProducts() {
            const responce = await axios.get('https://www.figleaf.uz/api/v1/products', {
                params: {
                    type: this.route_type,
                    category: this.route_category,
                }
            })
            this.products = responce.data;
        }
    },

    mounted() {
        this.getProducts();
        this.getCategories();
    }
}
</script>



<style scoped>
* {
    transition: 0.37s;
}
.tab_box {
    transition: 0.37s ease-in;
}

.tab_box.tab_active {
    /* max-height: 300px; */
}

.tab_box.tab_not_active {
    /* max-height: 27px; */
}

.tab_content::before {
    content: '';
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #EBEBEB;

    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-60%, 0);
}

.tab_content::after {
    content: '';
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #EBEBEB;

    position: absolute;
    left: 0;
    bottom: 0;
    transform: translate(-60%, 0);
}
</style>