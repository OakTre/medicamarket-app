<template lang="pug">
.catalog-cart-small(:class="isEmptyClass")
  a.catalog-cart-small__link(href="/")
    img.catalog-cart-small__image(
      :src="getDynamicFile('img/catalog-cart/small/img1.jpg')",
      alt=""
    )
  .catalog-cart-small__info
    a.catalog-cart-small__name(href="/")
      | {{ name }}
    .catalog-cart-small__details-wrapper
      span.catalog-cart-small__is-empty(v-if="isEmpty") Нет в наличии
      span.catalog-cart-small__price(:data-old-price="isOldPriceText" v-if="price")
        | {{ priceText }}
      span.catalog-cart-small__count(v-if="count")
        | {{ countText }}
  button.catalog-cart-small__delete-btn(v-if="icon")
    svg-icon.catalog-cart-small__icon(
      name="trash",
      width="16",
      height="16"
    )
</template>

<script>
export default {
  props: {
    isEmptyClass: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: 'img1'
    },
    name: {
      type: String,
      default: 'Дефолтное значение'
    },
    isEmpty: {
      type: Boolean,
      default: false
    },
    isOldPriceText: {
      type: String,
      default: ''
    },
    count: {
      type: Boolean
    },
    countText: {
      type: String,
      default: '2шт'
    },
    icon: {
      type: Boolean,
      default: false
    },
    price: {
      type: Boolean
    },
    priceText: {
      type: String,
      default: '4 334 ₽'
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/global/helpers/mixins";

.catalog-cart-small {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1.2rem;

  &.mod-empty {
    .catalog-cart-small__name,
    .catalog-cart-small__price,
    .catalog-cart-small__count {
      color: var(--color-grey-600);
    }

    .catalog-cart-small__link {
      opacity: 0.5;
    }
  }

  &__link {
    display: inline-block;
    width: 6rem;
    height: 6rem;
    border-radius: 0.4rem;
    overflow: hidden;
    flex-shrink: 0;
  }

  &__image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    mix-blend-mode: darken;
  }

  &__info {

  }

  &__name {
    display: inline-block;
    font: var(--font-text-t4);
    margin-bottom: 0.6rem;
  }

  &__details-wrapper {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  &__price {
    position: relative;
    display: flex;
    align-items: center;
    font: var(--font-text-t4-md);
    gap: 0.8rem;

    &::after {
      font: var(--font-text-t5);
      color: var(--color-grey-600);
      text-decoration: line-through;
      content: attr(data-old-price);
    }
  }

  &__count {
    font: var(--font-text-t5);
    padding: 0.1rem 0.3rem;
    border-radius: 99.9rem;
    background-color: var(--color-grey-300);
    color: var(--color-grey-600);
  }

  &__delete-btn {
    width: 1.6rem;
    height: 1.6rem;
    margin-left: auto;
    margin-right: 2.6rem;
    flex-shrink: 0;

    &:hover {
      .icon {
        stroke: var(--color-green-type4);
      }
    }
  }

  &__icon {
    width: 100%;
    height: 100%;
    fill: none;
    stroke: var(--color-grey-600);
    transition: stroke var(--transition);
  }

  &__is-empty {
    font: var(--font-text-t4);
    color: var(--color-grey-600);
  }
}

</style>
