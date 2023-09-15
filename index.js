
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
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // stop observing after element is visible
      } else {
        entry.target.classList.remove('show');
      }
    });
  });
  const hiddenelements = document.querySelectorAll('.hidden12');
  hiddenelements.forEach((el) => observer.observe(el));
}, 1000);
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

const video = document.getElementById('intvid1');
const wrapper = document.getElementById('video-wrapper');

window.addEventListener('scroll', () => {
  let scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  let videoHeight = wrapper.offsetHeight;
  let screenHeight = window.innerHeight;
  
  if (scrollPos > screenHeight * 0.1) {
    let scale = 1 - ((scrollPos - (videoHeight - screenHeight)) / screenHeight * 1);
    if (scale < 0.5) {
      scale = 0.5;
    }
    video.style.transform = `scale(${scale})`;
  } else {
    video.style.transform = 'scale(1)';
  }
});


       const carouselText = [
  { text: "Flubel", color: "#009FFD" },
  { text: "Flubel", color: "#50c878" },
  { text: "Flubel", color: "#045DE9" },
  { text: "Flubel", color: "#ff5555" }
];

document.addEventListener("DOMContentLoaded", function() {
  carousel(carouselText, "#lnawaw");
});

async function typeSentence(sentence, eleRef, delay = 100) {
  const letters = sentence.split("");
  let i = 0;
  while (i < letters.length) {
    await waitForMs(delay);
    document.querySelector(eleRef).textContent += letters[i];
    i++;
  }
  return;
}

async function deleteSentence(eleRef) {
  const sentence = document.querySelector(eleRef).innerHTML;
  const letters = sentence.split("");
  let i = 0;
  while (letters.length > 0) {
    await waitForMs(100);
    letters.pop();
    document.querySelector(eleRef).innerHTML = letters.join("");
  }
}

async function carousel(carouselList, eleRef) {
  var i = 0;
  while (true) {
    updateFontColor(eleRef, carouselList[i].color)
    await typeSentence(carouselList[i].text, eleRef);
    await waitForMs(1500);
    await deleteSentence(eleRef);
    await waitForMs(500);
    i++
    if (i >= carouselList.length) {i = 0;}
  }
}

function updateFontColor(eleRef, color) {
  document.querySelector(eleRef).style.color = color;
}

function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}


// Define an array of jokes
var jokes = [
  {
    question: "Why did the physics professor break up with the biology professor?",
    answer: "There was no chemistry!"
  },
  {
    question: "Why don't scientists trust atoms?",
    answer: "Because they make up everything."
  },
  {
    question: "Why don't programmers like nature?",
    answer: "It has too many bugs."
  },
  {
    question: "Why did the tomato turn red?",
    answer: "Because it saw the salad dressing."
  },
  {
    question: "Why don't oysters share their pearls?",
    answer: "Because they're shellfish."
  },
  {
    question: "Why did the cookie go to the doctor?",
    answer: "Because it was feeling crumbly."
  },
  {
    question: "What do you get when you cross a snowman and a shark?",
    answer: "Frostbite."
  },
  {
    question: "Why did the scarecrow win an award?",
    answer: "Because he was outstanding in his field."
  },
  {
    question: "Why was the math book sad?",
    answer: "Because it had too many problems."
  },
  {
    question: "Why did the banana go to the doctor?",
    answer: "Because it wasn't peeling well."
  },
  {
    question: "What do you call a boomerang that doesn't come back?",
    answer: "A stick."
  },
  {
    question: "Why did the chicken cross the playground?",
    answer: "To get to the other slide."
  },
  {
    question: "Why did the frog call his insurance company?",
    answer: "He had a jump in his car."
  },
  {
    question: "What do you call a fake noodle?",
    answer: "An impasta."
  },
  {
    question: "Why was the computer cold?",
    answer: "Because it left its Windows open."
  },
  {
    question: "Why did the coffee file a police report?",
    answer: "It got mugged."
  },
  {
    question: "What do you get when you cross a snowman and a vampire?",
    answer: "Frostbite."
  },
  {
    question: "Why did the belt go to jail?",
    answer: "For holding up pants."
  },
  {
    question: "Why did the golfer wear two pairs of pants?",
    answer: "In case he got a hole in one."
  },
  {
    question: "Why did the bicycle fall over?",
    answer: "Because it was two-tired."
  },
  {
    question: "What do you get when you cross a sheep and a kangaroo?",
    answer: "A woolly jumper."
  },
  {
    question: "Why did the jellybean go to school?",
    answer: "To become a smartie."
  },
  {
    question: "Why was the tomato blushing?",
    answer: "Because it saw the salad dressing."
  },
  {
    question: "Why was the belt arrested?",
    answer: "For holding up pants."
  },
  {
    question: "Why don't seagulls fly by the bay?",
    answer: "Because then they'd be bay-gulls!"
  },
  {
    question: "What do you call a sleeping bull?",
    answer: "A bulldozer."
  },
  {
    question: "Why did the scarecrow win an award?",
    answer: "Because he was outstanding in his field."
  }
]

// Generate a random index to select a joke from the array
var randomIndex = Math.floor(Math.random() * jokes.length);

// Use the selected joke's question and answer to animate the typing
var i = 0;
var txt = jokes[randomIndex].question;
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("qustn").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(() => {
      typeWriter1();
    }, 2000);
  }
}

var i1 = 0;
var txt1 = jokes[randomIndex].answer;
var speed1 = 100;

function typeWriter1() {
  if (i1 < txt1.length) {
    document.getElementById("answr").innerHTML += txt1.charAt(i1);
    i1++;
    setTimeout(typeWriter1, speed1);
  }
}

// Call the function to start animating the typing
typeWriter();

// Call the first function to start the typing effect
typeWriter();

function fnctese(){
  document.getElementById('imgtrfldr').style.rotate = '720deg'
  setTimeout(() => {
    document.getElementById('imgtrfldr').style.rotate = '0deg'
  }, 5000);
  setTimeout(() => {
    document.getElementById('imgtrfldr').style.rotate = '720deg'
  }, 10000);
  setTimeout(() => {
    document.getElementById('imgtrfldr').style.rotate = '0deg'
  }, 15000);
  setTimeout(() => {
    document.getElementById('imgtrfldr').style.rotate = '720deg'
  }, 20000);
  setTimeout(() => {
    document.getElementById('imgtrfldr').style.rotate = '0deg'
  }, 25000);
  setTimeout(() => {
    document.getElementById('imgtrfldr').style.rotate = '720deg'
  }, 30000);
  return;
}
fnctese()