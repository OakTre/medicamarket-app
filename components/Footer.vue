<template lang="pug">
footer.footer
  .site-container.footer__container
    .grid-container.footer__top
      .footer__top-block
        a.footer__tel(href="tel:+78005502015", data-text="Бесплатно по России") 8 800 550–20–15
        span.footer__legend Доставка и оплата
        ul.footer__nav-list
          li.footer__nav-item(v-for="item in nav1")
            a.footer__nav-link(:href="item.link") {{ item.name }}

        span.footer__legend Компаниям
        ul.footer__nav-list
          li.footer__nav-item(v-for="item in nav3")
            a.footer__nav-link(:href="item.link") {{ item.name }}
      .footer__top-block
        a.footer__tel(href="tel:+73852570077", data-text="Бесплатно по России") (3852) 57–00–77

        span.footer__legend Гарантия и сервис
        ul.footer__nav-list
          li.footer__nav-item(v-for="item in nav2")
            a.footer__nav-link(:href="item.link") {{ item.name }}

        span.footer__legend Покупателям
        ul.footer__nav-list
          li.footer__nav-item(v-for="item in nav4")
            a.footer__nav-link(:href="item.link") {{ item.name }}
      .footer__top-block
        .footer__shield
          p.footer__shield-text
            | Получайте самые интересные предложения и скидки
          form.footer__shield-form(action="/")
            .footer__shield-form-btn-wrapper
              input(type="text" name="subscribe" placeholder="Введите Email")
              Button._secondary.small._no-icon
                span.button__name
                  | Подписаться
              //- +button("Подписаться", null, "_secondary small _no-icon")
            p Нажимая кнопку «Подписаться» вы соглашаетесь с политикой конфиденциальности
    .grid-container.footer__copyright
      .grid-container__block.footer__copyright-block
        p © Все права защищены 2022
      .grid-container__block.footer__copyright-block
        a(href="/") Карта сайта
        a(href="/") Нормативная информация
        a(href="/") Политика конфиденциальности
        a(href="/") Как сделать заказ
        a.footer__markweber(href="/")
          | Разработка сайта
          //- +icon-multi("MarkWeber")
</template>

<script>
export default {
  data () {
    return {
      nav1: [
        { link: '/', name: 'Самовывоз' },
        { link: '/', name: 'Доставка курьером' },
        { link: '/', name: 'Доставка трансопртной компанией' },
        { link: '/', name: 'Способ оплаты' }
      ],
      nav2: [
        { link: '/', name: 'Возврат/обмен' },
        { link: '/', name: 'Сопровождение обращений' },
        { link: '/', name: 'Ремонт и услуги' },
        { link: '/', name: 'Сервисные центры' },
        { link: '/', name: 'Прокат мед. техники' }
      ],
      nav3: [
        { link: '/', name: 'Поставщикам' },
        { link: '/', name: 'Медучреждениям' },
        { link: '/', name: 'Оптовым покупателям' }
      ],
      nav4: [
        { link: '/', name: 'О нас' },
        { link: '/', name: 'Индивидуальные стельки под заказ' },
        { link: '/', name: 'Карта рассрочки «Халва»' },
        { link: '/', name: 'Бонусная программа' },
        { link: '/', name: 'Компенсация по ИПР' },
        { link: '/', name: 'Новости' },
        { link: '/', name: 'Контакты' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/global/helpers/mixins";

.footer {
  padding-top: 7.7rem;
  padding-bottom: 7rem;
  border-top: 1px solid var(--color-grey-400);

  &__container {
    display: flex;
    flex-direction: column;
    gap: 8rem;
  }

  &__top-block {
    &:nth-child(1) {
      grid-column: 6 span;
    }

    &:nth-child(2) {
      grid-column: 6 span;
    }

    &:nth-child(3) {
      grid-column: 12 span;
    }
  }

  &__tel {
    position: relative;
    display: inline-block;
    font: var(--font-heading-h2-md);
    margin-bottom: 10.5rem;

    &::before {
      position: absolute;
      top: calc(100% + 1rem);
      left: 0;
      display: block;
      font: var(--font-text-t3);
      color: var(--color-grey-600);
      content: attr(data-text);
    }
  }

  &__legend {
    display: block;
    margin-bottom: 2.4rem;
    font: var(--font-heading-h5-md);
  }

  &__nav-list {
    margin-bottom: 4.6rem;

    &:nth-last-of-type(1) {
      margin-bottom: 0;
    }
  }

  &__nav-item {
    margin-bottom: 1.2rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__nav-link {
    font: var(--font-text-t3);
    color: var(--color-grey-600);
    // @include gradienText;
  }

  &__copyright-block {
    display: flex;
    align-items: center;
    gap: 2.8rem;

    p {
      font: var(--font-text-t4);
      color: var(--color-grey-600);
    }

    a {
      font: var(--font-text-t4);
      color: var(--color-grey-600);
      // @include gradienText;
    }
  }

  &__markweber {
    margin-left: auto;
    display: flex;

    svg {
      transform: translateY(0.2rem);
      width: 8rem;
      height: 2rem;
      margin-left: 0.5rem;
    }
  }

  &__shield {
    padding: 5.4rem 6.4rem;
    border-radius: 2.4rem;
    background-color: var(--color-green-type4);
    color: var(--color-white);
    min-height: 46.1rem;
    display: flex;
    flex-direction: column;
    background-image: url('~@/assets/img/footer/shield-img.svg');
    background-position: left bottom;
    background-size: contain;
    background-repeat: no-repeat;
  }

  &__shield-text {
    font: var(--font-heading-h2-md);
    margin-bottom: 1rem;
  }

  &__shield-form {
    margin-top: auto;
    display: flex;
    align-items: center;

    p {
      font: var(--font-text-t5);
      margin-left: 2.4rem;
    }
  }

  &__shield-form-btn-wrapper {
    display: flex;
    align-items: center;
    height: 5.6rem;
    border: 1px solid var(--color-white);
    border-radius: 1rem;
    padding: 0.6rem;
    min-width: 36rem;

    input {
      height: 100%;
      background-color: transparent;
      border: none;
      outline: none;
      color: var(--color-white);
      font: var(--font-text-t3-md);
      flex-grow: 1;
      padding: 0 1.8rem;

      @include placeholder {
        color: var(--color-white);
        font: var(--font-text-t3-md);
      }
    }
  }

  &__shield-form-btn {
    padding: 1.4rem;
    background-color: var(--color-white);
    color: var(--color-base-dark);
    font: var(--font-btn-1-md);
    border-radius: 0.8rem;
  }
}
</style>
