<template>
  <select v-model="city">
    <option value="02">1</option>
    <option value="21">2</option>
    <option value="064">3</option>
  </select>
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
      city: '064'
    }
  }
}
</script>

<style scoped>

</style>
