<template>
    <div class="flex flex-col min-h-screen max-w-1920 mx-auto" :class="`bg-${bg_color} text-${color}`">
        <Header v-if="path !== '/' && load == true"></Header>
        <div class="flex-1">
            <NuxtPage />
        </div>
        <Footer></Footer>
    </div>
</template>



<script>
export default {
    data() {
        return {
            path: '',
            load: false,
            color: 'white',
            bg_color: 'black',
        }
    },

    watch: {
        $route() {
            this.load = true;
            this.path = this.$route.path;

            if(this.$route.path == '/' || this.$route.path == '/about'|| this.$route.path == '/address') {
                this.color = 'white';
                this.bg_color = 'black';
                sessionStorage.setItem('color', 'white');
                sessionStorage.setItem('bg_color', 'black');
            } else {
                this.color = 'black';
                this.bg_color = 'white';
                sessionStorage.setItem('color', 'black');
                sessionStorage.setItem('bg_color', 'white');
            }
        },
    },

    methods: {
        
    },
    
    mounted() {
        this.load = true;
        this.path = this.$route.path;

        if(this.$route.path == '/' || this.$route.path == '/about'|| this.$route.path == '/address') {
            this.color = 'white';
            this.bg_color = 'black';
            sessionStorage.setItem('color', 'white');
            sessionStorage.setItem('bg_color', 'black');
        } else {
            this.color = 'black';
            this.bg_color = 'white';
            sessionStorage.setItem('color', 'black');
            sessionStorage.setItem('bg_color', 'white');
        }
    }
}
</script>