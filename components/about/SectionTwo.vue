<template>
    <div class="bg-white py-80 md:py-90 lg:py-110 xl:py-130 2xl:py-150">
        <div class="my_container">
            <p class="font-interfaces text-24 lg:text-28 xl:text-32 2xl:text-40 mb-24 lg:mb-32">Наша команда</p>
    
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-16">
                <staff-card v-for="item in 6" :key="item" />
            </div>
        </div>
    </div>
</template>


<script>
import StaffCard from './StaffCard.vue';

export default {
    components: {
        StaffCard,
    },
}
</script>