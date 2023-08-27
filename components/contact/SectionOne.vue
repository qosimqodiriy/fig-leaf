<template>
    <div class="my_container py-60 lg:pt-80">
        <div class="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-3 gap-24">
            <div class="lg:col-span-3 xl:col-span-2">
                <div class="w-full max-h-500 overflow-hidden mb-24 border border-grey_8">
                    <img src="../../assets/images/map.png" alt="">
                </div>
                <div class="flex flex-col lg:flex-row flex-wrap gap-40">
                    <!-- Адресс -->
                    <div class="lg:max-w-500">
                        <div class="flex items-center gap-24 mb-16">
                            <img class="w-24 h-24" src="../../assets/icons/Location-black.png" alt="">
                            <p class="text-20 font-semibold text-black font-interfaces">Адресс</p>
                        </div>

                        <p class="text-18 font-inter">Республика Узбекистан. Ташкентская обл. Зангиота р-н КФЙ Эркин, Кольцевая дорога Ташкент-Термиз М-39 .</p>
                    </div>

                    <!-- Тел/Факс: -->
                    <div class="lg:max-w-500">
                        <div class="flex items-center gap-24 mb-16">
                            <img class="w-24 h-24" src="../../assets/icons/Call-black.png" alt="">
                            <p class="text-20 font-semibold text-black font-interfaces">Тел/Факс:</p>
                        </div>

                        <p class="text-18 font-inter whitespace-nowrap">(0 371) 150 62 74</p>
                        <p class="text-18 font-inter whitespace-nowrap">(+998 90) 992 17 77</p>
                    </div>

                    <!-- Социальные медиа: -->
                    <div class="lg:max-w-500">
                        <div class="flex items-center gap-24 mb-16">
                            <img class="w-24 h-24" src="../../assets/icons/Message-black.png" alt="">
                            <p class="text-20 font-semibold text-black font-interfaces">Социальные медиа</p>
                        </div>

                        <div class="flex items-center gap-40">
                            <img v-for="item in 5" :key="item" class="w-24 h-24" src="../../assets/icons/youtube-black.png" alt="">
                        </div>
                    </div>
                </div>
            </div>

            <form @submit.prevent="onSubmit()" class="lg:col-span-2 xl:col-span-1 p-24 border border-grey_8 space-y-24">
                <p class="text-24 md:text-28 lg:text-32 font-interfaces">Контакты</p>

                <div class="w-full relative">
                    <input type="text" v-model="name" class="base_input font-interfaces" name="name" id="name" required />
                    <label class="base_label font-interfaces" for="name">Имя</label>
                </div>

                <div class="w-full relative">
                    <input type="text" v-model="phone" class="base_input font-interfaces" name="phone" id="phone" required />
                    <label class="base_label font-interfaces" for="phone">Номер телефона</label>
                </div>

                <div class="w-full relative">
                    <textarea v-model="commit" class=" base_input font-interfaces min-h-72 scroll_none" rows="3" name="description" id="description" required></textarea>
                    <label class="base_label font-interfaces" for="description">Сообщение</label>
                </div>

                <div class="flex flex-col 2xl:flex-row gap-16">
                    <div class="w-full 2xl:w-50% p-16 border border-grey_8">
                        <div class="flex items-center justify-between gap">
                            <div class="flex items-center gap-10">
                                <input v-model="captcha" class="w-24 h-24" type="checkbox" name="recaptcha" id="recaptcha" required>
                                <label for="recaptcha">I'm not a robot</label>
                            </div>
                            <img class="w-46" src="../../assets/icons/recaptcha.png" alt="recaptcha">
                        </div>
                    </div>

                    <button class="flex w-full 2xl:w-50% items-center justify-center gap-8 px-24 py-16 bg-purple">
                        <p class="text-14 font-interfaces font-bold uppercase text-white">Отправит</p>
                        <img class="w-24 h-24" src="../../assets/icons/arrow-right-white.png" alt="">
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>



<script>
import axios from 'axios'

export default {
    data() {
        return {
            name: '',
            phone: '',
            commit: '',
            captcha: false,
        }
    },

    methods: {
        onSubmit() {
            this.name = '';
            this.phone = '';
            this.commit = '';
            this.captcha = false;
            console.log("Prevent Submit");
        }
    }
}
</script>


<style scoped>
.base_input {
    width: 100%;
    outline: none;
    padding: 12px 0;
    font-size: 18px;
    line-height: 150%;
    border-bottom: 1px solid #C2C2C3;
}

.base_label {
    font-size: 16px;
    transition: 0.2s;
    line-height: 150%;
    color: #6F7E70;

    position: absolute;
    top: 14px;
    left: 0;
    width: 100%;
    background-color: transparent;
}


textarea:focus + label,
textarea:valid + label {
    top: -8px;
    left: 0;
    font-size: 16px;
    /* line-height: 12px; */
    /* letter-spacing: 0.5px; */
}

input:focus + label,
input:valid + label {
    left: 0 !important;
    top: -8px !important;
    font-size: 14px !important;
    /* line-height: 12px !important; */
    /* letter-spacing: 0.5px !important; */
    background-color: transparent !important;
}
</style>