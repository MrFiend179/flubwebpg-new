console.log('ola')

mcnav.addEventListener('mouseover', function handleMouseOver(){
  console.log('ok')
  document.getElementById('clrfmc').style.height = '90%'
})
mcnav.addEventListener('mouseout', function handleMouseOut(){
  console.log('ok1')
  document.getElementById('clrfmc').style.height = '0%'
})

const first = document.getElementById("bvls")
const container = document.getElementById("mainappbdy")
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


mapbvimgs1.addEventListener('click',()=>{
  document.getElementById('rlbvimg').style.backgroundImage = 'url(./flubelbooveimg/flbmc1bv.PNG)'
})
mapbvimgs2.addEventListener('click',()=>{
  document.getElementById('rlbvimg').style.backgroundImage = 'url(./flubelbooveimg/flbmc2bv.PNG)'
})
mapbvimgs3.addEventListener('click',()=>{
  document.getElementById('rlbvimg').style.backgroundImage = 'url(./flubelbooveimg/flbmc3bv.PNG)'
})
mapbvimgs4.addEventListener('click',()=>{
  document.getElementById('rlbvimg').style.backgroundImage = 'url(./flubelbooveimg/flbmc4bv.PNG)'
})
mapbvimgs5.addEventListener('click',()=>{
  document.getElementById('rlbvimg').style.backgroundImage = 'url(./flubelbooveimg/flbmc5bv.PNG)'
})
mapbvimgs6.addEventListener('click',()=>{
  document.getElementById('rlbvimg').style.backgroundImage = 'url(./flubelbooveimg/flbdc1bv.PNG)'
})

let mybutton = document.getElementById("mstupbtn");
mybutton.addEventListener('click',()=>{
  topFunction()
})
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

mapbvimgs1mb.addEventListener('click',()=>{
  document.getElementById('actimgbfmb').style.backgroundImage = 'url(./flubelbooveimg/flbmc1bv.PNG)'
  document.getElementById('smcr1fbvmb').style.backgroundColor = '#009FFD'
  document.getElementById('smcr2fbvmb').style.backgroundColor = 'white'
  document.getElementById('smcr3fbvmb').style.backgroundColor = 'white'
  document.getElementById('smcr4fbvmb').style.backgroundColor = 'white'
  document.getElementById('smcr5fbvmb').style.backgroundColor = 'white'
  document.getElementById('smcr6fbvmb').style.backgroundColor = 'white'
})
mapbvimgs2mb.addEventListener('click',()=>{
  document.getElementById('actimgbfmb').style.backgroundImage = 'url(./flubelbooveimg/flbmc2bv.PNG)'
  document.getElementById('smcr2fbvmb').style.backgroundColor = '#009FFD'
  document.getElementById('smcr1fbvmb').style.backgroundColor = 'white'
  document.getElementById('smcr3fbvmb').style.backgroundColor = 'white'
  document.getElementById('smcr4fbvmb').style.backgroundColor = 'white'
  document.getElementById('smcr5fbvmb').style.backgroundColor = 'white'
  document.getElementById('smcr6fbvmb').style.backgroundColor = 'white'
})
mapbvimgs3mb.addEventListener('click',()=>{
  document.getElementById('actimgbfmb').style.backgroundImage = 'url(./flubelbooveimg/flbmc3bv.PNG)'
  document.getElementById('smcr3fbvmb').style.backgroundColor = '#009FFD'
  document.getElementById('smcr2fbvmb').style.backgroundColor = 'white'
  document.getElementById('smcr1fbvmb').style.backgroundColor = 'white'
  document.getElementById('smcr4fbvmb').style.backgroundColor = 'white'
  document.getElementById('smcr5fbvmb').style.backgroundColor = 'white'
  document.getElementById('smcr6fbvmb').style.backgroundColor = 'white'
})
mapbvimgs4mb.addEventListener('click',()=>{
  document.getElementById('actimgbfmb').style.backgroundImage = 'url(./flubelbooveimg/flbmc4bv.PNG)'
  document.getElementById('smcr4fbvmb').style.backgroundColor = '#009FFD'
  document.getElementById('smcr2fbvmb').style.backgroundColor = 'white'
  document.getElementById('smcr3fbvmb').style.backgroundColor = 'white'
  document.getElementById('smcr1fbvmb').style.backgroundColor = 'white'
  document.getElementById('smcr5fbvmb').style.backgroundColor = 'white'
  document.getElementById('smcr6fbvmb').style.backgroundColor = 'white'
})
mapbvimgs5mb.addEventListener('click',()=>{
  document.getElementById('actimgbfmb').style.backgroundImage = 'url(./flubelbooveimg/flbmc5bv.PNG)'
  document.getElementById('smcr5fbvmb').style.backgroundColor = '#009FFD'
  document.getElementById('smcr2fbvmb').style.backgroundColor = 'white'
  document.getElementById('smcr3fbvmb').style.backgroundColor = 'white'
  document.getElementById('smcr4fbvmb').style.backgroundColor = 'white'
  document.getElementById('smcr1fbvmb').style.backgroundColor = 'white'
  document.getElementById('smcr6fbvmb').style.backgroundColor = 'white'
})
mapbvimgs6mb.addEventListener('click',()=>{
  document.getElementById('actimgbfmb').style.backgroundImage = 'url(./flubelbooveimg/flbdc1bv.PNG)'
  document.getElementById('smcr6fbvmb').style.backgroundColor = '#009FFD'
  document.getElementById('smcr2fbvmb').style.backgroundColor = 'white'
  document.getElementById('smcr3fbvmb').style.backgroundColor = 'white'
  document.getElementById('smcr4fbvmb').style.backgroundColor = 'white'
  document.getElementById('smcr5fbvmb').style.backgroundColor = 'white'
  document.getElementById('smcr1fbvmb').style.backgroundColor = 'white'
})

const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show1');
    }else{
      entry.target.classList.remove('show1');
    }
  })
})
const hiddenelements = document.querySelectorAll('.hidden1')
hiddenelements.forEach((el)=> observer.observe(el));



appdwnmbbv.addEventListener('click',()=>{
  if(document.getElementById('nvbroptonsbv').style.display === 'flex'){
    document.getElementById('mnvbroptmb').style.width = '0%'
    setTimeout(()=>{
      document.getElementById('nvbroptonsbv').style.display = 'none'
    },350)
    $('*').removeClass('no-scroll');   
  }
  if(document.getElementById('nvbroptonsbv').style.display != 'flex'){
    document.getElementById('nvbroptonsbv').style.display = 'flex'
    setTimeout(()=>{
      document.getElementById('mnvbroptmb').style.width = '90%'
    },50)
    $('*').addClass('no-scroll');
  }
})

const cntcu = document.getElementById('tpsocial')
contctus1.addEventListener('click',()=>{
  cntcu.scrollIntoView({behavior: "smooth"})
})