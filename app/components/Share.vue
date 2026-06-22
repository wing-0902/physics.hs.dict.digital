<script setup lang="ts">
const route = useRoute();

const open = ref(false);
</script>

<template>
  <button
    text-4
    v-if="route.meta.share"
    i-hugeicons-share-03
    @click="open = true"
  ></button>
  <div class="shareSheet"></div>
</template>

<style lang="scss" scoped>
.shareSheet {
}
</style>
