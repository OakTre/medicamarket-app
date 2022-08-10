<template lang="pug">
header.header
  .site-container.header__container
    .header__row.grid-container
      .grid-container__block
        a.header__page-link(href="./") Частным клиентам
        a.header__page-link(href="./") Бизнесу
      .grid-container__block
        .header__popup-btn-wrapper.js-popup-parent
          button.header__popup-btn._city.js-popup-open Барнаул
        button.header__popup-btn._orderStatus Статус заказа
        ul.header__top-nav
          li.header__top-nav-item(v-for="item in navItems")
            a.header__top-nav-link(:href="item.link")
              | {{ item.name }}
        a.header__tel(href="tel:+78005502015")
          span.header__tel-number
            | 8 800 550–20–15
          span.header__tel-text Бесплатно по России
        a.header__personal-cabinet-btn(href="./")
          svg-icon.header__personal-cabinet-btn-icon(
            name="user.svg",
            width="20",
            height="20"
          )
          span.header__personal-cabinet-btn-count
            svg-icon.header__personal-cabinet-btn-count-icon(
              name="bonus.svg",
              width="14",
              height="14"
            )
            | 420

    .header__row.grid-container
      .grid-container__block
        a.header__logo-link(href="./")
          img.header__logo(
            src="@/assets/img/logo.svg",
            alt="Логотип Медикамаркет"
          )
      .grid-container__block._flex-gap
        button.button.header__catalog-btn.small.js-open-catalog-menu
          span.button__inner
            svg-icon.button__icon._shown(name="menu", width="24", height="24")
            svg-icon.button__icon._hidden(
              name="cross",
              width="24",
              height="24"
            )
            span.button__name
              | Каталог
        Button(class="small _stroke header__sales-btn")
          svg-icon.button__icon(name="sale", width="24", height="24")
          span.button__name
            | Акции
        form.header__search(action="/")
          button.header__search-btn.js-search-btn(type="button")
            svg-icon.header__search-btn-icon(
              name="search",
              width="20",
              height="20"
            )
            svg-icon.header__search-btn-icon._cross(
              name="cross",
              width="20",
              height="20"
            )
          input.input.js-search-input(
            type="text",
            name="q",
            placeholder="Поиск оборудования"
          )
        .header__info-btns
          .info-btn__wrapper.js-popup-parent
            button.info-btn.js-popup-open
              svg-icon.info-btn__icon(name="like", width="24", height="24")
              span.info-btn__count 7
            Popup
              ul.popup__body
                li.popup__body-item(v-for="cart in carts")
                  CatalogCartSmall(:name="cart.name" icon=true)
              .popup__footer
                Button(class="small _no-icon popup__footer-btn")
                  span.button__name
                    | Смотреть избранное
          .info-btn__wrapper.js-popup-parent
            button.info-btn.js-popup-open
              svg-icon.info-btn__icon(
                name="comparison",
                width="24",
                height="24"
              )
              span.info-btn__count 7
          .info-btn__wrapper.js-popup-parent
            button.info-btn.js-popup-open
              svg-icon.info-btn__icon(name="cart", width="24", height="24")
              span.info-btn__count 7
</template>
<script>
export default {
  data () {
    return {
      navItems: [
        { link: '/', name: 'Доставка и оплата' },
        { link: '/', name: 'Гарантия и сервис' },
        { link: '/', name: 'Покупателям' },
        { link: '/', name: 'Магазины' }
      ],
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
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
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

  &__page-link {
    display: inline-block;
    padding: 0.3rem 1.2rem;
    font: var(--font-text-t4);
    color: var(--color-base-dark);
    background-color: var(--color-grey-200);
    border-radius: 5rem;
    margin-right: 0.8rem;
  }

  &__popup-btn {
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
      margin-right: 8.9rem;
    }
  }

  &__top-nav {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    margin-right: 6.2rem;
  }

  &__top-nav-link {
    font: var(--font-text-t4);
    color: var(--color-grey-600);
  }

  &__tel {
    margin-right: 1rem;
  }

  &__tel-number {
    display: block;
    font: var(--font-text-t4-md);
    color: var(--color-base-dark);
  }

  &__tel-text {
    font: var(--font-text-t5);
    color: var(--color-grey-600);
  }

  &__personal-cabinet-btn {
    display: flex;
    align-items: center;
    padding: 1rem 1.2rem;
    border-radius: 99.9rem;
    background-color: var(--color-grey-200);
    margin-left: auto;
  }

  &__personal-cabinet-btn-icon {
    width: 2rem;
    height: 2rem;
    margin-right: 0.9rem;
    color: var(--color-grey-600);
  }

  &__personal-cabinet-btn-count {
    display: inline-flex;
    align-items: center;
    padding: 0.3rem 0.8rem;
    color: var(--color-white);
    font: var(--font-text-t5-md);
    border-radius: 99.9rem;
    background: linear-gradient(281.19deg, #14b2f2 -16.7%, #d222cb 120.21%);
  }

  &__personal-cabinet-btn-count-icon {
    margin-right: 0.4rem;
  }

  &__logo-link {
    display: inline-block;
  }

  &__logo {
    display: block;
    width: 32.2rem;
    height: 6.7rem;
    object-fit: contain;
  }

  &__catalog-btn {
    .button__inner {
      pointer-events: none;
    }

    &.is-active {
      ._hidden {
        display: block;
      }

      ._shown {
        display: none;
      }
    }

    ._hidden {
      display: none;
    }
  }

  &__sales-btn {
    .icon {
      fill: none;
      stroke: currentColor;
    }
  }

  &__search {
    position: relative;
    max-width: 65.6rem;
    width: 100%;
    height: 4.4rem;
    border-radius: 0.8rem;
  }

  &__search-btn {
    position: absolute;
    top: 50%;
    right: 1.6rem;
    width: 2rem;
    height: 2rem;
    display: block;
    transform: translateY(-50%);
    color: var(--color-grey-500);

    &.is-cross-shown {
      .header__search-btn-icon {
        display: none;

        &._cross {
          display: block;
        }
      }
    }
  }

  &__search-btn-icon {
    width: 100%;
    height: 100%;
    fill: none;
    stroke: currentColor;

    &._cross {
      display: none;
      fill: currentColor;
      stroke: none;
    }
  }

  &__info-btns {
    margin-left: auto;
    display: flex;
  }
}

.info-btn {
  &__wrapper {
    position: relative;
    margin-right: 1.5rem;
    flex-shrink: 0;

    &:last-child {
      margin-right: 0;
    }
  }

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
