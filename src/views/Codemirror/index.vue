<template>
  <h3>代码块ui插件</h3>
  <h4>插件：</h4>
  npm地址：
  <a href="https://www.npmjs.com/package/codemirror-editor-vue3" target="_blank"
    >https://www.npmjs.com/package/codemirror-editor-vue3</a
  >
  <h4>安装：</h4>
  <Codemirror :options="CODE_THEME" border v-model:value="INSTALL_CODE" />
  <h4>使用：</h4>
  <h5>1、main.ts文件</h5>
  <Codemirror :options="CODE_THEME" border v-model:value="CONFIG_CODE" />
  <h5>
    options配置地址：<a :href="OPTION_CONFIG_URL" target="_blank">
      {{ OPTION_CONFIG_URL }}
    </a>
  </h5>
</template>

<script setup lang="ts">
import { CODE_THEME } from "../../constants";
import { INSTALL_CODE, CONFIG_CODE, OPTION_CONFIG_URL } from "./constants";
</script>

<style scoped></style>
