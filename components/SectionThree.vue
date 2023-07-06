<template>
    <div class="container">
        <div class="py-60 md:py-72 lg:py-85 xl:py-100 2xl:py-120 space-y-60 lg:space-y-90">
            <div>
                <p class="text-24 lg:text-28 xl:text-32 font-firsNeue mb-24">Наша Специализация</p>

                <div class="grid_box flex flex-nowrap gap-16 overflow-x-scroll pb-10">
                    <SpecializationCard v-for="card in 6" :key="card" :num="card" />
                </div>
            </div>


            <div class="section_two">
                <div class="px-36 md:px-52 lg:px-80 pt-30 lg:pt-60 pb-50 lg:pb-100">
                    <h2 class="nasipa text-30 lg:text-38 xl:text-56 leading-100 mb-20 lg:mb-40 uppercase opacity-80 text-white-secondary font-interfaces">Nasipa</h2>
                    <h3 class="text-28 lg:text-38 leading-120 max-w-670 font-normal text-white-primary font-babesNeue mb-60 lg:mb-80">Прочный материал, качественные инновационные технологии</h3>

                    <NuxtLink to="/products">
                        <div class="btn inline-flex cursor-pointer gap-10 items-center py-10 lg:py-16 px-24 lg:px-32 border border-white-primary backdrop-blur-md">
                            <p class="text-18 font-interfaces text-white-primary">Посмотреть продукты</p>
                            <img class="w-24 h-24" src="../assets/icons/arrow-right.png" alt="">
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import SpecializationCard from './SpecializationCard.vue';

export default {
    components: {
        SpecializationCard,
    }
}
</script>



<style scoped>
    .nasipa {
        font-size: 120px;
        color: rgb(56, 255, 45);
    }
    .grid_box::-webkit-scrollbar {
        height: 3px;
        background-color: #F5F5F7;
    }

    .grid_box::-webkit-scrollbar-thumb {
        height: 3px;
        border-radius: 2px;
        background-color: #DADAE2;
    }

    .section_two {
        background: url('../assets/images/bg.png') no-repeat center center;
        background-size: cover;
    }

    .btn > img {
        transition: 0.5s;
    }

    .btn:hover > img {
        transform: translateX(5px) scale(1.15);
    }


    @media (max-width: 1024px) {
        .nasipa {
            font-size: 80px;
        }
    }

    @media (max-width: 768px) {
        .nasipa {
            font-size: 56px;
        }
    }
</style>