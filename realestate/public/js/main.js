import house from "../js/data.json";
document.addEventListener("DOMContentLoaded", loadFullFunctions);

function loadFullFunctions(e) {
  const housesdiv = document.querySelector("#housesdiv");

  function AllHouses(products) {
    housesdiv.innerHTML = "";
    products.forEach((el) => {
      housesdiv.innerHTML += `<div class="w-[350px] mx-auto mt-9">
     <div
       class="rounded-tl-[30px] bg-gray-50 p-3 hover:shadow-lg cursor-pointer"
     >
     <div class="flex justify-center">
     <img src="${el.img}" alt="House Image" />
   </div>
       <div class="text-white mt-4">
         <span class="bg-[#22c55e] rounded px-2">House</span>
       </div>
       <h2 class="text-xl font-semibold text-gray-900 mt-5">
       ${el.address}
       </h2>
       <div class="flex mt-3">
         <div class="mr-3">
           <i class="fa fa-bed" aria-hidden="true"></i>
           <span>${el.bedroom}</span>
         </div>
         <!-- icon 2-->
         <div class="mr-3">
           <i class="fa fa-bath" aria-hidden="true"></i>
           <span>${el.bathroom}</span>
         </div>
         <!-- icon 3-->
         <div class="flex items-center">
           <i class="fa fa-table" aria-hidden="true"></i>
           <div>
             <span class="ml-2">${el.squarefeet}</span>
             <span>sq ft</span>
           </div>
         </div>
       </div>
       <!-- Amount -->
       <h3 class="font-semibold text-purple-700 mt-5 text-[19px]">
       $${el.price}
       </h3>
     </div>
   </div>
   `;
    });
  }

  AllHouses(house);

  const Aboutsection = document.querySelector("#Aboutsection");
  const aboutBtn = document.querySelector("#aboutBtn");
  const homebtn = document.querySelector("#homebtn");

  aboutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    Aboutsection.classList.remove("hidden");
  });

  homebtn.addEventListener("click", (e) => {
    Aboutsection.classList.add("hidden");
    location.href = "./index.html";
  });

  const pricerange = document.querySelector("#txtSearch");
  const priceValue = document.querySelector("#priceValue");
  console.log(priceValue);
  function priceFilter() {
    const priceList = house.map((items) => items.price);
    const MinPrice = Math.min(...priceList); //  converting string to number
    const MaxPrice = Math.max(...priceList);

    pricerange.min = MinPrice;
    pricerange.max = MaxPrice;
    priceValue.textContent = MaxPrice;
    pricerange.addEventListener("input", (e) => {
      const filteredProducts = house.filter(
        (houseAmt) => +houseAmt.price <= +e.target.value
      );
      // console.log(filteredProducts);
      priceValue.textContent = e.target.value
      AllHouses(filteredProducts);
    });
  }

  priceFilter();
}
