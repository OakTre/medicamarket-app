<template lang="pug">
.popup(
  :class="isOpen ? 'is-shown' : ''"
  v-click-outside="onClickOutside"
)
  .popup__container
    slot
</template>

<script>
export default {
  name: 'Popup',
  props: {
    isOpen: {
      type: Boolean
    }
  },
  methods: {
    onClickOutside (event) {
      if (!event.target.classList.contains('js-info-btn') && !event.target.closest('.popup')) {
        this.$store.commit('SET_LIKE_POPUP', false)
        this.$store.commit('SET_COMP_POPUP', false)
        this.$store.commit('SET_CART_POPUP', false)
        this.$store.commit('SET_CITY_POPUP', false)
      }
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/global/helpers/mixins";

.popup {
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 15;
  padding-top: 3rem;
  opacity: 0;
  visibility: hidden;
  transition: opacity var(--transition), visibility var(--transition);

  &.is-shown {
    opacity: 1;
    visibility: visible;
  }

  &__container {
    width: 46.4rem;
    max-height: 35.3rem;
    border-radius: 1.6rem;
    background-color: var(--color-white);
    padding: 2.4rem;
    box-shadow: var(--box-shadow);
  }

  &__head {
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--color-grey-300);
    margin-bottom: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__head-legend {
    font: var(--font-text-t4-md);
    display: block;
  }

  &__body {
    position: relative;
    margin-bottom: 1.6rem;
    max-height: 18.9rem;
    --height: 1rem;
    padding-bottom: var(--height);
    overflow: auto;

    @include customScrollbar();

    &::before {
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 1;
      width: 100%;
      height: var(--height);
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.4) 0,
        #fff 100%
      );
      content: "";
    }
  }

  &__body-item {
    margin-bottom: 0.3rem;

    &:nth-last-of-type(1) {
      margin-bottom: 0;
    }
  }

  &__footer {
    display: flex;
    gap: 0.6rem;
  }

  &__footer-btn {
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
  }

  &_city {
    padding-top: 2rem;
    right: auto;
    left: 0;

    .popup__container {
      max-width: 37.7rem;
    }

    .popup__head {
      padding-bottom: 0;
      border: none;
      margin-bottom: 2.4rem;
    }

    .popup__head-legend {
      font: var(--font-text-t2-md);
    }
  }
}
</style>
