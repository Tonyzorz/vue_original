<template>
  <div>
    <button type="button" @click="increaseCounter">Add 1</button>
    <p>the counter is : {{counter}}</p>
    <hr>
    <button type="button" @click="setCounter(7)">Set counter 7</button>
    <p>the counter is : {{counter}}</p>
    <hr>
    <button type="button" @click="one(), two()">one() and two()</button>
    <p>the counter is : {{counter}}</p>
  </div>
</template>

<script>
export default {
  name: 'DataBinding',
  data () {
    return {
      title: 'World',
      counter: 0
    }
  },
  methods: {
    increaseCounter () {
      this.counter++
    },
    setCounter (counter) {
      this.counter = counter
    },
    one () {
      alert(1)
    },
    two () {
      alert(2)
    }
  }
}
</script>

<style scoped>

</style>
