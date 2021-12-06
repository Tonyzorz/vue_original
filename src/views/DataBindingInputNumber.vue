<template>
  <input type="text" v-model.number="numberModel"/>
</template>

<script>
export default {
  name: 'DataBinding',
  data () {
    return {
      title: 'World',
      htmlString: '<p style="color:red;">This is a red string.</p>',
      valueModel: 'South Korea',
      numberModel: '3'
    }
  }
}
</script>

<style scoped>

</style>
