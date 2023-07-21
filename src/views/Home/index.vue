<template>
  <h2>一个用于学习新知识的项目</h2>
  <ul>
    <li v-for="item in FEATURE_LIST" :key="item.id">
      <a-button type="primary" @click="router.push(item.path)">{{
        item.name
      }}</a-button>
    </li>
  </ul>

  <ProgressiveImage
    placeholder-src="https://picsum.photos/id/1080/19/10"
    src="https://picsum.photos/id/1080/1980/1080"
    importance="high"
  />
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { FEATURE_LIST } from "../../constants/index";
const router = useRouter();
</script>

<style lang="scss" scoped>
ul {
  li {
    margin: 20px 0;
  }
}
</style>
