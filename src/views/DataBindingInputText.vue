<template>
  <input type="text" v-model="valueModel"/>
</template>

<script>
export default {
  name: 'DataBinding',
  data () {
    return {
      title: 'World',
      htmlString: '<p style="color:red;">This is a red string.</p>',
      valueModel: 'South Korea'
    }
  }
}
</script>

<style scoped>

</style>
