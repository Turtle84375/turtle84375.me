function authorize() {
  var cookieArr = document.cookie.split(";");
  for(var i=0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split("=");
    if("auth" == cookiePair[0].trim()) {
      return true;
    } else {
      return false;
    }
  }
}
