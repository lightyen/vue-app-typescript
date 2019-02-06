<style lang="scss" module>
@import "./NotFoundPage.scss";
</style>

<script lang="ts">
import Vue from "vue"
import VueComponent from "vue-class-component"

@VueComponent
export default class NotFoundPage extends Vue {
    private backHome = () => {
        window.location.replace("/")
    }

    public mounted() {
        document.title = "404 Not Found"
    }
}
</script>

<template>
    <div>
        <a href="/">
            <el-button>找不到你要的資源呢!</el-button>
        </a>
    </div>
</template>
