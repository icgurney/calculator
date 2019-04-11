document.querySelectorAll('.buttons').addEventListener('click',function(){
    var num = document.querySelector('.resWindow').getAttribute('data-value');
    resWindow.innerHTML = num;
})