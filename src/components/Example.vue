<style lang="scss" module>
@import "Example.scss";
</style>

<script lang="ts">
import  { Component, Vue, Prop, Watch } from "vue-property-decorator"

@Component
export default class Example extends Vue {
    @Prop(String)
    public content: string

    @Prop({ type: Function })
    public onClick: () => void

    public mounted() {
    }
}
</script>

<template>
    <button :class="$style.example" :style="{ display: 'block' }" @click="onClick">
        <span>{{content}}</span>
    </button>
</template>
