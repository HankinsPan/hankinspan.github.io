import Theme from "vitepress/theme";
import './styles/theme.scss';

import Layout from "./layouts/Layout.vue";
import CardLink from "./components/CardLink.vue";
import Flow from "./components/Flow.vue";

export default {
  extends: Theme,
  Layout,
  enhanceApp({app}) {
    app.component("CardLink", CardLink);
    app.component("Flow", Flow);
  }
}