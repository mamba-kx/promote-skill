<template>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<style lang="scss">
* {
  list-style: none !important;
}

code {
  pre {
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    padding: 30px 0;
    background-color: #f6f8fa;
    line-height: auto;
  }
}

body {
  min-width: 700px;
}

.codemirror-container {
  font-size: 16px !important;
}
</style>
