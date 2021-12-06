<template>
  <div>
    <input type="text" v-model="textValue"/>
    <button type="button" v-bind:disabled="textValue==''">Click</button>
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
      textValue: ''
    }
  }
}
</script>

<style scoped>

</style>
