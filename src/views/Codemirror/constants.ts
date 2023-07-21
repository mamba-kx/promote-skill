export const INSTALL_CODE = `
npm install codemirror-editor-vue3 codemirror@5.x -S
`;

export const CONFIG_CODE = `
import { InstallCodemirro } from "codemirror-editor-vue3";

const app = createApp(App);
app.use(InstallCodemirro, { componentName: "Codemirror", options: CODE_THEME });
`;

export const OPTION_CONFIG_URL = `https://codemirror.net/5/doc/manual.html#config`;
