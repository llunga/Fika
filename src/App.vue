<template>
  <div id="app">
    <!-- <f-button>主操作按钮 normal</f-button>
    <f-button type="primary">主操作按钮 normal</f-button>
    <f-button buttonSize="large">主操作按钮 normal</f-button>
    <f-button buttonSize="medium">搜索</f-button>
    <f-button buttonSize="small">操作</f-button>
    <f-button plain>操作</f-button>
    <f-button type="primary" plain>操作</f-button>
    <f-button type="info">操作</f-button>
    <f-button type="info" plain>操作</f-button>
    <f-button type="primary" disabled>操作</f-button>
    <f-button type="info" disabled>操作</f-button>
    <f-button disabled>操作</f-button> -->
    <f-radio v-model="radio" :label="123" @change="changeAction">操作</f-radio>
    <f-radio v-model="radio" :label="1" disabled>操作</f-radio>
    <f-radio v-model="radio2" :label="12" disabled>操作</f-radio>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      radio: '',
      radio1: '',
      radio2: '12',
    };
  },
  methods: {
    changeAction() {
      console.log('this.radio', this.radio);
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
