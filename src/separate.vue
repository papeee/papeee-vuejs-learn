<template>
  <div id="app">
    <app-message><h2>{{ message }}</h2></app-message>
    
    <app-input>
    <input type="text" v-model=" msg ">
    </app-input>
    <p></p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      message: "Welcome to Wildlife in Vue App"
      
    }
  },
  components:{
    'app-input': Input,
    msg : ""
  }
}
</script>
