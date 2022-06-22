function carregar(){
    setTimeout(() => {
        //
     }, 4000);
}


const progressBar = document.getElementById("bar");
const loadingMsg = document.getElementById("loading");
let barWidth = 0;

const animate = () => {
  barWidth++;
  progressBar.style.width = `${barWidth}%`;
  setTimeout(() => {
    loadingMsg.innerHTML = `${barWidth}% Completed`;
    location='paginainicial.html'
  }, 10100);
};

// animation starts 2 seconds after page load
setTimeout(() => {
  let intervalID = setInterval(() => {
    if (barWidth === 100) {
      clearInterval(intervalID);
    } else {
      animate();
    }
  }, 100); //this sets the speed of the animation
}, 2000);


function fala(){
  aviso.style.display='none'
}

function chamamobile(){
  menumobile.style.display='block'
}
function fechamenumobile(){
  menumobile.style.display='none'
}

function chamaaviso(){
  aviso.style.display='block'
}