//Одна кнопка One button

// let popup = document.getElementsByName('mypopup'),
//     popupToggle = document.getElementById('myBtn'),
//    popupClose = document.querySelectorAll('.close')[0];

// popupToggle.onclick = function () {
//     popup.style.display = "block";
// };

// popupClose.onclick = function () {
//     popup.style.display = "none";
// };

// window.onclick = function (e) {
//     if (e.target == popup) {
//         popup.style.display = "none";
//     }
// }


//Две и больше кнопок Two and more buttons

let popupsToggle = document.querySelectorAll('.open-popup'),
    popupClose = document.querySelectorAll('.close');

popupsToggle.forEach(function (item) {
    item.addEventListener('click', function () {
        let popupName = item.getAttribute('data-popup');
        document.getElementById(popupName).style.display = "block";
    })
});
popupClose.forEach(function (item) {
    item.addEventListener('click', function () {
        let popup = item.closest('.popup');
        popup.style.display = "none";
    })
});

window.onclick = function (e) {
    if (e.target.classList.contains('popup')) {
        e.target.style.display = "none";
    }
};


