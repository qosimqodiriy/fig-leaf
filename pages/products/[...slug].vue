<template>
  <div class="container">
    <div v-if="product && product.id" class="container_inner max-w-1200 mx-auto py-40 space-y-40 lg:space-y-64">
      <div class="space-y-24">
        <div class="flex items-center flex-wrap gap-5">
            <NuxtLink to="/"><p class="text-18 font-interfaces text-gray-text transition-all duration-300 hover:text-black-primary">{{ $t('home') }}</p></NuxtLink>
            <NuxtLink to="/products"><p class="text-18 font-interfaces text-gray-text transition-all duration-300 hover:text-black-primary">/ {{ $t('products') }}</p></NuxtLink>
            <p class="text-18 font-interfaces text-balck-primary">/ {{ product.name[$i18n.locale] }}</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-7 gap-16 lg:gap-24 2xl:gap-30">

            <div class="md:col-span-3 lg:col-span-5 flex flex-col lg:flex-row gap-10 lg:gap-16 w-full">
              <!-- Examples product -->
              <div class="flex flex-row lg:flex-col gap-10 lg:gap-16">
                <div v-for="(item, index) in product.colors" :key="item.id">
                  <div class="w-60 h-60 lg:w-80 lg:h-80 2xl:w-100 2xl:h-100 flex items-center justify-center cursor-pointer rounded-3 bg-white-primary border" :class="active == index + 1 ? 'opacity-100 border-colour-green' : 'opacity-70 border-gray-secondary'" @click="active = active != index + 1 ? index + 1 : 0">
                    <base-image :src="item.image" class="max-w-full max-h-full" />
                  </div>
                </div>
              </div>

              <!-- Product Example Img -->
              <div class="w-full h-full max-h-550 border flex items-center justify-center border-gray-secondary relative p-16">
                <base-image v-if="active == 0" :src="product.image" :cover="true" />
                <div v-for="(item, index) in product.colors" :key="item.id">
                  <base-image v-if="active == index + 1" :src="item.image" :cover="true" />
                </div>
              </div>
            </div>

            <div class="md:col-span-2">
              <p class="text-24 lg:text-26 xl:text-28 2xl:text-32 font-semibold font-babesNeue">{{ product.name[$i18n.locale] }}</p>
              <p class="text-black-secondary">Термобельё</p>

              <hr class="border border-gray-secondary mt-16 mb-24">

              <p class="text-18 marker:font-interfaces text-black-secondary mb-16">Цвет: <span class="text-black-primary">Беллы</span></p>
              <div class="flex items-center gap-16 lg:gap-24 mb-24">
                <div v-for="item in product.colors" :key="item.id" class="w-50 h-50 lg:w-60 lg:h-60 rounded-full p-2 border transition-all duration-300 cursor-pointer shadow-md" :style="`border: 1px solid ${item.hex};`">
                  <div class="w-full h-full rounded-full" :style="`background-color: ${item.hex};`"></div>
                </div>
              </div>

              <p class="text-18 marker:font-interfaces text-black-secondary mb-16">Размер:</p>
              <div v-if="product && product.sizes" class="flex items-center gap-16 lg:gap-24 mb-24">
                <p v-for="item in product.sizes" :key="item" @click="sizeClick(item)" class="text-18 px-18 py-10 lg:px-24 lg:py-16 rounded-30 border cursor-pointer" :class="product.size && product.size.id == item.id ? 'border-colour-green text-colour-green text_shadow' : 'border-gray-secondary text-black-primary'">{{ item.name }}</p>
              </div>

              <p class="text-22 md:text-24 lg:text-26 xl:text-28 font-medium mb-16">{{ formatPrice('234324') }} sum</p>

              <div class="flex items-center justify-center cursor-pointer gap-24 py-10 lg:py-16 bg-green-secondary" @click="addBacket(product)">
                <p class="text-14 font-semibold uppercase text-black-primary font-firsNeue">{{ $t('backet') }}</p>
                <img class="w-20 h-20" src="../../assets/images/basket.png" alt="">
              </div>
            </div>
          </div>
      </div>


      <!-- Description -->
      <div class="py-20 md:py-24 lg:py-30 xl:py-36 px-24 md:px-30 lg:px-36 xl:px-48 border border-gray-secondary">
        <p class="text-18 md:text-22 lg:text-24 xl:text-28 2xl:text-32 font-semibold font-firsNeue mb-40">{{ $t('productDetali') }}</p>

        <div class="max-w-full lg:max-w-600 space-y-16 lg:space-y-24">
          <div class="flex items-end gap-10">
            <p class="text-16 lg:text-18 font-medium font-interfaces leading-150 text-black-secondary whitespace-nowrap">{{ $t('productDetaliText1') }}</p>
            <p class="line w-full border-b border-gray-secondary border-dashed mb-7"></p>
            <p class="text-16 lg:text-18 font-medium font-interfaces leading-150 whitespace-nowrap">{{ product.details.code }}</p>
          </div>
          <div class="flex items-end gap-10">
            <p class="text-16 lg:text-18 font-medium font-interfaces leading-150 text-black-secondary whitespace-nowrap">{{ $t('productDetaliText2') }}</p>
            <p class="line w-full border-b border-gray-secondary border-dashed mb-7"></p>
            <p class="text-16 lg:text-18 font-medium font-interfaces leading-150 whitespace-nowrap">{{ product.details.material }}</p>
          </div>
          <div class="flex items-end gap-10">
            <p class="text-16 lg:text-18 font-medium font-interfaces leading-150 text-black-secondary whitespace-nowrap">{{ $t('productDetaliText3') }}</p>
            <p class="line w-full border-b border-gray-secondary border-dashed mb-7"></p>
            <p class="text-16 lg:text-18 font-medium font-interfaces leading-150 whitespace-nowrap">{{ product.details.structure }}</p>
          </div>
        </div>
      </div>
    </div>


    <div class="py-24 lg:py-40 mb-40">
      <!-- <Recommended /> -->
      <p class="text-20 md:text-22 lg:text-24 xl:text-28 2xl:text-32 font-semibold font-firsNeue leading-150 mb-24">{{ $t('recommended') }}</p>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-16">
        <product-card v-for="item in product.suggests" :key="item.id" :item="item" />
      </div>
    </div>
  </div>
</template>



<script>
import axios from 'axios'
import BaseImage from '~/components/BaseImage.vue';
import { OPEN_NOTIFICATION, _toast } from '~/store';

export default {
  components: { BaseImage },
  data() {
    return {
      active: 0,
      product: {},
      products: [],
    }
  },

  methods: {
    addBacket(item) {
      if(this.product.size != null) {
        if(localStorage.getItem('products')) {
          let bool = true;
          this.products = JSON.parse(localStorage.getItem('products'));
  
          this.products.forEach(product => {
            if(item.id == product.id && item.size.id == product.size.id) {
              bool = false;
            }
          })
  
          if(bool) {
            item.count = 10;
            this.products.push(item);
            OPEN_NOTIFICATION("Savatga qo'shildi", 'success');
            localStorage.setItem('products', JSON.stringify(this.products));
          } else {
            OPEN_NOTIFICATION('Bu mahsulot savatda bor', 'varning');
          }
        } else {
          this.products.push(item);
          localStorage.setItem('products', JSON.stringify(this.products));
        }
      } else {
        OPEN_NOTIFICATION('Razmer tanlanmagan', 'varning');
      }
    },

    sizeClick(item) {
      this.product.size = item;
    },

    async getProduct() {
      const responce = await axios.get(`https://www.figleaf.uz/api/v1/product/${this.$route.params.slug[0]}`)
      this.product = responce.data;
      // console.log("Product");
      // console.log(responce.data);
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

  mounted() {
    this.getProduct();
  }
}
</script>





<style scoped>* {
  transition: 0.37s;
}

.main_img {
  max-width: 100% !important;
  max-height: 100% !important;
}

.text_shadow {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 1);
}

.container_inner {
  max-width: 1400px !important;
}</style>