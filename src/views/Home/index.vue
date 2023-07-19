<template>
  <h2>一个用于学习新知识的项目</h2>
  <ul>
    <li v-for="item in FEATURE_LIST" :key="item.id">
      <a-button type="primary" @click="router.push(item.path)">{{
        item.name
      }}</a-button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { FEATURE_LIST } from "../../constants/index";
const router = useRouter();
</script>
