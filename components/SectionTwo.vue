<template>
    <div class="container">
        <div class="py-60 md:py-72 lg:py-85 xl:py-100 2xl:py-120">
            <div class="flex flex-col lg:flex-row items-center gap-30 md:gap-36 lg:gap-40 xl:gap-50">
                <div class="w-full">
                    <p class="text-16 text-gray-text mb-10 lg:mb-16">О КОМПАНИИ</p>
                    <p class="text-18 md:text-22 lg:text-24 xl:text-28 2xl:text-32 text-black-primary mb-10 lg:mb-16">Основным направлением деятельности компании является производство мужского белья ориентированная на вкусы и предпочтения потребителей.</p>
                    <p class="text-16 lg:text-18 text-black-secondary mb-20 md:mb-26 lg:mb-36 xl:mb-44 2xl:mb-56">Накопленный 25- летний опыт в сфере производства мужского трикотажного белья, дал возможность пройти большой путь от изготовления первого прототипа до выпуска современных, удобных и эстетичных моделей.Благодаря сплоченной команде профессионалов и грамотной маркетинговой политики, компания добилась значительных успехов, заняв ведущее место на рынке готовых трикотажных изделий и полотна.Наша продукция проходит полный цикл - от создания полотна до готового изделия - непосредственно на предприятии.</p>

                    <div class="inline-flex items-center bg-green-secondary rounded-2 gap-8 py-10 md:py-12 lg:py-14 xl:py-16 px-20 md:px-26 lg:px-32 xl:px-40">
                        <p class="text-14 font-semibold leading-130 uppercase">Свяжется с нами</p>
                        <img src="@/assets/icons/arrow-right.svg" alt="arrow right">
                    </div>
                </div>



                <div class="w-full grid md:grid-cols-2 xl:grid-cols-3">
                    <div class="w-full h-full flex flex-col items-center p-10 md:p-16 py-30 border border-gray-secondary">
                        <p class="text-38 md:text-42 lg:text-46 xl:text-50 2xl:text-56 leading-150 font-bold text-green-primary mb-10">25</p>
                        <p class="text-18 md:text-20 lg:text-22 xl:text-24 font-semibold text-black-primary mb-8">Летний опыт</p>
                        <p class="text-16 text-black-secondary text-center flex-1">инвестиции в развитие с 1998 года</p>
                    </div>
                    <div class="w-full h-full flex flex-col items-center p-10 md:p-16 py-30 border border-gray-secondary">
                        <p class="text-38 md:text-42 lg:text-46 xl:text-50 2xl:text-56 leading-150 font-bold text-green-primary mb-10">04</p>
                        <p class="text-18 md:text-20 lg:text-22 xl:text-24 font-semibold text-black-primary mb-8">Производства</p>
                        <p class="text-16 text-black-secondary text-center flex-1">Майки, Трусы и Боксеры, Футболки и Безрукавки,Нижнее бельё</p>
                    </div>

                    <div class="card w-full h-full flex border border-gray-secondary overflow-hidden">
                        <img class="card_img w-full h-full object-cover" src="../assets/images/img1.png" alt="fig-leaf team">
                    </div>
                    <div class="card w-full h-full flex border border-gray-secondary overflow-hidden">
                        <img class="card_img w-full h-full object-cover" src="../assets/images/img2.png" alt="fig-leaf team">
                    </div>

                    <div class="w-full h-full flex flex-col items-center p-10 md:p-16 py-30 border border-gray-secondary">
                        <p class="text-38 md:text-42 lg:text-46 xl:text-50 2xl:text-56 leading-150 font-bold text-green-primary mb-10">0,98</p>
                        <p class="text-18 md:text-20 lg:text-22 xl:text-24 font-semibold text-black-primary mb-8">Тысяч человек</p>
                        <p class="text-16 text-black-secondary text-center flex-1">Общая численность сотрудников</p>
                    </div>
                    <div class="w-full h-full flex items-center justify-center border border-gray-secondary overflow-hidden py-40 md:py-10">
                        <img class="logo max-w-120" src="../assets/images/Logo.png" alt="fig-leaf team">
                    </div>
                </div>
            </div>




            <div class="mt-60 md:mt-72 lg:mt-85 xl:mt-100 2xl:mt-120">
                <p class="text-24 md:text-24 lg:text-26 xl:text-28 2xl:text-32 font-semibold to-black-primary leading-150 mb-15 lg:mb-24">Наша Продукция</p>

                <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-20">
                    <div class="grid_card cursor-pointer w-full border border-gray-secondary bg-white-secondary flex">
                        <div class="py-20 md:py-24 lg:py-32 px-26 md:px-32 lg:px-40 inline-flex flex-col">
                            <p class="text-16 md:text-18 xl:text-20 mb-auto whitespace-nowrap max-w-202 flex-wrap">Детская одежда</p>

                            <div class="flex items-center gap-8">
                                <p class="text-16 md:text-18 font-medium text-green-primary">Подробное</p>

                                <img class="arrow_right w-24 h-24" src="../assets/icons/arrow-right-green.png" alt="arrow">
                            </div>
                        </div>

                        <div class="w-full flex justify-end">
                            <img src="../assets/images/product1.png" alt="product">
                        </div>
                    </div>


                    <div class="grid_card cursor-pointer w-full border border-gray-secondary bg-white-secondary flex">
                        <div class="py-20 md:py-24 lg:py-32 px-26 md:px-32 lg:px-40 inline-flex flex-col">
                            <p class="text-16 md:text-18 xl:text-20 mb-auto whitespace-nowrap max-w-202 flex-wrap">Мужская одежда</p>

                            <div class="flex items-center gap-8">
                                <p class="text-16 md:text-18 font-medium text-green-primary">Подробное</p>

                                <img class="arrow_right w-24 h-24" src="../assets/icons/arrow-right-green.png" alt="arrow">
                            </div>
                        </div>

                        <div class="w-full flex justify-end">
                            <img src="../assets/images/product2.png" alt="product">
                        </div>
                    </div>


                    <div class="grid_card cursor-pointer w-full border border-gray-secondary bg-white-secondary flex">
                        <div class="py-20 md:py-24 lg:py-32 px-26 md:px-32 lg:px-40 inline-flex flex-col">
                            <p class="text-16 md:text-18 xl:text-20 mb-auto whitespace-nowrap max-w-202 flex-wrap">Женская одежда</p>

                            <div class="flex items-center gap-8">
                                <p class="text-16 md:text-18 font-medium text-green-primary">Подробное</p>

                                <img class="arrow_right w-24 h-24" src="../assets/icons/arrow-right-green.png" alt="arrow">
                            </div>
                        </div>

                        <div class="w-full flex justify-end">
                            <img src="../assets/images/product3.png" alt="product">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
    .logo {
        max-width: 120px !important;
    }

    .card_img {
        transition: 0.5s;
        object-position: center !important;
    }

    .card:hover .card_img {
        transform: scale(1.5) translateX(40px);
        object-position: left center !important;
    }

    .arrow_right {
        transition: 0.5s;
    }

    .grid_card:hover .arrow_right {
        transform: translateX(8px) scale(1.1);
    }
</style>