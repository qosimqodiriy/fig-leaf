<script setup lang="ts">
import {reactive, watch, computed} from 'vue';
const props = defineProps({
  active: {
    type: Number,
    required: true
  },
  items: {
    type: Number,
    required: true
  },
  perPage: {
    type: Number,
    required: true
  }
});
const data = reactive<{page: number, active: number, perPage: number, pages: number[]}>({
  page: 1,
  active: props.active,
  perPage: props.perPage,
  pages: [],
});
const pages = computed(() => {
  data.pages = [];
  let numberOfPages = Math.ceil(props.items / data.perPage);
  for (let i = 1; i <= numberOfPages; i++) {
    data.pages.push(i);
  }
  return data.pages
})
watch(props, () => {
  if (props.active == 1) {
    data.active = 1
  }
})
function toggleActive(val: number): void {
  data.active = val
  emit("change", val)
}

function previous(){
  data.page -= 1;
  data.active -= 1;
  toggleActive(data.active)
}

function next(){
  data.page += 1;
  data.active += 1;
  toggleActive(data.active)
}
const emit = defineEmits(["change"]);
</script>

<template>
    <div class="flex gap-16 items-center justify-center mt-30">
      <button :disabled="data.active > 1 ? false : true" class="w-51 h-51 flex items-center justify-center rounded-full border border-grey_40 font-medium bg-white" @click="previous">
        <img class="w-28 h-28" src="@/assets/icons/arrow-left-pagination.png" alt="">
      </button>

      <button v-if="pages.length > 0"  class="w-51 h-51 rounded-full border font-medium" :class="data.active === 1 ? 'border-facebook-blue text-facebook-blue': 'bg-white border-grey_40'" @click="data.page = 1; toggleActive(1)">
        1
      </button>
      <button v-if="(data.active === 1 || data.active === 2 || data.active === pages.slice(-2)[0] || data.active === pages.slice(-1)[0]) && pages.length > 2" @click="data.page = 2; toggleActive(2)" class="w-51 h-51 rounded-full border font-medium" :class="data.active === 2 ? 'border-facebook-blue text-facebook-blue': 'bg-white border-grey_40'">
        2
      </button>
      <button v-if="data.active > 3 && pages.length > 4"  class="w-51 h-51 rounded-full border border-grey_40 font-medium bg-white" @click="data.page = data.page - 2; toggleActive(data.page)">
        ...
      </button>
      <button v-if="data.active === 2 && pages.length > 4" class="w-51 h-51 rounded-full border font-medium"  @click="data.page = 3; toggleActive(3)" :class="data.active === 2 ? 'bg-white': 'border-facebook-blue text-facebook-blue'">
        3
      </button>
      <button v-if="data.active > 2 && data.active !== pages.slice(-1)[0] && data.active !== pages.slice(-2)[0]" class="w-51 h-51 rounded-full border font-medium bg-white" @click="toggleActive(data.active - 1); data.page= data.page - 1">
        {{data.active - 1}}
      </button>
      <button v-if="data.active > 2 && data.active !== pages.slice(-1)[0] && data.active !== pages.slice(-2)[0]" @click="toggleActive(data.active); data.page = data.active" class="w-51 h-51 rounded-full border font-medium border-facebook-blue text-facebook-blue">
        {{data.active}}
      </button>
      <button v-if="data.active > 2 && data.active !== pages.slice(-1)[0] && data.active !== pages.slice(-2)[0]" class="w-51 h-51 rounded-full border font-medium bg-white" @click="toggleActive(data.active + 1); data.page = data.page + 1">
        {{data.active + 1}}
      </button>
      <button v-if="data.active < pages.slice(-3)[0] && pages.length > 4"  class="w-51 h-51 rounded-full border border-grey_40 font-medium bg-white" @click="data.page = data.page + 2; toggleActive(data.page)">
        ...
      </button>
      <button v-if="data.active === pages.slice(-2)[0] && pages.length > 4" class="w-51 h-51 rounded-full border font-medium" :class="data.active === 3 ? 'border-facebook-blue text-facebook-blue': 'bg-white border-grey_40'" @click="data.page = pages.slice(-3)[0]; toggleActive(pages.slice(-3)[0])">
        {{pages.slice(-3)[0]}}
      </button>
      <button v-if="(data.active === 1 || data.active === 2 || data.active === pages.slice(-2)[0] || data.active === pages.slice(-1)[0]) && pages.length > 3" @click="data.page = pages.slice(-2)[0]; toggleActive(pages.slice(-2)[0])" class="w-51 h-51 rounded-full border font-medium" :class="data.active === pages.slice(-2)[0] ? 'border-facebook-blue text-facebook-blue': 'bg-white border-grey_40'">
        {{pages.slice(-2)[0]}}
      </button>
      <button v-if="pages.length > 1" class="w-51 h-51 rounded-full border font-medium" :class="data.active === pages.slice(-1)[0] ? 'border-facebook-blue text-facebook-blue': 'bg-white border-grey_40'" @click="data.page = pages.slice(-1)[0]; toggleActive(pages.slice(-1)[0])">
        {{pages.slice(-1)[0]}}
      </button>

      <button :disabled="data.active < pages.length ? false : true" class="w-51 h-51 flex items-center justify-center rounded-full border border-grey_40 font-medium bg-white" @click="next">
        <img class="w-28 h-28" src="@/assets/icons/arrow-right-pagination.png" alt="">
      </button>
    </div>
</template>