let state = {"loaded": false};

if (localStorage.getItem("username") == null || localStorage.getItem("password") == null) {
  state.loaded = true;
  state.logged = false;
}else{
  postData('https://turtle84375-auth.lankybox02.repl.co/login', { username: localStorage.getItem("username"), password: localStorage.getItem("password") })
  .then(data => {
    console.log(data);
    if (data.success == true) {
      if (data.banned == true) {
        document.body.innerHTML = ``; // Ban page
      }
      state.loaded = true;
      state.logged = true;
      state.session = data;
    }else{
      state.error = data.error;
      state.loaded = true;
      state.logged = false;
      localStorage.clear();
    }
  });
}