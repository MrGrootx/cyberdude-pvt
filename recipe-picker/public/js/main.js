import appams from "../img/appams.jpg";
import chapati from "../img/chapati.jpg";
import chickenBiryani from "../img/chicken-biryani.jpg";
import chickenNoodles from "../img/chicken-noodles.jpg";
import dosa from "../img/dosa.jpg";
import friedrice from "../img/friedrice.jpeg";
import idiyappam from "../img/Idiyappam.jpg";
import idli from "../img/idli.jpg";
import sandwich from "../img/sandwich.jpg";

const shuffle_btn = document.getElementById("shuffle_btn");
const uppenddivEl = document.getElementById("uppenddiv");
const closeBtnEl = document.getElementById("closeBtn");
const imgsetEl = document.getElementById("imgset");

const img_array = [
  appams,
  chapati,
  chickenBiryani,
  chickenNoodles,
  dosa,
  friedrice,
  idiyappam,
  idli,
  sandwich,
];



shuffle_btn.addEventListener("click", () => {
  uppenddivEl.classList.remove("hidden");
  function getImg() {
    const filterImg = Math.floor(Math.random() * img_array.length);

    const filteredImage = img_array[filterImg];
    imgsetEl.src = filteredImage;
    console.log(filteredImage);
  }

  getImg();
});

closeBtnEl.addEventListener("click", () => {
  uppenddivEl.classList.add("hidden");
});


