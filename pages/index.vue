<template>
    <SectionOne />
    <SectionTwo />
    <SectionThree />
</template>

<script>
import Maps from '~/components/Maps.vue'
import SectionOne from '~/components/SectionOne.vue';
import SectionTwo from '~/components/SectionTwo.vue';
import SectionThree from '~/components/SectionThree.vue';


export default {
    components: {
        Maps,
        SectionOne,
        SectionTwo,
        SectionThree,
    },
}
</script>