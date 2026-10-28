(function(){
var dlg=document.getElementById('lightbox'),img=document.getElementById('lightbox-image'),cap=document.getElementById('lightbox-caption');
document.querySelectorAll('[data-image]').forEach(function(b){
b.addEventListener('click',function(){
img.src=b.dataset.image;img.alt=b.dataset.description||'';
cap.textContent=(b.dataset.title||'')+(b.dataset.description?' — '+b.dataset.description:'');
dlg.showModal();});});
document.getElementById('close-lightbox').addEventListener('click',function(){dlg.close();});
dlg.addEventListener('click',function(e){if(e.target===dlg||e.target===img)dlg.close();});
var y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();
var items=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.15});
items.forEach(function(el){io.observe(el);});
}else{items.forEach(function(el){el.classList.add('in');});}
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
document.querySelectorAll('.project-art').forEach(function(box){
var t=box.querySelector('.art-button');
box.addEventListener('pointermove',function(e){if(e.pointerType==='touch')return;var r=box.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,yy=(e.clientY-r.top)/r.height-.5;t.style.transform='rotateY('+(x*12)+'deg) rotateX('+(-yy*9)+'deg)';});
box.addEventListener('pointerleave',function(){t.style.transform='';});
});
})();
