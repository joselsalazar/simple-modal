"use strict";
const modals = document.querySelectorAll(".modal");
const overlay = document.querySelector(".overlay");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const modalShow = (id) => {
  overlay.classList.toggle("hidden");
  if (id === "all") {
    for (let i = 0; i < modals.length; i++) {
      const eachModal = modals[i];
      if (!eachModal.classList.contains("hidden")) {
        eachModal.classList.add("hidden");
      }
    }
  } else {
    const modal = document.querySelector(id);
    modal.classList.toggle("hidden");
  }
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  const btnClick = btnsOpenModal[i];
  const value = btnClick.value;
  btnClick.addEventListener("click", () => {
    modalShow(`#${value}`);
  });
}

overlay.addEventListener("click", () => {
  modalShow("all");
});
