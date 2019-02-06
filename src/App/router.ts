import Vue from "vue"
import VueRouter from "vue-router"

import MainPage from "../pages/MainPage.vue"
import HelloPage from "../pages/HelloPage.vue"
import Link from "../pages/Link.vue"

Vue.use(VueRouter)

export default new VueRouter({
    mode: "hash",
    routes: [
        {
            path: "/",
            component: MainPage,
            children: [
                {
                    path: "",
                    component: Link,
                },
                {
                    path: "/hello",
                    component: HelloPage,
                },
            ],
        },
    ],
})
