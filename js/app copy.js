// import { Transaction } from "./Models/Transaction.js";
// import { Categorie } from "./Models/Category.js";
// import { Count } from "./Models/Count.js";
import { DATA_FILTER_DATE } from "../data/filterDate.js";
import { DATA_CATEGORIES } from "../data/categories.js";
import { DATA_TRANSACTIONS } from "../data/transactions.js";

document.addEventListener("DOMContentLoaded", (event) => {
  const transactions = new Transaction();
  const categories = new Categorie();
  const count = new Count();

  const sidebar = document.querySelector("#sidebar");
  const main = document.querySelector("#main");
  const filtredTransactions = document.querySelector("#filtre");
  let selecteFilerDate = document.querySelector("#filterDate");
  let selecteFilerCategory = document.querySelector("#filterCategory");
  let selecteFilerSubCategory = document.querySelector("#filterSubCategory");
  const TRANSACTIONS_LISTE = document.querySelector("#wrapper");
  const itemTransactionDate = document.querySelector("#itemTransactionDate");

  function loadSelectFilter(select, options) {
    options.forEach(function (option) {
      let opt = document.createElement("option");
      opt.value = option.id;
      opt.textContent = option.libelle;
      select.appendChild(opt);
    });
    return select;
  }

  function init() {
    selecteFilerDate = loadSelectFilter(selecteFilerDate, DATA_FILTER_DATE);
    selecteFilerCategory = loadSelectFilter(
      selecteFilerCategory,
      DATA_CATEGORIES
    );
  }

  // MAIN
  init();
  // FILTER
  selecteFilerCategory.addEventListener("change", function () {
    let selectedIndex = selecteFilerCategory.value;
    selecteFilerSubCategory = loadSelectFilter(
      selecteFilerSubCategory,
      DATA_CATEGORIES[selectedIndex]["subcategories"]
    );
    console.log(selectedIndex); // selectedValue;
  });
  FILTER_SUB_CATEGORY.addEventListener("change", function () {
    let selectedValue = FILTER_SUB_CATEGORY.value;
    console.log(selectedValue); // selectedValue;
  });

  DATA_TRANSACTIONS.forEach((element) => {
    console.log(element); // createTransaction(element);
  });
});
// TRANSACTIONS.forEach((element) => {
//   console.log(element);
//   // createTransaction(element);
// });
/*
new gridjs.Grid({
  columns: ["Name", "Email", "Phone Number"],
  data: [
    ["John", "john@example.com", "(353) 01 222 3333"],
    ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
    ["Eoin", "eoin@gmail.com", "0097 22 654 00033"],
    ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
    ["Afshin", "afshin@mail.com", "(353) 22 87 8356"],
  ],
}).render(document.getElementById("wrapper"));

function createTransaction(element) {
  const itemTransaction = document.createElement("section");
  itemTransaction.classList.add("itemTransaction");
  itemTransaction.innerHTML = `
  <p id="itemTransactionDate">${element.date}</p>
  <p id="itemTransactionCategory">${element.category}</p>
  <p id="itemTransactionDebit">${element.debit}</p>
  <p id="itemTransactionCredit">${element.credit}</p>
  <div class="btn-edit-delete">
    <img
      id="edite"
      class="imageEditTransaction"
      src="assets/images/edit.png"
      alt="Modifier"
    />
    <img
      id="delete"
      class="imageDeleteTransaction"
      src="assets/images/trash.png"
      alt="supprimer"
    />
  </div>
  <p id="itemTransactionCredit"></p>
  `;
  TRANSACTIONS_LISTE.appendChild(itemTransaction);
}
*/
