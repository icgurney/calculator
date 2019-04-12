document.querySelectorAll('.numButtons').forEach(function(val){
    val.addEventListener('click',function(){
        curNum = this.value;
        insert(curNum);
        console.log('clicked!')
    })
})
document.querySelector('.equalButton').addEventListener('click', function(){
    equal();
})
document.querySelector('.clearButton').addEventListener('click', function(){
    clear();
})
document.querySelector('.clearEntry').addEventListener('click', function(){
  clearEntry();
})
function insert(val){
    document.querySelector('.resWindow').value = document.querySelector('.resWindow').value+val;
}
function equal(){
    document.querySelector('.resWindow').value = eval(document.querySelector('.resWindow').value)
}
function clear(){
    document.querySelector('.resWindow').value = "";
}
function clearEntry(){
  var str = document.querySelector('.resWindow').value;
  var res = str.substring(0,str.length-1);
  document.querySelector('.resWindow').value = res;
}
