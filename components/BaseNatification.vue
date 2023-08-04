<script setup lang="ts">
import { _toast } from '~/store';
</script>

<template>
  <teleport to="body">
    <div class="natification fixed top-40 right-0 rounded-8 overflow-hidden shadow-lg border border-gray-secondary min-w-220 max-w-300" :class="_toast.visible ? 'natification_active' : 'not_natification_active'">
      <div class="flex gap-10 items-center px-20 py-15 rounded-8" :class="[_toast.type == 'success' ? 'bg-colour-green' : '', _toast.type == 'varning' ? 'bg-yellow-badge' : '', _toast.type == 'error' ? 'bg-red-primary' : '']">
        <img v-if="_toast.type == 'success'" class="w-22 h-22" src="../assets/icons/succes.png" alt="">
        <img v-else-if="_toast.type == 'varning'" class="w-20 h-20" src="../assets/icons/varning.png" alt="">
        <img v-else-if="_toast.type == 'error'" class="w-22 h-22" src="../assets/icons/close-white.png" alt="">

        <p v-if="_toast.type == 'success'" class="text-black-primary text-16 font-medium">{{_toast.text}}</p>
        <p v-else-if="_toast.type == 'varning'" class="text-black-primary text-16 font-medium">{{_toast.text}}</p>
        <p v-else-if="_toast.type == 'error'" class="text-white-primary text-16 font-medium">{{_toast.text}}</p>
      </div>
    </div>
  </teleport>
</template>



<style scoped>
* {
  transition: 0.5s;
}

.natification_active {
  z-index: 20;
  transform: translateX(-20px);
}

.not_natification_active {
  z-index: -1;
  transform: translateX(300px);
}
</style>