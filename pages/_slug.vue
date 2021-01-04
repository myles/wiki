<template>
  <v-container>
    <h1>{{ page.title }}</h1>
    <nuxt-content :document="page" />
  </v-container>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const page = await $content(params.slug, { deep: true }).fetch();

    return { page };
  },
};
</script>
