<template lang="pug">
  a.header-tel(href="tel:+78005502015")
    span.header-tel__number
      | 8 800 550–20–15
    span.header-tel__text Бесплатно по России
</template>
<script>
export default {
  name: 'HeaderTel'
}
</script>
<style lang="scss" scoped>
  .header-tel {
    &__number {
      display: block;
      font: var(--font-text-t4-md);
      color: var(--color-base-dark);
    }

    &__text {
      font: var(--font-text-t5);
      color: var(--color-grey-600);
    }
  }
</style>
