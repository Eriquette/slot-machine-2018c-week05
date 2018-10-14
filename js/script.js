document.querySelector('#spin').addEventListener("click", spin)
document.querySelector('#stop').addEventListener("click", stop)
// one, two, three are the slots
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');

const ducks = ["images/dracula.jpg", "images/frida.jpg", "images/retrospace.jpg", "images/spider.jpg", "images/unicorn.jpg"];

let total = 100;
let min = 0;
let max = 0;
// condition that will iterate through 5 random images
function spin(){
  if(total== 0){
    console.log("you lose!")
  }else{
    // start loop
    var reel = setInterval(function(){
      one.src = ducks[Math.floor(Math.random() * 5)]
      two.src = ducks[Math.floor(Math.random() * 5)]
      three.src = ducks[Math.floor(Math.random() * 5)]
    }, 150)
  }
}
