<template>
  <div class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto">
    <h1>{{ article.title }}</h1>
    <nuxt-content :document="article" />
  </div>
</template>

<script lang="ts">
export default {
  async asyncData({ $content, params, error }) {
    let path;

    if (params.pathMatch === "") {
      path = "/index";
    } else if (params.pathMatch.endsWith("/")) {
      path = `/${params.pathMatch}index`;
    } else {
      path = `/${params.pathMatch}`;
    }

    const article = await $content({ deep: true })
      .where({ path })
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: "Article not found" });
      });

    return {
      article,
    };
  },
};
</script>
