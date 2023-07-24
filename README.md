# 一个用于学习新知识的仓库

## 1、vue-plugin-imagemin

- 一个压缩图片资源的 vite 插件

- 文档地址：[vue-plugin-imagemin](https://github.com/vbenjs/vite-plugin-imagemin/blob/main/README.zh_CN.md)

### 安装

node version: >=12.0.0

vite version: >=2.0.0

```
yarn add vite-plugin-imagemin -D
```

or

```
npm i vite-plugin-imagemin -D
```

### 注意

由于 imagemin 在中国不好安装。提供几个解决方案：

1、使用 yarn 在 package.json 内配置(推荐)
"resolutions": {
"bin-wrapper": "npm:bin-wrapper-china"
},

2、使用 npm,在电脑 host 文件加上如下配置即可

```
199.232.4.133 raw.githubusercontent.com
```

3、使用 cnpm 安装(不推荐)

### 使用

vite.config.ts 中添加配置

```
import viteImagemin from 'vite-plugin-imagemin'

export default () => {
  return {
    plugins: [
      viteImagemin({
        gifsicle: {
          optimizationLevel: 7,
          interlaced: false,
        },
        optipng: {
          optimizationLevel: 7,
        },
        mozjpeg: {
          quality: 20,
        },
        pngquant: {
          quality: [0.8, 0.9],
          speed: 4,
        },
        svgo: {
          plugins: [
            {
              name: 'removeViewBox',
            },
            {
              name: 'removeEmptyAttrs',
              active: false,
            },
          ],
        },
      }),
    ],
  }
}
```

## 2、codemirror-editor-vue3

- 一个美化代码展示的插件

- 文档地址：[vue-plugin-imagemin](https://github.com/vbenjs/vite-plugin-imagemin/blob/main/README.zh_CN.md)

### 安装

```
import Inspector from "vite-plugin-vue-inspector"
```

### 配置

vite.config.ts

```
import Inspector from "vite-plugin-vue-inspector"

plugins: [
    Inspector({
        toggleComboKey: "control-shift", // 快捷键开启/关闭插件
        enabled: false, // 默认关闭
        toggleButtonVisibility: "active"
    })
],
```

main.ts

```
import { InstallCodemirro } from "codemirror-editor-vue3";
import "codemirror/addon/display/placeholder.js";
import "codemirror/mode/javascript/javascript.js";
import "codemirror/addon/display/placeholder.js";
import "Codemirror/theme/erlang-dark.css";
import { CODE_THEME } from "./constants";

app.use(InstallCodemirro, { componentName: "Codemirror", options: CODE_THEME });
```

options 配置地址：https://codemirror.net/5/doc/manual.html#config

### 使用

```
<Codemirror :options="CODE_THEME" border v-model:value="CONFIG_CODE" />
```

## 3、vite-plugin-vue-inspector

- 一个用于从网页端元素位置打开编辑器对应位置的插件
- 文档地址：https://www.npmjs.com/package/vite-plugin-vue-inspector

### 安装

```
npm install vite-plugin-vue-inspector -D
```

### 配置

vite.config.ts

```
import Inspector from 'unplugin-vue-inspector/vite'

export default defineConfig({
  plugins: [
    Vue(),
    Inspector({
      toggleComboKey: "control-shift", // 快捷键开启/关闭插件
      enabled: false,
      toggleButtonVisibility: "active"
    })
  ],
})
```

## 4、vue-progressive-image

- 优化图像加载插件
- 文档地址：https://matteo-gabriele.gitbook.io/vue-progressive-image/

### 安装

```
npm add vue-progressive-image@beta
```

### 使用

main.ts

```
import "vue-progressive-image/dist/style.css"; //
```

.vue

```
<template>
  <ProgressiveImage src="https://picsum.photos/id/1080/1980/1080" />
</template>

<script setup>
import { ProgressiveImage } from "vue-progressive-image";
</script>
```