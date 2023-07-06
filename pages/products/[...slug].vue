<template>
  <div class="container">
    <div class="container_inner max-w-1200 mx-auto py-40 space-y-40 lg:space-y-64">
      <div class="space-y-24">
        <div class="flex items-center flex-wrap gap-5">
            <NuxtLink to="/"><p class="text-18 font-interfaces text-gray-text transition-all duration-300 hover:text-black-primary">Главная</p></NuxtLink>
            <NuxtLink to="/products"><p class="text-18 font-interfaces text-gray-text transition-all duration-300 hover:text-black-primary">/ Продукты</p></NuxtLink>
            <p class="text-18 font-interfaces text-balck-primary">/ Men’s briefs classic</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-7 gap-16 lg:gap-24 2xl:gap-30">

            <div class="md:col-span-3 lg:col-span-5 flex flex-col lg:flex-row gap-10 lg:gap-16 w-full">
              <!-- Examples product -->
              <div class="flex flex-row lg:flex-col gap-10 lg:gap-16">
                <div class="w-full h-60 lg:w-100 lg:h-80 2xl:w-126 2xl:h-100 flex items-center justify-center bg-white-secondary border border-gray-secondary">
                  <img class="max-w-full max-h-full object-cover object-center" src="../../assets/images/product_img_3.png" alt="">
                </div>
                <div class="w-full h-60 lg:w-100 lg:h-80 2xl:w-126 2xl:h-100 flex items-center justify-center bg-white-secondary border border-gray-secondary">
                  <img class="max-w-full max-h-full object-cover object-center" src="../../assets/images/product_img_3.png" alt="">
                </div>
                <div class="w-full h-60 lg:w-100 lg:h-80 2xl:w-126 2xl:h-100 flex items-center justify-center bg-white-secondary border border-gray-secondary">
                  <img class="max-w-full max-h-full object-cover object-center" src="../../assets/images/product_img_3.png" alt="">
                </div>
                <div class="w-full h-60 lg:w-100 lg:h-80 2xl:w-126 2xl:h-100 flex items-center justify-center bg-white-secondary border border-gray-secondary">
                  <img class="max-w-full max-h-full object-cover object-center" src="../../assets/images/product_img_3.png" alt="">
                </div>
              </div>

              <!-- Product Example Img -->
              <div class="w-full h-full max-h-550 border flex items-center justify-center border-gray-secondary p-16">
                <img class="max-w-full max-h-full object-cover object-center" src="../../assets/images/product_img_3.png" alt="">
              </div>
            </div>

            <div class="md:col-span-2">
              <p class="text-24 lg:text-26 xl:text-28 2xl:text-32 font-semibold font-babesNeue">Men’s briefs classic</p>
              <p class="text-black-secondary">Термобельё</p>

              <hr class="border border-gray-secondary mt-16 mb-24">

              <p class="text-18 marker:font-interfaces text-black-secondary mb-16">Цвет: <span class="text-black-primary">Беллы</span></p>
              <div class="flex items-center gap-16 lg:gap-24 mb-24">
                <div v-for="item in 3" :key="item" class="w-50 h-50 lg:w-60 lg:h-60 rounded-full p-2 border transition-all duration-300 cursor-pointer border-green-primary">
                  <div class="w-full h-full rounded-full bg-colour-indigo"></div>
                </div>
              </div>

              <p class="text-18 marker:font-interfaces text-black-secondary mb-16">Размер:</p>
              <div class="flex items-center gap-16 lg:gap-24 mb-24">
                <div v-for="item in 3" :key="item" class="text-18 px-18 py-10 lg:px-24 lg:py-16 rounded-30 border transition-all duration-300 cursor-pointer border-gray-secondary text-black-primary">X</div>
              </div>

              <p class="text-22 md:text-24 lg:text-26 xl:text-28 font-medium mb-16">99 846 216 sum</p>
              <div class="flex items-center justify-center gap-24 py-10 lg:py-16 bg-green-secondary">
                <p class="text-14 font-semibold uppercase text-black-primary font-firsNeue">В Корзину</p>
                <img class="w-20 h-20" src="../../assets/images/basket.png" alt="">
              </div>
            </div>
          </div>
      </div>


      <div class="py-20 md:py-24 lg:py-30 xl:py-36 px-24 md:px-30 lg:px-36 xl:px-48 border border-gray-secondary">
        <p class="text-18 md:text-22 lg:text-24 xl:text-28 2xl:text-32 font-semibold font-firsNeue mb-40">Детали товары</p>

        <div class="max-w-full lg:max-w-600 space-y-16 lg:space-y-24">
          <div class="flex items-end gap-10">
            <p class="text-16 lg:text-18 font-medium font-interfaces leading-150 text-black-secondary whitespace-nowrap">Код</p>
            <p class="line w-full border-b border-gray-secondary border-dashed mb-7"></p>
            <p class="text-16 lg:text-18 font-medium font-interfaces leading-150 whitespace-nowrap">047-Х</p>
          </div>
          <div class="flex items-end gap-10">
            <p class="text-16 lg:text-18 font-medium font-interfaces leading-150 text-black-secondary whitespace-nowrap">Полотно</p>
            <p class="line w-full border-b border-gray-secondary border-dashed mb-7"></p>
            <p class="text-16 lg:text-18 font-medium font-interfaces leading-150 whitespace-nowrap">Рибана</p>
          </div>
          <div class="flex items-end gap-10">
            <p class="text-16 lg:text-18 font-medium font-interfaces leading-150 text-black-secondary whitespace-nowrap">Состав</p>
            <p class="line w-full border-b border-gray-secondary border-dashed mb-7"></p>
            <p class="text-16 lg:text-18 font-medium font-interfaces leading-150 whitespace-nowrap">100% хлопок</p>
          </div>
        </div>
      </div>
    </div>


    <div class="py-24 lg:py-40 mb-40">
      <Recommended />
    </div>
  </div>
</template>


<style scoped>
.container_inner {
  max-width: 1400px !important;
}
</style>