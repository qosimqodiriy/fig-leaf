<template>
    <div class="flex flex-col min-h-screen">
        <the-header></the-header>
        <div class="flex-1">
            <NuxtPage />
        </div>
        <the-footer></the-footer>
        <base-natification></base-natification>
    </div>
</template>







<script>
import TheHeader from '../components/Header.vue';
import TheFooter from '../components/Footer.vue';
import BaseNatification from '~/components/BaseNatification.vue';


export default {
    components: {
        TheHeader,
        TheFooter,
        BaseNatification,
    },
}
</script>