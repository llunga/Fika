<template>
    <label class="f-radio" :class="[{'is-disabled': isDisabled, 'is-checked': model === label}]">
        <span class="f-radio__input" :class="{'is-disabled': isDisabled, 'is-checked': model === label}">
            <span class="f-radio__inner"></span>
            <input
                ref="radio"
                class="f-radio__original"
                :value="label"
                type="radio"
                v-model="model"
                @change="handleChange"
                :name="name"
                :disabled="isDisabled"
                tabindex="-1"
                @click="handleClick"
                @blur="focus = false" 
                @focus="focus = true"
                aria-hidden="true"
            >
        </span>
        <span class="f-radio__label" @keydown.stop>
            <slot></slot>
        </span>
        <!-- <span class="f-radio__label" @keydown.stop>
            <slot></slot>
            <template v-if="!$slots.default">{{label}}</template>
        </span> -->
    </label>
</template>

<script>
export default {
    name: 'f-radio',
    props: {
        value: {},
        label: {},
        disabled: Boolean,
        name: String,
        // border: Boolean,
        // size: String
    },
    data() {
        return {
            cancelChecked: false,
        }
    },
    created() {
        this.$nextTick(() => {
            this.cancelChecked = this.$refs.radio.checked
        })
        // console.log('$slots', this.$slots.default)
    },
    computed: {
        model: {
            get() {
                return this.value;
            },
            set(val) {
                // 子组件在传值的时候，选用input，如this.$emit(‘input’,val)，在父组件直接用v-model绑定，就可以获取到
                this.$emit('input', val);
                return val
            },
        },
        isDisabled() {
            return this.disabled
        },
    },
    methods: {
        handleChange() {
            this.$nextTick(() => {
                this.$emit('change', this.model);
            })
        },
        handleClick() {
            this.cancelChecked = !this.cancelChecked
            this.$refs.radio.checked = this.cancelChecked
        },
    },
}
</script>

<style lang="less" scoped>
@import './radio.less';
</style>