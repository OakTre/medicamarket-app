<template lang="pug">
  .header-info-popups
    .header-info-popups__popup-wrapper
      button.js-info-btn.header-info-popups__btn._city( @click="openCityPopup") {{ city }}

      //- попап выбор города
      Popup(:isOpen="$store.state.poupCity" class="popup_city")
        .popup__head
          span.popup__head-legend Ваш город {{ city }}
        .popup__footer
          Button.small._no-icon.popup__footer-btn(
            @click.native="closeCityPopup"
          )
            span.button__name
              | Да, все верно
          Button.small._no-icon._stroke.popup__footer-btn(
            @click.native="openCityModal"
          )
            span.button__name
              | Выбрать город

    button.header-info-popups__btn._orderStatus Статус заказа
</template>
<script>
export default {
  name: 'HeaderInfoPopups',
  data () {
    return {
      flag: false,
      city: 'Барнаул'
    }
  },
  methods: {
    openCityPopup () {
      this.$store.commit('SET_CITY_POPUP', true)
    },
    closeCityPopup () {
      this.$store.commit('SET_CITY_POPUP', false)
    },
    openCityModal () {
      this.$store.commit('SET_GLOBAL_MODAL', true)
    }
  }
}
</script>
<style lang="scss" scoped>
  .header-info-popups {
    display: flex;
    align-items: center;

    &__popup-wrapper {
      position: relative;
    }

    &__btn {
      position: relative;
      font: var(--font-text-t4);
      color: var(--color-base-dark);
      background-repeat: no-repeat;
      background-size: 1.6rem 1.6rem;
      background-position: center left;
      padding-left: 2.2rem;
      margin-right: 1.7rem;

      &._city {
        background-image: url("~@/assets/icons/mono/navigation.svg");
      }

      &._orderStatus {
        background-image: url("~@/assets/icons/mono/clock.svg");
      }
    }
  }
</style>
