import Vue from "vue";
import App from "./App.vue";
import Buefy from "buefy";

Vue.use(Buefy);

Vue.config.productionTip = true;

new Vue({ render: (h) => h(App) }).$mount("#app");
