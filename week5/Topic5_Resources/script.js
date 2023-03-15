function circleClick() {
    alert('The button was pressed');
}

function myFun() {
    var id = document.getElementById("circle");
    id.addEventListener('click', circleClick);

    //id.style.width = '50px';
    //id.style.height = '50px';
    id.style.color = 'blue';
    id.style.borderRadius = '50px';
    id.style.fontFamily = 'Verdana, Helvetica, Sans-serif';
}

document.addEventListener('DOMContentLoaded', myFun);