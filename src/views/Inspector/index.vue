<template>
  <h3>一个用于从网页端元素位置打开编辑器对应位置的插件</h3>

  <h4>安装：</h4>
  <Codemirror :options="CODE_THEME" border v-model:value="INSTALL_CODE" />

  <h4>配置：</h4>
  <Codemirror :options="CODE_THEME" border v-model:value="CONFIG_CODE" />
</template>

<script setup lang="ts">
import { CODE_THEME } from "../../constants";
import { INSTALL_CODE, CONFIG_CODE } from "./constants";
import Codemirror from "codemirror-editor-vue3";
</script>

<style scoped></style>
