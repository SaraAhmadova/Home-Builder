let menuBtn=document.querySelector('#menuBtn');
let menu=document.querySelector('#targetMenu');

// function open(){
   
//     document.querySelector('#targetMenu').style.display='block';
   
//     menuBtn.classList.add('open');
// }
// menuBtn.addEventListener('click',open);
menuBtn.addEventListener('click',hide);

function hide(){
    if(menu.classList.contains('open')){
        menu.classList.remove('open');
    }    
    else{
        menu.classList.add('open');
    }
}