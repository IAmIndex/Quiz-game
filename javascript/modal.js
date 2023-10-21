const modal = document.getElementById("mainModal");
const openingBtns = document.getElementsByClassName("btn-question-gen");
const closingBtn = document.getElementById("closeModalBtn");
// const configsJson = fetch('');

const openModal = () => {
    modal.style.display = "block";
}

for (let i=0;i<openingBtns.length;i++) {
    openingBtns[i].onclick = openModal;
}

closingBtn.onclick = () => {
    modal.style.display = "none";
}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}