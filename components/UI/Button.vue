<template lang="pug">
button.button
  span.button__inner
    slot
</template>

<script>
export default {}
</script>

<style lang="scss">
.button {
  padding: 2rem 2.4rem;
  border-radius: 0.8rem;
  color: var(--color-white);
  background: var(--gardient-primary);

  &__inner {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    font: var(--font-btn-1-md);
  }

  &__icon {
    margin-right: 1rem;
  }

  // mods
  &._no-icon {
    padding: 1.6rem 2.4rem;
  }

  &.small {
    padding: 1rem 2.4rem;

    &._no-icon {
      padding: 1.4rem 2.4rem;
    }
  }

  &._secondary {
    background: var(--color-white);
    color: var(--color-base-dark);
  }

  &._stroke {
    color: var(--color-base-dark);
    border: 1px solid var(--color-grey-400);
    background: transparent;
  }

  &.disabled {
    pointer-events: none;
    background: var(--color-grey-300);
    color: var(--color-grey-600);

    &._stroke {
      background: transparent;
      color: var(--color-grey-600);
      border-color: var(--color-grey-600);
    }
  }
}
</style>
