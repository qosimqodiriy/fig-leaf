<template>
    <section class="section_one bg-colour-green flex flex-col">
        <Header></Header>

        <div class="my_container flex-auto pt-40 lg:pt-56 2xl:pt-80 pb-30 lg:pb-40 2xl:pb-50">
            <div class="flex flex-col w-full h-full">
                <p class="title text-white text-72 text-center font-interfaces font-bold leading-150 mb-auto">Jahon Invest Holding</p>

                <div class="grid grid-cols-2 lg:grid-cols-4 border border-grey">
                    <div class="py-30 md:py-46 lg:py-64 2xl:py-90 px-20 border border-grey">
                        <p class="text text-white text-18 md:text-20 lg:text-24 2xl:text-28 text-center">Premium Pipe Print</p>
                    </div>
                    <div class="py-30 md:py-46 lg:py-64 2xl:py-90 px-20 border border-grey">
                        <p class="text text-white text-18 md:text-20 lg:text-24 2xl:text-28 text-center">Premium Pipe Print</p>
                    </div>
                    <div class="py-30 md:py-46 lg:py-64 2xl:py-90 px-20 border border-grey">
                        <p class="text text-white text-18 md:text-20 lg:text-24 2xl:text-28 text-center">Premium Pipe Print</p>
                    </div>
                    <div class="py-30 md:py-46 lg:py-64 2xl:py-90 px-20 border border-grey">
                        <p class="text text-white text-18 md:text-20 lg:text-24 2xl:text-28 text-center">Premium Pipe Print</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>



<style scoped>
.section_one {
    width: 100%;
    height: 100vh;
    background: #020105 url('../../assets/images/img_3.png') no-repeat center;
    background-size: cover;
}

.title {
    font-size: 80px;
    text-shadow: 0 0 3px rgba(0,0,0,1);
}

.text {
    text-shadow: 0 0 2px rgba(0,0,0,1);
}

@media (max-width: 1350px) {
    .title {
        font-size: 64px;
    }
}

@media (max-width: 1024px) {
    .title {
        font-size: 52px;
    }
}

@media (max-width: 768px) {
    .title {
        font-size: 36px;
    }
}
</style>