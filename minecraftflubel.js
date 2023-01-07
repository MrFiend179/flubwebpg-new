
appsnav.addEventListener('mouseover', function handleMouseOver(){
    console.log('ok')
    document.getElementById('clrf').style.height = '90%'
})
appsnav.addEventListener('mouseout', function handleMouseOut(){
    console.log('ok1')
    document.getElementById('clrf').style.height = '0%'
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