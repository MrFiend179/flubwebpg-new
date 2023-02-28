
mcnav.addEventListener('mouseover', function handleMouseOver(){
    console.log('ok')
    document.getElementById('clrfmc').style.height = '90%'
})
mcnav.addEventListener('mouseout', function handleMouseOut(){
    console.log('ok1')
    document.getElementById('clrfmc').style.height = '0%'
})

var header = document.getElementById('txmtt');
function fadeOutOnScroll(element) {
  if (!element) {
    return;
  }
  
  var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
  var scrollTop = document.documentElement.scrollTop;
  
  var opacity = 1;
  
  if (scrollTop > distanceToTop) {
    opacity = 1 - (scrollTop - distanceToTop) / 150;
  }
  
  if (opacity >= 0) {
    element.style.opacity = opacity;
  }
}
function scrollHandler() {
  fadeOutOnScroll(header);
}
window.addEventListener('scroll', scrollHandler);

var element = document.getElementById('mappsv');

mdwnbtn.addEventListener('click',()=>{
element.scrollIntoView({behavior: "smooth"});
})

let mybutton = document.getElementById("mstupbtn");
mybutton.addEventListener('click',()=>{
  topFunction()
})
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

appdwnmb.addEventListener('click',()=>{
  if(document.getElementById('nvbroptons').style.display === 'flex'){
    document.getElementById('mnvbroptmb').style.width = '0%'
    setTimeout(()=>{
      document.getElementById('nvbroptons').style.display = 'none'
    },350)
    $('*').removeClass('no-scroll');   
  }
  if(document.getElementById('nvbroptons').style.display != 'flex'){
    document.getElementById('nvbroptons').style.display = 'flex'
    setTimeout(()=>{
      document.getElementById('mnvbroptmb').style.width = '90%'
    },50)
    $('*').addClass('no-scroll');
  }
})

ourdcs.addEventListener('click',()=>{ 
  document.getElementById('footer').scrollIntoView();
  document.getElementById('navbar').style.position = 'fixed'
  document.getElementById('nvbroptons').style.marginTop = '7.9vh'
  appdwnmb.addEventListener('click',()=>{
    document.getElementById('nvbroptons').style.marginTop = '-1px'
  document.getElementById('navbar').style.position = 'relative'
  })
})


const cntcu = document.getElementById('tpsocial')
contctus.addEventListener('click',()=>{
  cntcu.scrollIntoView({behavior: "smooth"})
})