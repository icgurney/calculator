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
    switch(val){
        case "add":
            resString = resString + " + ";
            break;
        case "sub":
            resString = resString + " - ";
            break;
        case "mul":
            resString = resString + " x ";
            break;
        case "div":
            resString = resString + " ÷ "
            break;
        default:
            console.log("uh oh")
            break;
    }
}

function addRes(){
    resNum = curNum + resNum;
    getOp("add");
}

function subRes(){
    resNum = resNum - curNum;
    getOp("sub");
}

function mulRes(){
    resNum = resNum * curNum;
    getOp("mul");
}

function divRes(){
    resNum = resNum / curNum;
    getOp("div");
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
