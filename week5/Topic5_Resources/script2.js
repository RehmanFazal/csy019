function circleClick() {
    this.style.backgroundColor = 'blue';
}

function myFun() {
    var id = document.getElementById("circle");
    id.addEventListener('click', circleClick);
}

document.addEventListener('DOMContentLoaded', myFun);