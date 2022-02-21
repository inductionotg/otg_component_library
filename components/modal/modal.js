
const btnListModal = document.querySelector('#btn-modal-list');



const listModal = document.querySelector('.modal-list');


const disableContainer = document.querySelector('.disable-container');
const buttonContainer = document.querySelector('.button-container');


btnListModal.addEventListener('click', () => onClickHandler(listModal));


function onClickHandler(modalType){
    buttonContainer.style.display = 'none';
    disableContainer.style.background = '#C0C0C0';
    modalType.style.display = 'flex';
    modalType.style.background = '#FFFFFF'; 
}
