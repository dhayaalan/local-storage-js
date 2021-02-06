const storeBtn = document.getElementById("store-btn");
const retrieveBtn = document.getElementById("retrieve-btn");

storeBtn.addEventListener("click", () => {
  localStorage.setItem("userId", "1");
});

retrieveBtn.addEventListener("click", () => {
  const userId = localStorage.getItem("userId");
  console.log(userId);
});
