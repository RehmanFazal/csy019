function alertInputFieldValue() {
    var element = document.getElementById('myInputField');
    alert(element.value);
}

function showContentInDiv() {
    var element = document.getElementById('myInputField');
    var div = document.getElementById('myDiv');
    div.firstChild.nodeValue = element.value;
}

function updateDivContent() {
    var element = document.getElementById('myInputField2');
    var div = document.getElementById('myDiv2');
    div.firstChild.nodeValue = element.value;
}

function loadMyFunction() {
    var element = document.getElementById('myButton');
    element.addEventListener('click', alertInputFieldValue)

    element.addEventListener('click', showContentInDiv)

    var element = document.getElementById('myInputField2');
    element.addEventListener('keyup', updateDivContent)
}
document.addEventListener('DOMContentLoaded', loadMyFunction);
