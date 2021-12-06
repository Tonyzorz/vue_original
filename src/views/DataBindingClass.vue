<template>
<!--  <div class="container" v-bind:class="{'active':isActive, 'text-red': hasError}">-->
  <div class="container" v-bind:class="[activeClass, errorClass]">
    Class Binding
  </div>
</template>

<script>
export default {
  name: 'DataBinding',
  data () {
    return {
      title: 'World',
      htmlString: '<p style="color:red;">This is a red string.</p>',
      valueModel: 'South Korea',
      numberModel: '3',
      message: '여러 줄을 입력할 수 있는 textarea 입니다.',
      textValue: '',
      activeClass: 'active',
      errorClass: 'text-red'
    }
  }
}
</script>

<style scoped>
container {
  width: 100%;
  height: 300px;
}
.active {
  background-color: yellow;
}
.text-red {
  color: red
}
</style>
