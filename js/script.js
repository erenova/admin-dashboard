const bell = document.querySelector(".bell");
const cardSvg = document.querySelectorAll(".card-svg");
bell.addEventListener("click", function () {
  bell.classList.add("shake-animation");

  // Animasyon bittikten sonra sınıfı kaldırmak istiyorsan:
  setTimeout(() => {
    bell.classList.remove("shake-animation");
  }, 500); // 500 milisaniye süresi, CSS animasyonun süresiyle aynı olmalı
});
cardSvg.forEach((item) => {
  item.addEventListener("click", function () {
    item.classList.add("shake-animation");

    // Animasyon bittikten sonra sınıfı kaldırmak istiyorsan:
    setTimeout(() => {
      item.classList.remove("shake-animation");
    }, 500); // 500 milisaniye süresi, CSS animasyonun süresiyle aynı olmalı
  });
});
