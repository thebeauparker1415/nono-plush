console.log('hey there!')

function showPopup () {
    var popup = document.getElementById('popup');
    popup.classlist.add('show')
}

function hidePopup () {
    var popup = document.getElementById('popup');
    popup.classlist.remove('show')
}