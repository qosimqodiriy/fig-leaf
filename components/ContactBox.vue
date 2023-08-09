<template>
    <div class="py-40">
        <div class="container">
            <div v-if="data.lat && data.long" class="grid lg:grid-cols-3 gap-10 md:gap-16 py-40 lg:pt-60 xl:pt-80">
                <a class="w-full lg:col-span-2" :href="`https://yandex.uz/maps/10335/tashkent/?ll=${data.long}%2C${data.lat}&mode=whatshere&whatshere%5Bpoint%5D=${data.long}%2C${data.lat}&whatshere%5Bzoom%5D=17&z=17`" target="_blank">
                    <img class="w-full h-full object-cover object-center" src="../assets/images/map.jpg" alt="">
                </a>

                <form @submit.prevent="submit" class="p-20 md:p-24 lg:p-28 xl:p-32 2xl:p-40 border border-gray-secondary">
                    <p class="text-24 md:text-26 lg:text-28 2xl:text-32 font-semibold mb-8">{{ $t('text10') }} <span class="text-green-primary">{{ $t('text11') }}</span></p>
                    <p class="text-18 font-interfaces mb-32">{{ $t('text12') }}</p>

                    <div class="pt-16 border-t border-gray-secondary space-y-16">
                        <div class="w-full relative mb-10">
                            <input type="text" v-model="name" class="base_input" name="name" id="name" required />
                            <label class="base_label" for="name">{{ $t('name') }}</label>
                        </div>
                        <div class="flex w-full items-center bg-white-secondary pl-10 gap-4 border border-gray-secondary rounded-5 relative overflow-hidden">
                            <p class="py-10 ml-4">+998</p>
                            <input type="text" maxlength="12" minlength="12" v-model="phone" id="phone" class="py-10 pl-4 w-full bg-white-secondary rounded-r-5 outline-none"  placeholder="00 000 00 00" required>
                        </div>
                        <textarea v-model="commit" class="w-full px-16 py-12 bg-white-secondary border border-gray-secondary outline-none min-h-180" rows="6" :placeholder="$t('sms')"></textarea>

                        <button type="submit" :disabled="loading ? true : false" class="inline-flex cursor-pointer items-center bg-green-secondary rounded-2 gap-8 py-10 md:py-12 lg:py-14 xl:py-16 px-20 md:px-26 lg:px-32 xl:px-40">
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
import axios from 'axios'
import { OPEN_NOTIFICATION } from '~/store';

export default {
    data() {
        return {
            data: {},
            name: '',
            phone: '',
            commit: '',
            loading: false,
        }
    },

    methods: {
        submit() {
            this.loading - true;
            axios.post('https://www.figleaf.uz/api/v1/contact/us', {
                name: this.name,
                phone: this.phone,
                commit: this.commit,
            })
            .then(response => {
                this.loading = false;
                OPEN_NOTIFICATION("So'rovingiz yuborildi", 'success');
            })
            .catch(error => {
                this.loading = false;
                OPEN_NOTIFICATION("So'rovingiz yuborilmadi", 'error');
            });

            this.name = '';
            this.phone = '',
            this.commit = '';
        },

        async getContacts() {
            const response = await axios.get('https://www.figleaf.uz/api/v1/contact')
            this.data = response.data
            // console.log(response.data);
        }
    },


    mounted(){
        this.getContacts()
        setTimeout(() => {
            let phone = document.getElementById('phone');

            phone.addEventListener('input', function (e) {
                var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);
                e.target.value = !x[2] ? x[1] : + x[1] + ' ' + x[2] + (x[3] ? ' ' + x[3] : '') + (x[4] ? ' ' + x[4] : '');
            });
        }, 500);
    },
}
</script>


<style scoped>

.base_input {
    width: 100%;
    outline: none;
    font-size: 16px;
    line-height: 22px;
    padding: 14px 16px 8px ;
    /* border-radius: 5px; */
    color: var(--color);
    border: 1px solid #E5E5E5;
    background-color: #F7F7F7;
}

.base_label {
    font-size: 16px;
    line-height: 20px;
    transition: 0.2s;
    color: rgba(1, 14, 56, 0.8);

    position: absolute;
    top: 14px;
    left: 17.5px;
    width: 80%;
    background-color: #F7F7F7;
}


textarea:focus + label,
textarea:valid + label {
  top: 5px;
  left: 17.5px;
  font-size: 9px;
  line-height: 12px;
  color: var(--color);
  letter-spacing: 0.5px;
}

input:focus + label,
input:valid + label {
  top: 5px !important;
  left: 17.5px !important;
  font-size: 9px !important;
  line-height: 12px !important;
  color: var(--color) !important;
  letter-spacing: 0.5px !important;
  background-color: transparent !important;
}
</style>