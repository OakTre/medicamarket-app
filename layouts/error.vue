<template lang="pug">
  section.error-page
    .site-container.error-page__container
      h1.error-page__heading
        | Страница не найдена
      nuxt-link(
        to="/"
        class="button small _no-icon error-page__btn"
      ) На главную
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
  .error-page {
    padding-top: 4rem;

    &__heading {
      font: var(--font-heading-h2-md);
      margin-bottom: 2rem;
    }

    &__btn {
      display: inline-block;
    }
  }
</style>
