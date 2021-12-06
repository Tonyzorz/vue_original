<template>
  <h1>{{ htmlString }}</h1>
  <h1 v-html="htmlString"></h1>
</template>

<script>
export default {
  name: 'DataBinding',
  data () {
    return {
      title: 'World',
      htmlString: '<p style="color:red;">This is a red string.</p>'
    }
  }
}
</script>

<style scoped>

</style>
