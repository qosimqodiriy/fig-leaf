<template>
    <div class="card flex flex-col xl:flex-row items-start xl:items-center justify-between gap-24">
        <div class="flex flex-col lg:flex-row items-start lg:items-center justify-start gap-16 lg:justify-between w-full max-w-600">
            <div class="flex flex-col lg:flex-row items-start lg:items-center gap-16 lg:gap-24 w-full lg:w-auto">
                <div class="flex justify-center w-full lg:w-auto">
                    <div class="w-full h-auto md:w-200 md:h-200 lg:w-110 lg:h-110 p-10 bg-white-secondary">
                        <img class="w-full max-h-full max-w-full" src="../assets/images/product_img_3.png" alt="">
                    </div>
                </div>

                <div class="">
                    <p class="text-20 lg:text-24 font-babesNeue font-semibold lg:font-bold">Men’s briefs classic</p>
                    <p class="font-interfaces text-black-secondary leading-150">Размер: <span class="text-black-primary font-medium">M</span></p>
                    <p class="font-interfaces text-black-secondary leading-150">Цвет: <span class="text-black-primary font-medium">Беллы</span></p>
                </div>
            </div>

            <div class="flex items-center gap-15 border border-gray-secondary p-4">
                <img class="w-30 h-30 p-3 cursor-pointer hover:bg-white-secondary transition-all duration-300" src="../assets/icons/minus-black.png" alt="">
                <p class="text-18">1</p>
                <img class="w-30 h-30 p-3 cursor-pointer hover:bg-white-secondary transition-all duration-300" src="../assets/icons/add-black.png" alt="">
            </div>
        </div>

        <div class="flex flex-row xl:flex-col w-full lg:w-auto justify-between items-end gap-16">
            <div class="p-8 rounded-full transition-all duration-300 hover:bg-gray-secondary border border-gray-secondary">
                <img class="w-24 h-24" src="../assets/icons/delete.png" alt="">
            </div>
            <p class="text-18 md:text-20 font-semibold whitespace-nowrap">99 846 216 sum</p>
        </div>
    </div>
</template>