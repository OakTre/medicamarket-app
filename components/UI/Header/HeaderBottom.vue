<template lang="pug">
.header__row.grid-container
  .grid-container__block
    Logo

  .grid-container__block._flex-gap
    HeaderCatalogBtn

    Button.small._stroke.header__sales-btn
      svg-icon.button__icon(name="sale", width="24", height="24")
      span.button__name
        | Акции

    HeaderSearch

    HeaderInfoBtns.header__info-btns

</template>
<script>
import Logo from '@/components/UI/Logo'
import HeaderSearch from '@/components/UI/Header/HeaderSearch'
import HeaderInfoBtns from '@/components/UI/Header/HeaderInfoBtns'
import HeaderCatalogBtn from '@/components/UI/Header/HeaderCatalogBtn'

export default {
  name: 'HeaderBottom',
  components: {
    Logo,
    HeaderSearch,
    HeaderInfoBtns,
    HeaderCatalogBtn
  }
}
</script>
<style lang="scss">
</style>
