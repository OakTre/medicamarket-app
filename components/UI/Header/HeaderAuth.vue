<template lang="pug">
a.personal-cabinet-btn(href="./")
  svg-icon.personal-cabinet-btn__icon(
    name="user.svg",
    width="20",
    height="20"
  )
  span.personal-cabinet-btn__count
    svg-icon.personal-cabinet-btn__count-icon(
      name="bonus.svg",
      width="14",
      height="14"
    )
    | 420
</template>
<script>
export default {
  name: 'HeaderAuth'
}
</script>
<style lang="scss" scoped>
  .personal-cabinet-btn {
    display: flex;
    align-items: center;
    padding: 1rem 1.2rem;
    border-radius: 99.9rem;
    background-color: var(--color-grey-200);

    &__icon {
      width: 2rem;
      height: 2rem;
      margin-right: 0.9rem;
      color: var(--color-grey-600);
    }

    &__count {
      display: inline-flex;
      align-items: center;
      padding: 0.3rem 0.8rem;
      color: var(--color-white);
      font: var(--font-text-t5-md);
      border-radius: 99.9rem;
      background: linear-gradient(281.19deg, #14b2f2 -16.7%, #d222cb 120.21%);
    }

    &__count-icon {
      margin-right: 0.4rem;
    }
  }
</style>
