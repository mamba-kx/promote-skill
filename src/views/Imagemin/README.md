# vite-plugin-imagemin

## 一个压缩图片资源的 vite 插件

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
