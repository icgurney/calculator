var resWindow = document.querySelector('.resWindow');
var resString = "";
var resNum = 0;
var curNum = "";
var nextOp = "";
var opFlag = false;
var tempNum = "";
var tempFlag = true;
var stringWindow = document.querySelector('.stringWindow');

// function clear(){
//     resString.clear();
//     resNum.clear();
// }

// function clearEntry(){
//     curNum = "";
// }

//  function getNum(){
//     resWindow.innerHTML = curNum;
//      resString = resString + curNum; // this is going to cause problems with clear entry

// }

function getOp(val){
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
            resString = resString + " ÷ ";
            break;
        default:
            console.log("uh oh")
            break;
    }
}

function equalRes(){
    if(tempFlag==true){
        isTempNum();
    }
    else {
        prevCalc();
    }
    resWindow.innerHTML = resNum;
    console.log(resNum);

}

function isTempNum(){
    if(nextOp){
        switch(nextOp){
            case "add":
            resNum = parseInt(tempNum) + parseInt(resNum);
            resWindow.innerHTML = resNum;
            break;
            case "sub":
            resNum = parseInt(tempNum) - parseInt(tempNum);
            resWindow.innerHTML = resNum;
            break;
            case "mul":
            resNum = parseInt(tempNum) * parseInt(tempNum);
            resWindow.innerHTML = resNum;
            break;
            case "div":
            resNum = parseInt(tempNum) / parseInt(tempNum);
            resWindow.innerHTML = resNum;
            break;
            default: break;
        }
      curNum = "";
    }  
}

function prevCalc(){
      if(nextOp){
          switch(nextOp){
              case "add":
              resNum = parseInt(resNum) + parseInt(resNum);
              resWindow.innerHTML = resNum;
              break;
              case "sub":
              resNum = parseInt(resNum) - parseInt(tempNum);
              resWindow.innerHTML = resNum;
              break;
              case "mul":
              resNum = parseInt(resNum) * parseInt(tempNum);
              resWindow.innerHTML = resNum;
              break;
              case "div":
              resNum = parseInt(resNum) / parseInt(tempNum);
              resWindow.innerHTML = resNum;
              break;
              default: break;
          }
        curNum = "";
      }  
}

document.querySelectorAll('.numButtons').forEach(function (val){ 
    val.addEventListener('click',function(){
        console.log(resNum);
        console.log(curNum);
    curNum = curNum + this.value;
    console.log(curNum)
    resWindow.innerHTML = curNum;
    if(opFlag == false){
        opFlag = !opFlag;
    }
    })
})

document.querySelector(".addButton").addEventListener('click', function(){
    if(opFlag){
        nextOp = "add";
        opFlag = !opFlag;
        tempNum = curNum;
        curNum = "";
    }
})
document.querySelector('.subButton').addEventListener('click', function(){  
    if(opFlag){
        nextOp = "sub";
        opFlag = !opFlag;
        tempNum = curNum;
        curNum = "";
    }
})
document.querySelector('.mulButton').addEventListener('click', function(){
    if(opFlag){
        nextOp = "mul";
        opFlag = !opFlag;
        tempNum = curNum;
        curNum = "";
    }
})
document.querySelector('.divButton').addEventListener('click', function(){
    if(opFlag){
        nextOp = "div";
        opFlag = !opFlag;
        tempNum = curNum;
        curNum = "";
    }
})
document.querySelector('.equalButton').addEventListener('click', function(){
    equalRes();
})

// function addRes(){
//     // resNum = parseInt(curNum) + parseInt(resNum);
//     getOp("add");
//     stringWindow.innerHTML = resString;
//     nextOp = "add";
// }

// function subRes(){
//     // resNum = parseInt(resNum) - parseInt(curNum);
//     getOp("sub");
//     stringWindow.innerHTML = resString;
//     nextOp = "sub";
// }

// function mulRes(){
//     // resNum = parseInt(resNum) * parseInt(curNum);
//     getOp("mul");
//     stringWindow.innerHTML = resString;
//     nextOp = "mul";
// }

// function divRes(){
//     // resNum = parseInt(resNum) / parseInt(curNum);
//     getOp("div");
//     stringWindow.innerHTML = resString;
//     nextOp = "div";
// }