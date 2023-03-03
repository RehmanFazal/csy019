function updatePageContent() {
    var heading = document.getElementById('pageHeading');
    heading.firstChild.nodeValue = 'New Heading';

    var content = document.getElementById('pageContent');
    content.firstChild.nodeValue = 'Page Content';
}
document.addEventListener('click', updatePageContent);
