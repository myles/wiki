<template>
  <div class="container mx-auto px-4 grid grid-cols-3">
    <sidebar />
    <nuxt />
  </div>
</template>

<script>
import Sidebar from "~/components/Sidebar.vue";

export default {
  components: {
    Sidebar,
  },
};
</script>
