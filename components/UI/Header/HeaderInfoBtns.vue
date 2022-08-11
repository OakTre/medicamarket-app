<template lang="pug">
.header-popups
  .header-popups__btn-wrapper
    button.info-btn.js-info-btn(@click="OpenLikePopup")
      svg-icon.info-btn__icon(name="like", width="24", height="24")
      span.info-btn__count {{ carts.length }}
    //- попап избранное
    Popup(:isOpen="$store.state.popupLike")
      ul.popup__body
        li.popup__body-item(v-for="cart in carts")
          CatalogCartSmall(:name="cart.name" count=false price=false)
      .popup__footer
        Button.small._no-icon.popup__footer-btn
          span.button__name
            | Смотреть избранное

  .header-popups__btn-wrapper
    button.info-btn.js-info-btn(@click="OpenComparisonPopup")
      svg-icon.info-btn__icon(name="comparison", width="24", height="24")
      span.info-btn__count {{ carts.length }}
    //- попап сравнения
    Popup(:isOpen="$store.state.popupComparison")
      ul.popup__body
        li.popup__body-item(v-for="cart in carts")
          CatalogCartSmall(:name="cart.name")
      .popup__footer
        Button.small._no-icon.popup__footer-btn
          span.button__name
            | Сравнить товары

  .header-popups__btn-wrapper
    button.info-btn.js-info-btn(@click="OpenCartPopup")
      svg-icon.info-btn__icon(name="cart", width="24", height="24")
      span.info-btn__count {{ cartsCatalog.length }}
    //- попап корзины
    Popup(:isOpen="$store.state.popupCart")
      .popup__head
        span.popup__head-legend В корзине {{ cartsCatalog.length }} товаров
        span.popup__head-legend 16 940 ₽
      ul.popup__body
        li.popup__body-item(v-for="cart in cartsCatalog")

          CatalogCartSmall(
            :name="cart.name"
            :isEmpty="cart.isEmpty"
            :isEmptyClass="cart.isEmptyClass"
            :icon="cart.icon"
            :price="cart.price"
            :count="cart.count"
            :isOldPriceText="cart.isOldPriceText"
            )

      .popup__footer
        Button.small._no-icon.popup__footer-btn
          span.button__name
            | В корзину
        Button.small._no-icon._stroke.popup__footer-btn
          span.button__name
            | Купить в 1 клик
</template>

<script>
export default {
  name: 'HeaderInfoBtns',
  data () {
    return {
      carts: [
        { name: 'Тонометр LD 30 с сетевым адаптером' },
        { name: 'Тонометр LD 30 с сетевым адаптером' },
        { name: 'Тонометр LD 30 с сетевым адаптером' },
        { name: 'Тонометр LD 30 с сетевым адаптером' },
        { name: 'Тонометр LD 30 с сетевым адаптером' },
        { name: 'Тонометр LD 30 с сетевым адаптером' },
        { name: 'Тонометр LD 30 с сетевым адаптером' },
        { name: 'Тонометр LD 30 с сетевым адаптером' },
        { name: 'Тонометр LD 30 с сетевым адаптером' }
      ],
      cartsCatalog: [
        { name: 'Тонометр AND UA-888 автоматический с универсальной манжетой и адаптером', isEmpty: true, isEmptyClass: 'mod-empty' },
        { name: 'Тонометр LD 30 с сетевым адаптером', icon: true, price: true, count: true },
        { name: 'Тонометр LD 30 с сетевым адаптером', icon: true, price: true, count: true, isOldPriceText: '6 322 ₽' },
        { name: 'Тонометр LD 30 с сетевым адаптером', icon: true, price: true, count: true }
      ]
    }
  },
  methods: {
    OpenLikePopup () {
      this.$store.commit('SET_LIKE_POPUP', true)
    },
    OpenComparisonPopup () {
      this.$store.commit('SET_COMP_POPUP', true)
    },
    OpenCartPopup () {
      this.$store.commit('SET_CART_POPUP', true)
    }
  }
}
</script>

<style lang="scss" scoped>
.header-popups {
  display: flex;
  align-items: center;

  &__btn-wrapper {
    position: relative;
    margin-right: 1.5rem;
    flex-shrink: 0;

    &:last-child {
      margin-right: 0;
    }
  }
}

.info-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.2rem;
  height: 3.2rem;

  &__icon {
    width: 2.4rem;
    height: 2.4rem;
    fill: var(--color-base-dark);
    pointer-events: none;
  }

  &__count {
    position: absolute;
    top: -0.4rem;
    right: -0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    background: var(--gardient-primary);
    border-radius: 50%;
    color: var(--color-white);
    font: var(--font-text-t5-md);
    pointer-events: none;
  }
}
</style>
