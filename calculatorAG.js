var resWindow = document.querySelector('.resWindow');
var resString = "";
var resNum = 0;
var curNum = 0;
var stringWindow = document.querySelector('.stringWindow');

function clear(){
    resString.clear();
    resNum.clear();
}

function clearEntry(){
    curNum = 0;
}

function getNum(){
    resWindow.innerHtml = curNum;
    resString = resString + curNum;

}

function getOp(){

}

function addRes(){
    resNum = curNum + resNum;
}

function subRes(){
    resNum = resNum - curNum;
}

function mulRes(){
    resNum = resNum * curNum;
}

function divRes(){
    resNum = resNum / curNum;
}

document.querySelectorAll('.numButtons').addEventListener('click',function(){
    curNum = this.data-value;
    stringWindow.append(curNum);
    document.querySelector(".addButton").addEventListener('click', function(curNum){
        addRes();
        resWindow.innerHtml = resNum;
    })
    document.querySelector('.subButton').addEventListener('click', function(){
        subRes();
        resWindow.innerHtml = resNum;
    })
    document.querySelector('.mulButton').addEventListener('click', function(){
        mulRes();
        resWindow.innerHtml = resNum;
    })
    document.querySelector('.divButton').addEventListener('click', function(){
        divRes();
        resWindow.innerHtml = resNum;
    })
})
