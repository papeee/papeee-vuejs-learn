<template>
  <div id="app">
    <h2>Message from Vue App</h2>
    <app-input><app-input>
  </div>
</template>

<script>
import Input from './input.vue';
export default {
  components: {
    'app-input' : Input
  }
}
</script>
