<template>
    <teleport to='body'>
        <div class="w-screen h-full overflow-auto flex items-start justify-center fixed top-0 right-0 modal">
            <div class="h-screen flex items-center justify-center fixed top-0 left-0 w-full p-10">
                <div class="bg-white-primary p-20 md:p-32 shadow-lg rounded-16 z-0 w-full md:w-500" :class="display ? 'z-0 scale-100 animate-blowUp' : ''">
                    <div class="flex items-center justify-between gap-8 mb-32">
                        <h2 class="text-18 text-black-primary">Malumotlaringizni kiriting</h2>

                        <img @click="$emit('close')" src="../assets/icons/close-black.png" class="cursor-pointer w-24 h-24" alt="">
                    </div>


                    <form @submit.prevent="submit" class="w-full">
                        <div class="w-full relative mb-10">
                            <input type="text" v-model="name" class="base_input" name="name" id="name" required />
                            <label class="base_label" for="name">Ism Sharifingiz</label>
                        </div>
                        
                        <div class="flex flex-col md:flex-row items-center gap-10">
                            <div class="flex w-full items-center bg-white-secondary pl-10 gap-4 border border-gray-secondary rounded-5 relative overflow-hidden">
                                <p class="py-10 ml-4">+998</p>
                                <input type="text" maxlength="12" minlength="12" v-model="phone" id="phone" class="py-10 pl-4 w-full bg-white-secondary rounded-r-5 outline-none" :class="phoneError ? 'text-red-primary' : ''" placeholder="00 000 00 00" required>
                            </div>
                            <div class="w-full relative">
                                <input type="email" v-model="email" class="base_input" name="email" id="email" required />
                                <label class="base_label" for="email">Pochta manzilingiz</label>
                            </div>

                        </div>

                        
                        <button type="submit" class="text-white-primary px-25 py-8 ml-auto block rounded-5 bg-green-primary mt-20">Yuborish</button>
                    </form>
                </div>
            </div>
        </div>
    </teleport>
</template>



<script>
export default {
    data() {
        return {
            name: '',
            phone: '',
            email: '',
            display: false,
        }
    },

    emits: ['close'],


    methods: {
        submit() {
            this.phone = '+998 ' + this.phone;
            localStorage.setItem('name', this.name);
            localStorage.setItem('phone', this.phone);
            localStorage.setItem('email', this.email);

            this.name = '';
            this.email = '';
            this.phone = '';
            this.$emit('close');
        },
    },

    mounted() {
        this.display = true;

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
.modal {
    z-index: 50;
    backdrop-filter: blur(1px);
    background: rgba(1, 14, 56, 0.5);
}


.base_input {
    width: 100%;
    outline: none;
    font-size: 16px;
    line-height: 22px;
    padding: 14px 16px 8px ;
    border-radius: 5px;
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