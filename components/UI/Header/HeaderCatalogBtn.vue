<template lang="pug">
  Button.small.catalog-btn
    svg-icon.button__icon._shown(name="menu", width="24", height="24")
    svg-icon.button__icon._hidden(name="cross", width="24", height="24")
    span.button__name
      | Каталог
</template>

<script>
export default {
  name: 'HeaderCatalogBtn'
}
</script>

<style lang="scss">
  .catalog-btn {
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

</style>
