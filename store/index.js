export const state = () => ({
  locales: ['en', 'ja'],
  locale: 'en',
  page: 'index'
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  },
  UPDATE_PAGE(state, pageName) {
    state.page = pageName
    console.log('pageName', pageName)
  }
}
