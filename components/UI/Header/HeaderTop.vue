<template lang="pug">
  .header__row.grid-container
    .grid-container__block
      HeaderLinks

    .grid-container__block
      HeaderInfoPopups.header__popup-btns

      HeaderNav.header__top-nav

      HeaderTel.header__tel

      HeaderAuth.header__personal-cabinet-btn

</template>
<script>
import HeaderNav from '@/components/UI/Header/HeaderNav'
import HeaderAuth from '@/components/UI/Header/HeaderAuth'
import HeaderLinks from '@/components/UI/Header/HeaderLinks'
import HeaderTel from '@/components/UI/Header/HeaderTel'
import HeaderInfoPopups from '@/components/UI/Header/HeaderInfoPopups'

export default {
  name: 'HeaderTop',
  components: {
    HeaderNav,
    HeaderAuth,
    HeaderLinks,
    HeaderTel,
    HeaderInfoPopups
  }
}
</script>
<style lang="scss">
</style>
