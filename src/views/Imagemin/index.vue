<template>
  <code>
    <pre>
执行npm run build，对比打包前图片尺寸与打包后图片尺寸。
    </pre>
  </code>
  <div class="image">
    <img src="../../assets/cover.jpg" alt="" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.image {
  width: 100%;
  height: 800px;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
