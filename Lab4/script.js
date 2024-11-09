let flag = true;
let flag2 = true;


const elementFirstColor = document.getElementById('elementFirstColor')
elementFirstColor.addEventListener("click", function (e){
    if (flag){
        elementFirstColor.style.backgroundColor = "yellow";
        elementSecondColor.style.color = "black";
        flag = false;
    } else {
        ColorChange(elementFirstColor, elementSecondColor);    }
})

const elementSecondColor = document.querySelector("#elementSecondColor")
elementSecondColor.addEventListener("click", function(e) {
    if (flag2) {
        elementSecondColor.style.backgroundColor = "black";
        elementSecondColor.style.color = "white";
        flag2 = false;
    } else {
        ColorChange(elementFirstColor, elementSecondColor);
    }
})

const image = document.getElementById('image')
const increaseButton = document.getElementById('increaceButton')
const decreaceButton = document.getElementById('decreaceButton')

const sizeChangeConst = 50;

increaseButton.addEventListener('click', function(e){
    const currentWidth = image.width;
    const currentHeight = image.height;
    image.width = currentWidth + sizeChangeConst;
    image.height = currentHeight + sizeChangeConst;

});


decreaseButton.addEventListener('click', function(e){
    const currentWidth = image.width;
    const currentHeight = image.height;
    image.width = currentWidth - sizeChangeConst;
    image.height = currentHeight - sizeChangeConst;

});

function ColorChange(element1, element2){
    const element1Bgcolor = element1.style.backgroundColor;
    const element1color = element1.style.color;
    const element2Bgcolor = element2.style.backgroundColor;
    const element2color = element2.style.color;
    element1.style.backgroundColor = element2Bgcolor;
    element1.style.color = element2color;
    element2.style.backgroundColor = element1Bgcolor;
    element2.style.color = element1color;
    
}

