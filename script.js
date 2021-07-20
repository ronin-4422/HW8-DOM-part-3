function numb(a,b) {
  console.log(a);
  a++;
  if (a > b){
      return;
  }
  numb(a,b);
}
numb(2,5);


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

