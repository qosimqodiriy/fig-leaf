<template>
  <NuxtLayout>
    
  </NuxtLayout>
</template>


<script>
export default {
  data() {
    return {
      language: "eng",
    }
  },

  head() {
    return {
      title: "Figleaf Index page", // Set the title of the page
      meta: [
        { property: "og:title", content: "Open Graph Title" }, // Add Open Graph title meta tag
      ],
      link: [
        // { rel: "canonical", href: "https://example.com/about" }, // Add canonical link tag
      ],
    };
  },

  mounted() {
    if(localStorage.getItem('language')) {
      this.language = localStorage.getItem('language');
      this.$i18n.locale = localStorage.getItem('language');
    } else {
      this.$i18n.locale = this.language;
    }
  }
}
</script>