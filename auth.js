// Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

function register(username, password) {
  if (state.logged) return;
  postData('https://turtle84375-auth.lankybox02.repl.co/signup', { username: username, password: password })
    .then(data => {
      if (data.success == true) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        window.location.reload();
      }else{
        localStorage.clear();
      }
    });
}

function login(username, password) {
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  window.location.reload();
}
