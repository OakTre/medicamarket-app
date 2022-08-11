<template lang="pug">
  nuxt-link.logo(to="/")
    img.logo__img(src="@/assets/img/logo.svg" alt="Логотип Медикамаркет")
</template>
<script>
export default {
  name: 'Logo'
}
</script>
<style lang="scss" scoped>
  .logo {
    display: inline-block;

    &__img {
      display: block;
      width: 32.2rem;
      height: 6.7rem;
      object-fit: contain;
    }
  }
</style>
