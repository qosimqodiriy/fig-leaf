<template>
    <div class="flex flex-col min-h-screen">
        <the-header></the-header>
        <div>
            <NuxtPage />
        </div>
        <the-footer></the-footer>
    </div>
</template>







<script>
import TheHeader from '../components/Header.vue';
import TheFooter from '../components/Footer.vue';


export default {
    components: {
        TheHeader,
        TheFooter,
    },
}
</script>