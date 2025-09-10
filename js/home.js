const modal = document.getElementById("productModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalPrice = document.getElementById("modalPrice");
const modalImg = document.getElementById("modalImg"); // thêm dòng này

function openModal(title, desc, price, img) {
  modalTitle.innerText = title;
  modalDesc.innerText = desc;
  modalPrice.innerText = "Giá: " + price;
  modalImg.src = img; // thêm dòng này để cập nhật ảnh
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

// Đóng khi click ra ngoài
window.onclick = function (event) {
  if (event.target === modal) {
    closeModal();
  }
};
