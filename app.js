// select modal-btn, modal-overlay, close-tbn
// listen for click events on modal-btn and close-btn
// when users click modal-btn add .OPEN-MODAL to model-overlay

let modalBtn = document.querySelector('.modal-btn')
let modalOverlay = document.querySelector('.modal-overlay')
let closeBtn = document.querySelector('.close-btn')

modalBtn.addEventListener('click', function() {
     modalOverlay.classList.add('open-modal')
})

