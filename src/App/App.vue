<script lang="ts">
import Vue from "vue"
import VueComponent from "vue-class-component"

@VueComponent
export default class App extends Vue {
    public mounted() {
        document.title = "vue-app-typescript"
    }
}
</script>

<template>
    <router-view/>
</template>
