export const state = () => ({
  popupLike: false,
  popupComparison: false,
  popupCart: false,
  poupCity: false,
  globalModal: false
})

export const mutations = {
  SET_LIKE_POPUP (state, value) {
    state.popupComparison = false
    state.popupCart = false
    state.poupCity = false
    state.popupLike = value
  },
  SET_COMP_POPUP (state, value) {
    state.popupLike = false
    state.popupCart = false
    state.poupCity = false
    state.popupComparison = value
  },
  SET_CART_POPUP (state, value) {
    state.popupComparison = false
    state.popupLike = false
    state.poupCity = false
    state.popupCart = value
  },
  SET_CITY_POPUP (state, value) {
    state.popupComparison = false
    state.popupLike = false
    state.popupCart = false
    state.poupCity = value
  },
  SET_GLOBAL_MODAL (state, value) {
    state.poupCity = false
    state.globalModal = value
  }
}
