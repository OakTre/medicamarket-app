<template lang="pug">
header.header
  .site-container.header__container
    HeaderTop
    HeaderBottom
  Modal.modal-city(@close="closeModal" :isOpen="$store.state.globalModal")
    .modal__legend Выберите город
    form.modal-city__form
      label.modal-city__input-label
        input(type="search" name="city-search" id="search" placeholder="Быстрый поиск" data-items="search-items" class="input modal-city__input mod-big")
        svg-icon(name="search" class="modal-city__icon" width="20" height="20")
    .modal-city__cities-wrapper
      .modal-city__cities(data-items-target="search-items")
          button.modal-city__cities-item(
            v-for="item in cities"
            class=""
            :data-city="item"
          ) {{ item }}

</template>
<script>
import HeaderTop from '@/components/UI/Header/HeaderTop'
import HeaderBottom from '@/components/UI/Header/HeaderBottom'

export default {
  components: {
    HeaderTop,
    HeaderBottom
  },
  data () {
    return {
      cities: [
        'Барнаул', 'Воронеж', 'Самара', 'Москва', 'Волгоград', 'Челябинск', 'Санкт-Петербург',
        'Красноярск', 'Ижевск', 'Новосибирск', 'Нижний Новгород', 'Владикавказ', 'Казань', 'Пермь',
        'Иваново', 'Екатеринбург', 'Омск', 'Владимир', 'Томск', 'Ростов-на-Дону', 'Подольск',
        'Пермь', 'Уфа', 'Йошкар-Ола', 'Омск', 'Владимир', 'Томск', 'Ростов-на-Дону', 'Подольск',
        'Пермь', 'Уфа', 'Йошкар-Ола', 'Томск', 'Ростов-на-Дону', 'Подольск', 'Пермь', 'Уфа', 'Йошкар-Ола'
      ]
    }
  },
  methods: {
    closeModal (value) {
      this.$store.commit('SET_GLOBAL_MODAL', false)
    }
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

.modal-city {
  .modal__content {
    display: flex;
    flex-direction: column;
  }

  &__form {
    margin-bottom: 2.4rem;
  }

  &__input-label {
    position: relative;
    display: block;
    height: 5.6rem;
  }

  &__icon {
    position: absolute;
    top: 50%;
    right: 1.6rem;
    transform: translateY(-50%);
    width: 2rem;
    height: 2rem;
    fill: none;
    stroke: var(--color-grey-600);
  }

  &__cities-wrapper {
    position: relative;
    flex-grow: 1;
  }

  &__cities {
    position: relative;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: var(--grid-offset);
  }

  &__cities-item {
    grid-column: 4 span;
  }
}
</style>
