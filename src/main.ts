import Vue from "vue";
import App from "./App.vue";
import Buefy from "buefy";
import "./scss/main.scss";
import Embed from "v-video-embed";

Vue.use(Buefy);
Vue.use(Embed);

Vue.config.productionTip = true;

new Vue({ render: h => h(App) }).$mount("#app");
