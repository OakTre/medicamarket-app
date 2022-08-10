<template lang="pug">
  nav.nav
    ul.nav__list
      li.nav__item(v-for="item in navItems")
        a.nav__item-link(:href="item.link")
          | {{ item.name }}
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
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .nav {
    &__list {
      display: flex;
      align-items: center;
      gap: 1.6rem;
    }

    &__item-link {
      font: var(--font-text-t4);
      color: var(--color-grey-600);
    }
  }
</style>
