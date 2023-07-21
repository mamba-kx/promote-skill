import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import Antd from "ant-design-vue";
import { InstallCodemirro } from "codemirror-editor-vue3";
// placeholder
import "codemirror/addon/display/placeholder.js";

// language
import "codemirror/mode/javascript/javascript.js";
// placeholder
import "codemirror/addon/display/placeholder.js";
// theme
import "Codemirror/theme/erlang-dark.css";
import { CODE_THEME } from "./constants";

import "vue-progressive-image/dist/style.css";
import VueProgressiveImage from "vue-progressive-image";

const app = createApp(App);
app.use(router);
app.use(Antd);
app.use(VueProgressiveImage);
app.use(InstallCodemirro, { componentName: "Codemirror", options: CODE_THEME });
app.mount("#app");
