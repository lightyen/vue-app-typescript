<script lang="ts">
import  { Component, Vue, Prop, Watch } from "vue-property-decorator"

@Component
export default class HelloPage extends Vue {

    public mounted() { }
}
</script>

<template>
    <router-link tag="button" to="/" append>Go Back</router-link>
</template>
