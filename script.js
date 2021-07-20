function numb(a) {
  if (a >= 9) {
    return;
  }
  console.log(a)
  numb (a +1);
}
numb(1);


window.onload = function(){
  window.setInterval(function(){
  let now = new Date();
  let clock = document.getElementById("clock");
  clock.innerHTML = now.toLocaleTimeString();
  document.querySelector('div').addEventListener('click', (event) =>{
    if (event.target.tagName === 'DIV') {
      clock.innerHTML = now.toLocaleTimeString().slice(0,-3);
    }
  });
  },2000);
};

