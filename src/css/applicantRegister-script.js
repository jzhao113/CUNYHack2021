function outlineToggle(id) {
    var tag = document.getElementById(id);
    if (tag.classList.contains('border-gray-300')) {
        tag.classList.remove('border-gray-300');
        tag.classList.add('border-blue-400');
    } else {
        tag.classList.remove('border-blue-400');
        tag.classList.add('border-gray-300');
    }
    return false;
}