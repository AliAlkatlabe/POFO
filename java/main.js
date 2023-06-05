const btn = document.querySelector('.btn-dark');


btn.addEventListener('click', function(){
const elements = document.querySelectorAll('html, body, h1, h2, roc');
for ( let i = 0; i < elements.length; i++){
 const element = elements[i];
 element.classList.toggle('dark-mode');
}

})










