<template lang="pug">
.modal(@click="closeModal" :class="isOpen ? 'is-open' : ''")
  .modal__container(
    :class="isOpen ? 'modal-open' : ''"
    @click.stop
    v-scroll-lock="isOpen"
  )
    button.modal-close.modal__close-btn(type="button" @click="closeModal")
      span
      span
    .modal__content
      slot
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeModal () {
      this.$emit('close', this.isOpen)
    }
  }
}
</script>

<style lang="scss">
.modal {
  --transition-time: 200ms;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #1e1e1e, $alpha: 0.6);
  opacity: 0;
  visibility: hidden;
  transition: opacity var(--transition-time), visibility var(--transition-time);

  &.is-open {
    opacity: 1;
    visibility: visible;
    transition: opacity var(--transition-time),
    visibility var(--transition-time);
  }

  &__container {
    position: absolute;
    top: 50%;
    left: 50%;
    display: none;
    height: auto;
    width: 100%;
    max-width: 75.2rem;
    background-color: var(--color-white);
    transform: translate(-50%, -50%);
    border-radius: 1.6rem;
    box-shadow: var(--box-shadow);

    &.modal-open {
      display: block;
    }
  }

  &__content {
    position: relative;
    padding: 3.4rem 4rem;
  }

  &__close-btn {
    position: absolute;
    top: 0;
    right: -7rem;
    width: 5.4rem;
    height: 5.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: var(--color-white-rgba-05);
    cursor: pointer;

    &:hover {
      // span {
      //   background-color: var(--color-light-green);
      // }
    }

    &:active {
      // span {
      //   background-color: var(--color-dark-green);
      // }
    }

    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 1.3rem;
      height: 0.1rem;
      background-color: var(--color-base-dark);
      display: block;
      transition: background-color var(--transition);

      &:nth-child(1) {
        transform: translate(-50%, -50%) rotate(-45deg);
      }

      &:nth-child(2) {
        transform: translate(-50%, -50%) rotate(45deg);
      }
    }
  }

  &__legend {
    font: var(--font-heading-h3-md);
    color: var(--color-base-dark);
    margin-bottom: 2.4rem;
  }
}
</style>
