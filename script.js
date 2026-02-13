/* Start Screen Logic */
const startScreen = document.getElementById("startScreen");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const bgMusic = document.getElementById("bgMusic");

/* Make NO button run away */
noBtn.addEventListener("mouseover", () => {
    noBtn.style.top = Math.random() * 80 + "vh";
    noBtn.style.left = Math.random() * 80 + "vw";
});

/* YES button */
yesBtn.addEventListener("click", () => {
    startScreen.style.opacity = "0";
    setTimeout(() => {
        startScreen.style.display = "none";
    }, 1000);

    if(bgMusic){
        bgMusic.play();
    }
});
/* Fade on scroll */
const faders=document.querySelectorAll(".section, .gallery");

const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
},{threshold:.2});

faders.forEach(fade=>observer.observe(fade));

/* Typewriter */
const text="14 November 2025";
let i=0;
function typeWriter(){
if(i<text.length){
document.getElementById("typewriter").innerHTML+=text.charAt(i);
i++;
setTimeout(typeWriter,80);
}
}
typeWriter();

/* Lightbox */
const box=document.getElementById("box");
const boxImg=document.getElementById("boxImg");
function openBox(img){
box.style.display="flex";
boxImg.src=img.src;
}
function closeBox(){
box.style.display="none";
}

/* Easter egg */
let count=0;
function unlock(){
count++;
if(count==7){
document.getElementById("secret").style.display="block";
}
}

/* Star sky with constellation */
const canvas=document.getElementById("sky");
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let stars=[];
for(let i=0;i<600;i++){
stars.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*1.3,
alpha:Math.random()
});
}

const constellation=[
{x:300,y:200},{x:340,y:180},{x:380,y:200},
{x:420,y:240},{x:460,y:220}
];

function draw(){
ctx.clearRect(0,0,canvas.width,canvas.height);

stars.forEach(s=>{
ctx.beginPath();
ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
ctx.fillStyle="rgba(255,255,255,"+s.alpha+")";
ctx.fill();
});

ctx.strokeStyle="rgba(255,122,162,.6)";
ctx.beginPath();
constellation.forEach((p,index)=>{
if(index===0) ctx.moveTo(p.x,p.y);
else ctx.lineTo(p.x,p.y);
});
ctx.stroke();

requestAnimationFrame(draw);
}
draw();

/* Fireworks */
const fw=document.getElementById("fireworks");
const fctx=fw.getContext("2d");
fw.width=window.innerWidth;
fw.height=window.innerHeight;

let particles=[];

function launchFireworks(){
for(let i=0;i<150;i++){
particles.push({
x:fw.width/2,
y:fw.height/2,
angle:Math.random()*2*Math.PI,
speed:Math.random()*6+2,
radius:3
});
}
}

function animateFW(){
fctx.clearRect(0,0,fw.width,fw.height);
particles.forEach((p,index)=>{
p.x+=Math.cos(p.angle)*p.speed;
p.y+=Math.sin(p.angle)*p.speed;
p.speed*=0.96;
fctx.beginPath();
fctx.arc(p.x,p.y,p.radius,0,Math.PI*2);
fctx.fillStyle="hsl("+Math.random()*360+",100%,50%)";
fctx.fill();
if(p.speed<0.5) particles.splice(index,1);
});
requestAnimationFrame(animateFW);
}
animateFW();

/* Launch fireworks when final section appears */
const finalSection=document.querySelector(".finalSection");
const finalObserver=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
launchFireworks();
}
});
});
finalObserver.observe(finalSection);

/* Floating hearts */
setInterval(()=>{
let heart=document.createElement("div");
heart.className="heart";
heart.innerHTML="❤";
heart.style.left=Math.random()*100+"vw";
heart.style.bottom="0";
heart.style.fontSize=Math.random()*20+10+"px";
document.body.appendChild(heart);
setTimeout(()=>heart.remove(),6000);
},600);

