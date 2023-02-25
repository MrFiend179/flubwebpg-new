
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
app2.addEventListener('click',()=>{
  console.log('ok')
  document.getElementById('mainappimg').style.backgroundImage = 'url(./WallpaperDog-878515.jpg)'
  document.getElementById('appnpic').style.backgroundImage = 'url(./text-1671128023449.png)'
  document.getElementById('dwnldmbtn').style.display = 'none'
  document.getElementById('dwnldmbtn1').style.display = 'flex'
  document.getElementById('rlsdt').innerText = 'RELEASED OCTOBER 3RD'
  document.getElementById('mappdesc').innerText = 'An easy to use advanced app to easily check all the system specifications in one place'
})
app1.addEventListener('click',()=>{
  console.log('ok')
  document.getElementById('mainappimg').style.backgroundImage = 'url(./mlwresd.PNG)'
  document.getElementById('appnpic').style.backgroundImage = 'url(./text-1670696308341.png)'
  document.getElementById('rlsdt').innerText = 'AVAILABLE NOW'
  document.getElementById('dwnldmbtn1').style.display = 'none'
  document.getElementById('dwnldmbtn').style.display = 'flex'
  document.getElementById('mappdesc').innerText = 'An advanced panel to host and control both minecraft and discord bot easily with some amazing features'
})

const first = document.getElementById("txtmtt")
const container = document.getElementById("maintxtt")
const rect = container.getBoundingClientRect()

const animate = (element,position) => {
     element.style.transform = `translateY(-${position}px)`
} 

document.addEventListener('scroll', function(e) {
  lastKnownScrollPosition = window.scrollY;
    
   window.requestAnimationFrame(function() {
     
      animate(first,lastKnownScrollPosition*.5)
      
    });
});


const element1 = document.getElementById('maap2mb');
dot2.addEventListener('click',()=>{
element1.scrollIntoView({behavior: "smooth"});
})
const cntcu = document.getElementById('tpsocial')
contctus.addEventListener('click',()=>{
  cntcu.scrollIntoView({behavior: "smooth"})
})
const element2 = document.getElementById('mainappimgmb');
dot1.addEventListener('click',()=>{
  element2.scrollIntoView({behavior: "smooth"});
})
setTimeout(() => {
const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
   // console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }else{
      entry.target.classList.remove('show');
    }
  })
})
const hiddenelements = document.querySelectorAll('.hidden')
hiddenelements.forEach((el)=> observer.observe(el));

}, 5000);
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