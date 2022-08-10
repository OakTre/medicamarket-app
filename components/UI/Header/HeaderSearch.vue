<template lang="pug">
form.header-search(action="/")
  button.header-search__btn(type="button")
    svg-icon.header-search__btn-icon(name="search", width="20", height="20")
    svg-icon.header-search__btn-icon._cross(
      name="cross",
      width="20",
      height="20"
    )
  input.input(type="text", name="q", placeholder="Поиск оборудования")
</template>

<script>
export default {
  name: 'HeaderSearch'
}
</script>

<style lang="scss">
.header-search {
  position: relative;
  max-width: 65.6rem;
  width: 100%;
  height: 4.4rem;
  border-radius: 0.8rem;

  &__btn {
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

  &__btn-icon {
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
}
</style>
