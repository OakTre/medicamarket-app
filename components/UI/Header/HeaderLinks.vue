<template lang="pug">
  .header-links
    a.header-links__item(href="") Частным клиентам
    a.header-links__item(href="") Бизнесу
</template>
<script>
export default {
  name: 'HeaderLinks'
}
</script>
<style lang="scss" scoped>
  .header-links {
    display: flex;
    align-items: center;

    &__item {
      display: inline-block;
      padding: 0.3rem 1.2rem;
      font: var(--font-text-t4);
      color: var(--color-base-dark);
      background-color: var(--color-grey-200);
      border-radius: 5rem;
      margin-right: 0.8rem;
    }
  }
</style>
