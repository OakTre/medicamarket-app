<template lang="pug">
header.header
  .site-container.header__container
    HeaderTop
    HeaderBottom

</template>
<script>
import HeaderTop from '@/components/UI/Header/HeaderTop'
import HeaderBottom from '@/components/UI/Header/HeaderBottom'

export default {
  components: {
    HeaderTop,
    HeaderBottom
  }
}
</script>
<style lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
  width: 100%;
  padding-top: 1.2rem;
  height: var(--header-height);

  &__row {
    &:nth-child(1) {
      margin-bottom: 1.9rem;
    }

    .grid-container__block {
      display: flex;
      align-items: center;

      &._flex-gap {
        gap: 1.2rem;
      }
    }
  }

  &__popup-btns {
    margin-right: 8.9rem;
  }

  &__top-nav {
    margin-right: 6.2rem;
  }

  &__tel {
    margin-right: 1rem;
  }

  &__personal-cabinet-btn {
    margin-left: auto;
  }

  &__sales-btn {
    .icon {
      fill: none;
      stroke: currentColor;
    }
  }

  &__info-btns {
    margin-left: auto;
  }
}
</style>
