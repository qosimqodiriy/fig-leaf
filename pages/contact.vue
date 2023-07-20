<template>
    <div class="py-40">
        <PageTitle :text="$t('contact')" :pageName="$t('contacts')" />
        <div class="container">
            <div class="grid lg:grid-cols-3 gap-10 md:gap-16 py-40 lg:pt-60 xl:pt-80">
                <a class="w-full lg:col-span-2" href="https://yandex.uz/maps/10335/tashkent/?ll=69.146134%2C41.253285&mode=whatshere&whatshere%5Bpoint%5D=69.145321%2C41.253183&whatshere%5Bzoom%5D=17&z=17.62" target="_blank">
                    <img class="w-full h-full object-cover object-center" src="../assets/images/map.png" alt="">
                </a>

                <form @submit.prevent="submit" class="p-20 md:p-24 lg:p-28 xl:p-32 2xl:p-40 border border-gray-secondary">
                    <p class="text-24 md:text-26 lg:text-28 2xl:text-32 font-semibold mb-8">{{ $t('text10') }} <span class="text-green-primary">{{ $t('text11') }}</span></p>
                    <p class="text-18 font-interfaces mb-32">{{ $t('text12') }}</p>

                    <div class="pt-16 border-t border-gray-secondary space-y-16">
                        <input type="text" v-model="name" class="px-16 py-12 w-full outline-none border border-gray-secondary bg-white-secondary" :placeholder="$t('name')" required>
                        <div class="flex items-center border border-gray-secondary bg-white-secondary">
                            <p class="py-12 pl-16">+998</p>
                            <input type="text" v-model="phone" id="phone" minlength="12" maxlength="12" class="w-full py-12 pl-10 outline-none border-none bg-white-secondary" :placeholder="$t('name')" required>
                        </div>
                        <textarea v-model="commit" class="w-full px-16 py-12 bg-white-secondary border border-gray-secondary outline-none min-h-180" rows="6" :placeholder="$t('sms')"></textarea>

                        <button type="submit" class="inline-flex cursor-pointer items-center bg-green-secondary rounded-2 gap-8 py-10 md:py-12 lg:py-14 xl:py-16 px-20 md:px-26 lg:px-32 xl:px-40">
                            <p class="text-14 font-semibold leading-130 uppercase">{{ $t('send') }}</p>
                            <img src="@/assets/icons/arrow-right.svg" alt="">
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>


<script>
import PageTitle from '~/components/PageTitle.vue';


export default {
    components: {
        PageTitle,
    },

    data() {
        return {
            name: '',
            phone: '',
            commit: '',
        }
    },


    mounted(){
        setTimeout(() => {
            let phone = document.getElementById('phone');

            phone.addEventListener('input', function (e) {
                var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);
                e.target.value = !x[2] ? x[1] : + x[1] + ' ' + x[2] + (x[3] ? ' ' + x[3] : '') + (x[4] ? ' ' + x[4] : '');
            });
        }, 200);
    },

    methods: {
        submit() {
            console.log("Submit");
            console.log(this.name);
            console.log(this.phone);

            this.name = '';
            this.phone = '',
            this.commit = '';
        }
    }
}
</script>


<style scoped>

</style>