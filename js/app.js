var app = new Vue({
    el: '#app',
    data: {
        title: 'Vue Demo',
      message: 'Hello Vue!'
    }
  })

  onReady(() => console.log('[app.js] Ready!!'));