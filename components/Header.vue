<template>
    <div class="py-10 lg:py-15 border-b border-white-secondary">
        <div class="container flex items-center justify-between">
            <div class="flex items-center gap-20 md:gap-30 lg:gap-40 xl:gap-64 2xl:gap-80">
                <NuxtLink to="/">
                    <div class="max-w-82 max-h-58 w-60 md:w-82 md:h-58">
                        <img class="max-w-full max-h-full" src="@/assets/images/Logo.png" alt="">
                    </div>
                </NuxtLink>

                <NuxtLink to="/"><p class="text-18 font-medium leading-150 hidden md:block">Главная</p></NuxtLink>
                <NuxtLink to="/products"><p class="text-18 font-medium leading-150 hidden md:block">Продукты</p></NuxtLink>
                <NuxtLink to="/about"><p class="text-18 font-medium leading-150 hidden md:block">О нас</p></NuxtLink>
                <NuxtLink to="/contact"><p class="text-18 font-medium leading-150 hidden md:block">Контакт</p></NuxtLink>
            </div>

            <NuxtLink to="/backet">
                <div class="w-40 h-40 md:w-56 md:h-56 rounded-full bg-gray-secondary flex items-center justify-center">
                    <img class="w-18 h-18 md:w-24 md:h-24" src="@/assets/images/basket.png" alt="">
                </div>
            </NuxtLink>
        </div>
    </div>
</template>