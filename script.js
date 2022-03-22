'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const modalShow = () => {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  const btnClick = btnsOpenModal[i];
  btnClick.addEventListener('click', modalShow);
}

overlay.addEventListener('click', modalShow);
btnCloseModal.addEventListener('click', modalShow);
