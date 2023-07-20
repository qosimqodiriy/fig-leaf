<template>
    <div class="py-40">
        <PageTitle :text="$t('product')" :pageName="$t('products')" />
        
        <div class="container">
            <div class="my-40 lg:my-60 2xl:my-80 space-y-40">
                <div class="flex flex-col md:flex-row gap-16 items-start">
                    <div class="w-full md:w-250 p-15 md:p-18 lg:p-22 xl:p-26 2xl:p-30 shrink-0 space-y-16 border border-gray-secondary">
                        <div class="tab_box overflow-hidden" :class="tab_1 == true ? 'tab_active' : 'tab_not_active'">
                            <div class="tab_title flex items-center justify-between gap-10 cursor-pointer"  @click="tab_1 = !tab_1">
                                <p class="text-18 font-medium font-interfaces">{{ $t('baby') }}</p>
                                
                                <img class="w-26 h-26" :class="tab_1 == true ? 'rotate-90' : ''" src="../../assets/icons/arrow-right-s-green.png" alt="">
                            </div>

                            <div class="tab_content ml-5 relative py-6 pl-16 space-y-16 mt-16 border-l border-gray-secondary">
                                <p class="text-18 cursor-pointer font-interfaces">Боксер</p>
                                <p class="text-18 cursor-pointer font-interfaces">Боксер</p>
                            </div>
                        </div>

                        <div class="tab_box overflow-hidden" :class="tab_2 == true ? 'tab_active' : 'tab_not_active'">
                            <div class="tab_title flex items-center justify-between gap-10 cursor-pointer"  @click="tab_2 = !tab_2">
                                <p class="text-18 font-medium font-interfaces">{{ $t('men') }}</p>
                                
                                <img class="w-26 h-26" :class="tab_2 == true ? 'rotate-90' : ''" src="../../assets/icons/arrow-right-s-green.png" alt="">
                            </div>

                            <div class="tab_content ml-5 relative py-6 pl-16 space-y-16 mt-16 border-l border-gray-secondary">
                                <p class="text-18 cursor-pointer font-interfaces">Боксер</p>
                                <p class="text-18 cursor-pointer font-interfaces">Боксер</p>
                            </div>
                        </div>

                        <div class="tab_box overflow-hidden" :class="tab_3 == true ? 'tab_active' : 'tab_not_active'">
                            <div class="tab_title flex items-center justify-between gap-10 cursor-pointer"  @click="tab_3 = !tab_3">
                                <p class="text-18 font-medium font-interfaces">{{ $t('women') }}</p>
                                
                                <img class="w-26 h-26" :class="tab_3 == true ? 'rotate-90' : ''" src="../../assets/icons/arrow-right-s-green.png" alt="">
                            </div>

                            <div class="tab_content ml-5 relative py-6 pl-16 space-y-16 mt-16 border-l border-gray-secondary">
                                <p class="text-18 cursor-pointer font-interfaces">Боксер</p>
                                <p class="text-18 cursor-pointer font-interfaces">Боксер</p>
                            </div>
                        </div>


                    </div>

                    <div class="grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-16">
                        <product-card v-for="card in 5" :key="card" :link="`item_slug`" />
                    </div>
                </div>

                <!-- Pagination -->
                <div>

                </div>
            </div>
        </div>
    </div>
</template>


<script>
import PageTitle from '~/components/PageTitle.vue';
import ProductCard from '~/components/ProductCard.vue';


export default {
    components: {
        PageTitle,
        ProductCard,
    },


    data() {
        return {
            tabActive: 0,
            tab_1: false,
            tab_2: false,
            tab_3: false,
        }
    },

    methods: {
        clickTab(num) {
            this.tabActive = num == this.tabActive ? 0 : num;
        }
    },

    mounted() {
        console.log("Page ochildi");
        console.log(this.$route);
        console.log(this.$router);

        if(this.$route.query.category == "children") {
            this.tab_1 = true;
        } else if(this.$route.query.category == "men") {
            this.tab_2 = true;
        } else if(this.$route.query.category == "women") {
            this.tab_3 = true;
        }
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
    /* height: 27px; */
    max-height: 150px;
    /* background-color: aqua !important; */
}

.tab_box.tab_not_active {
    /* height: 27px; */
    max-height: 27px;
    /* background-color: rgb(251, 0, 255) !important; */
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