<template>
    <div class="py-40">
        <PageTitle text="КОНТАКТЫ" pageName="Контакт" />
        <div class="container">
            <div class="grid lg:grid-cols-3 gap-10 md:gap-16 py-40 lg:pt-60 xl:pt-80">
                <div class="w-full lg:col-span-2">
                    <img class="w-full h-full object-cover object-center" src="../assets/images/map.png" alt="">
                </div>

                <div class="p-20 md:p-24 lg:p-28 xl:p-32 2xl:p-40 border border-gray-secondary">
                    <p class="text-24 md:text-26 lg:text-28 2xl:text-32 font-semibold mb-8">Если вам нужна информация <span class="text-green-primary">о нашей компании?</span></p>
                    <p class="text-18 font-interfaces mb-32">Заполните форму и мы обязательно свяжемся с вами</p>

                    <div class="pt-16 border-t border-gray-secondary space-y-16">
                        <input type="text" class="px-16 py-12 w-full outline-none border border-gray-secondary bg-white-secondary" placeholder="Имя">
                        <div class="flex items-center border border-gray-secondary bg-white-secondary">
                            <p class="py-12 pl-16">+998</p>
                            <input type="text" id="phone" minlength="12" maxlength="12" class="w-full py-12 pl-10 outline-none border-none bg-white-secondary" placeholder="Номер телефона">
                        </div>
                        <textarea class="w-full px-16 py-12 bg-white-secondary border border-gray-secondary outline-none" rows="6" placeholder="Сообщение"></textarea>
                    </div>
                </div>
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


    mounted(){
        setTimeout(() => {
            let phone = document.getElementById('phone');

            phone.addEventListener('input', function (e) {
                var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);
                e.target.value = !x[2] ? x[1] : + x[1] + ' ' + x[2] + (x[3] ? ' ' + x[3] : '') + (x[4] ? ' ' + x[4] : '');
            });
        }, 200);
    }
}
</script>


<style scoped>

</style>