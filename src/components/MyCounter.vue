<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"
import { Observer } from "mobx-vue"
import { appStore } from "stores"

@Observer
@Component
export default class MyCounter extends Vue {

    private userStore = appStore.user

    private mounted() {

    }
}
</script>


<template>
    <div v-text="userStore.counter"></div>
</template>
