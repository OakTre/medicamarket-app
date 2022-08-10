<template lang="pug">
  .page-wrapper
    Header
    main.page-main.main
      nuxt
    Footer
</template>
<script>
import Header from '@/components/HeaderComponent'
import Footer from '@/components/Footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="scss">

</style>
