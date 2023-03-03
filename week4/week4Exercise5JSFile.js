function updatePageHeader() {
    var heading = document.getElementById('pageHeading');
    heading.firstChild.nodeValue = 'New Heading';
}

function updatePageContent() {
    var content = document.getElementById('pageContent');
    content.firstChild.nodeValue = 'Page Content';
}

function loadMyFunction() {
    var element = document.getElementById('pageHeading');
    element.addEventListener('click', updatePageHeader)

    var element = document.getElementById('pageContent');
    element.addEventListener('click', updatePageContent)
}
document.addEventListener('DOMContentLoaded', loadMyFunction);
