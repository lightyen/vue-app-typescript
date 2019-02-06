import Vue from "vue"
import router from "./App/router"
import App from "./App/App.vue"
import "utils/element-ui"
export default new Vue({ router, render: h => h(App) }).$mount("#app")
