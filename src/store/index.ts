import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { Locales } from '@/i18n/config/locales'
import { defaultLocale } from '@/i18n/config'

interface RootState {
  selectedLanguage: string;
}

const storedVuexValue = window.localStorage.getItem('vuex')
export const storedVuex = storedVuexValue ? JSON.parse(storedVuexValue) : undefined

const state: RootState = {
  selectedLanguage: defaultLocale
}

export default createStore({
  state,
  getters: {
    selectedLanguage: state => state.selectedLanguage
  },
  mutations: {
    setLanguage (state, payload: Locales) {
      state.selectedLanguage = payload
    }
  },
  actions: {
    selectNewDefaultLanguage ({ getters, commit }, lang: Locales) {
      const { selectedLanguage }: { selectedLanguage: Locales } = getters
      if (lang !== selectedLanguage) {
        commit('setLanguage', lang)
      }
    }
  },
  modules: {
  },
  plugins: [createPersistedState({
    paths: ['selectedLanguage']
  })]
})
