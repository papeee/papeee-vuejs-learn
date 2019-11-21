const Render = (message) => {
    //alert(message);
    new Vue({
      el: '#app',
      data: {
      message: 'Type some animal or animals. Do animal living typical alone or together with others?',
          classObject: ''
        },
        render: h =>h(App) 
      })
}

export default Render;
