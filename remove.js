window.onload = function () {
  var body = document.getElementsByTagName('body')[0];
  if(body != 'undefined') {
    body.removeChild(body.lastElementChild);
    console.log("Removed last child");
  }
}