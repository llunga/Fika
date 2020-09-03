<template>
    <div class="f-button" :class="[ type ? `f-button--${type}` : '', buttonSize ? 'f-button--' + buttonSize : '', { 'is-plain' : plain,  'is-disabled': disabled,},]">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'f-button',
    props: {
        type: {
            default: 'default',
            type: String,
        },
        buttonSize: {
            default: 'large',
            type: String,
        },
        plain: Boolean,
        disabled: Boolean,
    },
    computed: {
        // buttonSize() {
        //     return this.size
        // },
    },
}
</script>

<style lang="less" scoped>
@import './button.less';
</style>