var resWindow = document.querySelector('.resWindow');
var resString = "";
var resNum = 0;
document.querySelectorAll('.numButtons').addEventListener('click',function(){
    var num = document.querySelectorAll('.numButtons').getAttribute('data-value');
    resWindow.innerHTML = num;
})

function clear(){
    resString.clear();
    resNum.clear();
}
