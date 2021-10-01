var btn=document.querySelector("#btn")
var change=document.querySelector(".change")
btn.onclick=function(){
   change.classList.toggle('change_color');
}
// var change=document.querySelector("#change")
// btn.addEventListener('click', () => {
//     if(change.style.backgroundColor == '#ffff') {
//         console.log('background')
//         change.style.backgroundColor= '#000000';
//         } 
//     else{
//         console.log('mauvais')
//     }     
// });
