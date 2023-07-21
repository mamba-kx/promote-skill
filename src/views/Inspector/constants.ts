export const INSTALL_CODE = `
npm install vite-plugin-vue-inspector -D
`;

export const CONFIG_CODE = `
import Inspector from "vite-plugin-vue-inspector"

plugins: [
    Inspector({
        toggleComboKey: "control-shift", // 快捷键开启/关闭插件
        enabled: false, // 默认关闭
        toggleButtonVisibility: "active"
    })
],
`;
