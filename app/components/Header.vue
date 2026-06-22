<template>
  <header class="root" h-full flex justify-center items-center>
    <div class="nav" flex justify-center items-center>
      <NuxtLink to="/">
        <span i-hugeicons-search-02></span>
        検索
      </NuxtLink>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.root {
  .nav {
    backdrop-filter: brightness(1.2);
    padding: 1px 30px;
    height: 38px;
    border-radius: 19px;
    a {
      color: white;
      text-decoration: none;
    }
  }
}
</style>
