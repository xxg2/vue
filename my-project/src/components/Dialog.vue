<template>
    <div class="dialog-wrapper"
         :class="{'open':is_show}">
        <div class="overlay" @click="close"></div>
        <div class="dialog">
            <div class="heading">
                <slot name="heading"></slot>
            </div>
            <slot></slot>
        </div>
    </div>
</template>
<style type="less">
    @import "./dialog.less"
</style>
<script>
    export default {
        data () {
            return {
                is_show: false
            }
        },
        methods: {
            open() {
                this.is_show = true
                this.$emit('dialogopen')
            },
            close() {
                this.is_show = false
                this.$emit('dialogclose')
            }
        }
    }
</script>