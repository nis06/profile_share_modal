const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const openModal = () => {
    console.log("Modal is Open");
    modal.classList.add("active");
    overlay.style.opacity = "1"; 
    modal.style.transform = "scale(1)"; 
    
};

const closeModal = () => {
    console.log("Modal is Closed");
    modal.classList.remove("active");
    modal.style.transform = "scale(0)"; 
    overlay.style.opacity = "0"; 
};



