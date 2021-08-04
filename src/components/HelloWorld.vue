<template>
  <div class="hello">
    <h1>{{ $t("message.intro.titles.main") }} {{ msg }} {{ $t("message.intro.titles.main2") }}</h1>
    <p v-html="$t('message.intro.headline')"></p>
    <h3>{{ $t("message.intro.titles.plugins") }}</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
          >babel</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa"
          target="_blank"
          rel="noopener"
          >pwa</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router"
          target="_blank"
          rel="noopener"
          >router</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex"
          target="_blank"
          rel="noopener"
          >vuex</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
          >eslint</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha"
          target="_blank"
          rel="noopener"
          >unit-mocha</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-webdriverio"
          target="_blank"
          rel="noopener"
          >e2e-webdriverio</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript"
          target="_blank"
          rel="noopener"
          >typescript</a
        >
      </li>
    </ul>
    <h3>{{ $t("message.intro.titles.links") }}</h3>
    <ul>
      <li>
        <a :href="vueURL" target="_blank" rel="noopener">{{
          $t("message.intro.essentialLinks.Core Docs")
        }}</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank" rel="noopener">{{
          $t("message.intro.essentialLinks.Forum")
        }}</a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener">{{
          $t("message.intro.essentialLinks.Community Chat")
        }}</a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">{{
          $t("message.intro.essentialLinks.Twitter")
        }}</a>
      </li>
      <li>
        <a href="https://news.vuejs.org" target="_blank" rel="noopener">{{
          $t("message.intro.essentialLinks.News")
        }}</a>
      </li>
    </ul>
    <h3>{{ $t("message.intro.titles.ecosystem") }}</h3>
    <ul>
      <li>
        <a :href="vueRouterURL" target="_blank" rel="noopener">{{
          $t("message.intro.ecosystemLinks.vue-router")
        }}</a>
      </li>
      <li>
        <a :href="vuexURL" target="_blank" rel="noopener">{{
          $t("message.intro.ecosystemLinks.vuex")
        }}</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
          >{{ $t("message.intro.ecosystemLinks.vue-devtools") }}</a
        >
      </li>
      <li>
        <a :href="vueLoaderURL" target="_blank" rel="noopener">
          {{ $t("message.intro.ecosystemLinks.vue-loader") }}</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          rel="noopener"
          >{{ $t("message.intro.ecosystemLinks.awesome-vue") }}</a
        >
      </li>
    </ul>
    <select v-model="selectedLanguageModel" placeholder="Please Select">
      <option
        v-for="item in LayoutLanguages"
        :key="item.param"
        :label="item.title"
        :value="item.param"
      ></option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { LayoutLanguages } from '@/i18n/config/locales'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup () {
    const store = useStore()
    const { locale } = useI18n()
    const activeIndex = ref('4')
    const handleSelect = function (key: string, path: string) {
      console.log(key, path)
    }
    return {
      selectedLanguageModel: computed({
        get () {
          return store.getters.selectedLanguage
        },
        set (value: string) {
          locale.value = value
          store.dispatch('selectNewDefaultLanguage', value)
        }
      }),
      LayoutLanguages,
      activeIndex,
      handleSelect
    }
  },
  computed: {
    vueURL () {
      return useStore().getters.selectedLanguage === 'en_us'
        ? 'https://vuejs.org'
        : 'https://cn.vuejs.org'
    },
    vueRouterURL () {
      return useStore().getters.selectedLanguage === 'en_us'
        ? 'https://router.vuejs.org'
        : 'https://router.vuejs.org/zh'
    },
    vuexURL () {
      return useStore().getters.selectedLanguage === 'en_us'
        ? 'https://vuex.vuejs.org'
        : 'https://vuex.vuejs.org/zh'
    },
    vueLoaderURL () {
      return useStore().getters.selectedLanguage === 'en_us'
        ? 'https://vue-loader.vuejs.org'
        : 'https://vue-loader.vuejs.org/zh'
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
