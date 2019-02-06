<style lang="scss" module>
@import "./MainPage.scss";
</style>

<script lang="ts">
import Vue from "vue"
import VueComponent from "vue-class-component"
import { Observer } from "mobx-vue"
import { appStore } from "stores"

import Example from "components/Example.vue"
import MyCounter from "components/MyCounter.vue"

@VueComponent<MainPage>({
    components: {
        Example,
        MyCounter,
    },
    data: () => ({
        text: "helloworld"
    })
})
export default class MainPage extends Vue {

    private userStore = appStore.user

    private text: string

    private clickme() {
        this.text = "hello"
    }

    private mounted() {}

    private onClick() {
        this.userStore.setCounter(this.userStore.counter + 1)
        this.text = "helloworld"
    }
}
</script>

<template>
    <div>
        <el-button @click="clickme">Click me!</el-button>
        <Example :content="text" v-bind:onClick="onClick" />
        <MyCounter />
        <router-view></router-view>
    </div>
</template>
