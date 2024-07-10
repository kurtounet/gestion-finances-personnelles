// import { Transaction } from "./Models/Transaction.js";
import { Category } from "./Models/Category.js";
import { Count } from "./Models/Count.js";
import { DATA_FILTER_DATE } from "../data/filterDate.js";
import { DATA_COUNT } from "../data/counts.js";
import { DATA_CATEGORIES } from "../data/categories.js";
import { DATA_TRANSACTIONS } from "../data/transactions.js";

document.addEventListener("DOMContentLoaded", (event) => {
  // CREATIONDE LA COLLECTION DES COMPTES
  let ArrayCount = [];
  DATA_COUNT.forEach((itemCount) => {
    // Récuperation les transactions de chaque comptes
    let transactions = DATA_TRANSACTIONS.filter(
      (DATA_TRANSACTIONS) => DATA_TRANSACTIONS.countId === itemCount.id
    );
    // Création des comptes
    let count = new Count(itemCount.id, itemCount.libelle, transactions);
    // Ajout des comptes dans la collection
    ArrayCount.push(count);
  });

  const SIDE_BARE = document.querySelector("#sidebar");
  const MAIN = document.querySelector("#main");
  const TRANSACTIONS_LISTE = document.querySelector("#wrapper");
  const itemTransactionDate = document.querySelector("#itemTransactionDate");

  let selecteFilerDate = document.querySelector("#filterDate");
  let selecteFilerCategory = document.querySelector("#filterCategory");
  let selecteFilerSubCategory = document.querySelector("#filterSubCategory");
  /************************FONCTIONS****************************/
  //charge les filtres
  function loadSelectFilter(select, options) {
    options.forEach(function (option) {
      let opt = document.createElement("option");
      opt.value = option.id;
      opt.textContent = option.libelle;
      select.appendChild(opt);
    });
    return select;
  }
  //Affiche les transactions
  function showTransactions(transactions) {
    let arrayTransaction = [];
    transactions.forEach(function (transaction) {
      console.log(Object.values(transaction));
      arrayTransaction.push(Object.values(transaction));
    });
    console.log(arrayTransaction);
    new gridjs.Grid({
      columns: ["id", "date", "catégorie", "sous category", "Débit", "Crédit"],
      data: arrayTransaction,
    }).render(document.getElementById("wrapper"));
  }

  //INITIALISATION
  function init() {
    selecteFilerDate = loadSelectFilter(selecteFilerDate, DATA_FILTER_DATE);
    selecteFilerCategory = loadSelectFilter(
      selecteFilerCategory,
      DATA_CATEGORIES
    );
    /*
    ArrayCount[0].transactions.forEach(function (item) {
      createTransaction(item);
    })
      */
    showTransactions(ArrayCount[0].transactions);
  }

  /************************MAIN****************************/
  init();
  /********************EVENT LISTENER **********************/
  selecteFilerCategory.addEventListener("change", function () {
    let selectedIndex = selecteFilerCategory.value;
    selecteFilerSubCategory = loadSelectFilter(
      selecteFilerSubCategory,
      DATA_CATEGORIES[selectedIndex]["subcategories"]
    );
    console.log(selectedIndex); // selectedValue;
  });
  selecteFilerSubCategory.addEventListener("change", function () {
    let selectedValue = FILTER_SUB_CATEGORY.value;
    console.log(selectedValue); // selectedValue;
  });
  selecteFilerDate.addEventListener("change", function () {
    let selectedValue = FILTER_SUB_CATEGORY.value;
    console.log(selectedValue); // selectedValue;
  });
});
