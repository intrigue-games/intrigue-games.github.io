import Vue from "vue";
import App from "./App.vue";
import Buefy from "buefy";
import "./scss/main.scss";

Vue.use(Buefy);

Vue.config.productionTip = true;

new Vue({ render: (h) => h(App) }).$mount("#app");
