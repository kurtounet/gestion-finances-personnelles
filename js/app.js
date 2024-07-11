import { CreateTransaction } from "./function.js";

import { Count } from "./Models/Count.js";
import { DATA_FILTER_DATE } from "../data/filterDate.js";
import { DATA_COUNT } from "../data/counts.js";
import { DATA_CATEGORIES } from "../data/categories.js";
import { DATA_TRANSACTIONS } from "../data/transactions.js";

document.addEventListener("DOMContentLoaded", (event) => {
  const SIDE_BARE = document.querySelector("#sidebar");
  const MAIN = document.querySelector("#main");
  const TRANSACTIONS_LISTE = document.querySelector("#wrapper");
  const itemTransactionDate = document.querySelector("#itemTransactionDate");
  let selectedCount = 0;
  let selectFilterDate = document.querySelector("#filterDate");
  let SELECT_FILTER_CATEGORY = document.querySelector("#filterCategory"); //selectFilterCategory = document.querySelector("#filterCategory");
  let selectFilterSubCategory = document.querySelector("#filterSubCategory");

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

  /************************FONCTIONS****************************/
  // Filtre les transactions par date
  function filterByDate(date) {}
  function filterByCategory(categoryName) {
    let transactionCountSelected = ArrayCount[selectedCount].transactions;

    let transactionsfiltred = transactionCountSelected.filter(
      (transactionCountSelected) =>
        transactionCountSelected.category === categoryName
    );
    console.log(transactionsfiltred);
    return transactionsfiltred;
  }
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
    let arrayTransactions = document.createElement("div");
    transactions.forEach(function (item) {
      console.log(item);
      arrayTransactions.appendChild(CreateTransaction(item));

      //console.log(Object.values(transaction));
      // arrayTransaction.push(Object.values(transaction));
    });

    TRANSACTIONS_LISTE.removeChild(TRANSACTIONS_LISTE.firstChild);
    TRANSACTIONS_LISTE.appendChild(arrayTransactions);
    /*
    new gridjs.Grid({
      columns: ["id", "date", "catégorie", "sous category", "Débit", "Crédit"],
      data: arrayTransaction,
    }).render(document.getElementById("wrapper"));
    */
  }

  //INITIALISATION
  function init() {
    selectFilterDate = loadSelectFilter(selectFilterDate, DATA_FILTER_DATE);
    SELECT_FILTER_CATEGORY = loadSelectFilter(
      SELECT_FILTER_CATEGORY,
      DATA_CATEGORIES
    );
    /*
    ArrayCount[0].transactions.forEach(function (item) {
      createTransaction(item);
    })
      */
    showTransactions(ArrayCount[selectedCount].transactions);
  }

  /************************MAIN****************************/
  init();
  /********************EVENT LISTENER **********************/
  SELECT_FILTER_CATEGORY.addEventListener("change", function () {
    let selectedIndex = SELECT_FILTER_CATEGORY.value;

    selectFilterSubCategory = loadSelectFilter(
      selectFilterSubCategory,
      DATA_CATEGORIES[selectedIndex]["subcategories"]
    );
    let transactionsfiltred = filterByCategory(
      DATA_CATEGORIES[selectedIndex]["libelle"]
    );
    showTransactions(transactionsfiltred);
    //console.log(selectedIndex); // selectedValue;
  });
  selectFilterSubCategory.addEventListener("change", function () {
    let selectedValue = selectFilterSubCategory.value;
    console.log(selectedValue);
  });
  selectFilterDate.addEventListener("change", function () {
    let selectedValue = DATA_FILTER_DATE.value;
    console.log(selectedValue);
  });
});
