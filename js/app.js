import { CreateTransaction } from "./function.js";
import { showChart } from "./graph.js";
import { Count } from "./Models/Count.js";
import { DATA_FILTER_DATE } from "../data/filterDate.js";
import { DATA_COUNT } from "../data/counts.js";
import { DATA_CATEGORIES } from "../data/categories.js";
import { DATA_TRANSACTIONS } from "../data/transactions.js";

document.addEventListener("DOMContentLoaded", (event) => {
  const SIDE_BARE = document.querySelector("#sidebar");
  const MAIN = document.querySelector("#main");
  const CHART = document.querySelector("#mychart");
  const TRANSACTIONS_LISTE = document.querySelector("#wrapper");
  const AMOUN_TOTAL = document.querySelector("#amountTotal");
  const AMOUN_IN_TOTAL = document.querySelector("#amountInTotal");
  const AMOUN_OUT_TOTAL = document.querySelector("#amountOutTotal");
  const itemTransactionDate = document.querySelector("#itemTransactionDate");
  let selectedCount = 0;
  let selectFilterDate = document.querySelector("#filterDate");
  let SELECT_FILTER_CATEGORY = document.querySelector("#filterCategory"); //selectFilterCategory = document.querySelector("#filterCategory");
  let selectFilterSubCategory = document.querySelector("#filterSubCategory");
  let globaleTotalDebit = 0;
  let globaleTotalCredit = 0;
  let globalTotal = 0;
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
    //console.log(transactionsfiltred);
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
  // prepare
  function prepareChart(transactions) {
    let ArrayLabelCategory = [];
    let ArraydataCategory = [];
    let transactionsfiltred = [];
    transactions.forEach(function (item) {
      ArrayLabelCategory.push(item.category);
      //data pour le graphe
      // 1.Filtrer les transactions par category
      transactionsfiltred = filterByCategory(item.category.categoryName);
      // 2.Faire la somme des montants
      // 3.afficher le graphe
      // transactionsfiltred = filterByCategory(item.category.categoryName);
      // ArraydataCategory.push(item.amount);
    });
    CHART.remove();
    let chart = document.createElement("canvas");
    chart.setAttribute("id", "mychart");
    document.getElementById("graphParent").appendChild(chart);
    showChart(ArrayLabelCategory, ArraydataCategory);
  }
  //AFFICHE LES TRANSACTION
  function showTransactions(transactions) {
    sumTotalTransactions(transactions);
    prepareChart(transactions);

    TRANSACTIONS_LISTE.removeChild(TRANSACTIONS_LISTE.firstChild);
    let arrayTransactionsHtml = document.createElement("div");
    transactions.forEach(function (item) {
      //console.log(item);

      arrayTransactionsHtml.appendChild(CreateTransaction(item));
    });

    TRANSACTIONS_LISTE.appendChild(arrayTransactionsHtml);
    AMOUN_TOTAL.innerHTML = globalTotal;
    AMOUN_IN_TOTAL.innerHTML = globaleTotalCredit;
    AMOUN_OUT_TOTAL.innerHTML = globaleTotalDebit;
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
  function filterTransactionsByCategory() {
    let selectedIndex = SELECT_FILTER_CATEGORY.value;
    /* A FAIRE
    selectFilterSubCategory = loadSelectFilter(
      selectFilterSubCategory,
      DATA_CATEGORIES[selectedIndex]["subcategories"]
    );*/
    let transactionsfiltred;
    if (selectedIndex === "0") {
      transactionsfiltred = ArrayCount[selectedCount].transactions;
    } else {
      transactionsfiltred = filterByCategory(
        DATA_CATEGORIES[selectedIndex].libelle
      );
    }
    //console.log(transactionsfiltred);
    showTransactions(transactionsfiltred);
  }
  function sumTotalTransactions(transactions) {
    globaleTotalDebit = 0;
    globaleTotalCredit = 0;
    globalTotal = 0;
    transactions.forEach((item) => {
      globaleTotalDebit += item.debit;
      globaleTotalCredit += item.credit;
      console.log("Débit", item.debit, "Crédit:", item.credit);
    });
    globalTotal = globaleTotalCredit - globaleTotalDebit;

    //arrayTransactions.transactions.credit;
  }
  /************************MAIN****************************/
  init();
  /********************EVENT LISTENER **********************/
  /* ADDLISTERNER FILTER CATEGORIE */
  SELECT_FILTER_CATEGORY.addEventListener(
    "change",
    filterTransactionsByCategory
  );
  /* ADDLISTERNER FILTER SUB CATEGORY */
  selectFilterSubCategory.addEventListener("change", function () {
    let selectedValue = selectFilterSubCategory.value;
    //console.log(selectedValue);
  });
  /* ADDLISTERNER FILTER DATE */
  selectFilterDate.addEventListener("change", function () {
    let selectedValue = DATA_FILTER_DATE.value;
    //console.log(selectedValue);
  });
});
