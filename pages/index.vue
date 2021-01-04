<template>
  <v-container>
    <nuxt-content :document="page" />
  </v-container>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content("index").fetch();

    return {
      page,
    };
  },
};
</script>
