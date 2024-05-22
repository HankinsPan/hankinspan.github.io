<script setup>
import DefaultTheme from "vitepress/theme";
import Giscus from '@giscus/vue';

const {Layout} = DefaultTheme

</script>

<template>
  <Layout>
    <template #doc-after>

      <div class="giscus">
        <Giscus
            :key="giscus"
            host="https://giscus.app"
            repo="hviwen/hviwen.github.io"
            repoId="MDEwOlJlcG9zaXRvcnkxNDEyNjM2MTU="
            category="General"
            categoryId="DIC_kwDOCGuC_84Cfgdv"
            mapping="pathname"
            term="pathname"
            strict="0"
            theme="preferred_color_scheme"
            reactionsEnabled="1"
            emitMetadata="1"
            crossorigin="anonymous"
            lang="zh-CN"
            input-position="top"
            loading="lazy"
        />
      </div>
    </template>
  </Layout>
</template>

<script>
import {watch} from 'vue'
import {useRoute, useData} from 'vitepress'

export default {
  mounted() {
    const vitePressData = useData()
    this.isDark = vitePressData.isDark

    const route = useRoute()
    watch(route, () => {
      this.giscus = !this.giscus
    })
  },

  data() {
    return {
      giscus: false,
      isDark: false
    }
  }
}

</script>

<style scoped>
img.pv {
  margin-top: 1em;
}

div.giscus {
  margin-top: 2em;
}

.donation {
  margin-top: 2em;
}

.donation div {
  margin: 0 auto;
  flex: 0 1 auto;
  flex-direction: row;
  max-width: max-content;
  row-gap: 10px;
}

.donation img {
  display: inline-block;
  zoom: 25%;
  margin: 4em;
}
</style>