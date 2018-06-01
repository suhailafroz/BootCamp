
function identifyById() {
    console.log(document.getElementById('para1'));
}

function identifyByClass() {
    console.log(document.getElementsByClassName('class1'));    
}

function identifyByTag() {
    console.log(document.getElementsByTagName('p'));
}

function changeBackground() {
    var divEle = document.getElementById('block1');
    divEle.style.backgroundColor = 'cyan';
}

function increaseFont() {
    var fontSize = document.getElementById('block2');
    fontSize.style.fontSize = "large";
}

function changeFontColor() {
    var fontColorChange = document.getElementById('block3');
    fontColorChange.style.color = 'green';
}

function revertColor() {
    var fontColorChange = document.getElementById('block3');
    fontColorChange.style.color = 'black';
}

function hide() {
    var hideContent = document.getElementById('block4');
    hideContent.style.visibility = "hidden";
}

function changeBackColorForAllBox() {
    var boxes = document.getElementsByClassName('box1');
    for(i=0; i<boxes.length; i++)
        boxes[i].style.backgroundColor = "green";

}

function changeBackColor(color, cl) {
    var boxColors = document.getElementsByClassName(cl);
    for(i=0; i<boxColors.length; i++)
        boxColors[i].style.backgroundColor = color;
}

function acceptNumber() {
    var numFormat = /^\d+$/;
    var inputNo = document.getElementById('input1').value;
    var pEle = document.getElementById('warn');
    if(!numFormat.test(inputNo)){
        pEle.innerHTML = "Only Numbers Allowed";
        document.getElementById('input1').focus;
        document.getElementById('input1').select;
    }
    else{
        pEle.innerHTML = "";
    }
}

function addAdjacent() {
    document.getElementById("newPara").innerHTML = "I got generated on the fly...";
}

function removePara() {
    document.getElementById("para4").style.visibility = "hidden";
}

function myMove() {
    
}
function animatePara() {
    var myBox = document.getElementById("box5");
    myBox.style.position = "relative";
    myBox.style.animationDirection = "alternate";
    myBox.style.animationDuration = 5000;
    myBox.style.left = 0;
    myBox.style.left = parseInt(myBox.style.left) + 200 + "px";
    
}

function changeToUpper() {
    var firstValue = document.getElementById("inputBox1").value;
    document.getElementById("inputBox2").value = firstValue.toUpperCase();
}

function showBrowser() {
    var dropBox = document.getElementById("browsers");
    var name = dropBox.selectedIndex;
    
    console.log(document.getElementsByTagName("option")[name].value);

}

function changeBackColor() {
    document.getElementById("inputField").style.backgroundColor = "yellow";
}