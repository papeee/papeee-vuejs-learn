<template>
  <div id="app">
    <app-message>{{ message }}</app-message>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      message: "Welcome to Wildlife in Vue App"
    }
  }
}
</script>
