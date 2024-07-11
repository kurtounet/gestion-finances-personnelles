"use strict";

var _function = require("./function.js");

var _Count = require("./Models/Count.js");

var _filterDate = require("../data/filterDate.js");

var _counts = require("../data/counts.js");

var _categories = require("../data/categories.js");

var _transactions = require("../data/transactions.js");

document.addEventListener("DOMContentLoaded", function (event) {
  var SIDE_BARE = document.querySelector("#sidebar");
  var MAIN = document.querySelector("#main");
  var TRANSACTIONS_LISTE = document.querySelector("#wrapper");
  var AMOUN_TOTAL = document.querySelector("#amountTotal");
  var AMOUN_IN_TOTAL = document.querySelector("#amountInTotal");
  var AMOUN_OUT_TOTAL = document.querySelector("#amountOutTotal");
  var itemTransactionDate = document.querySelector("#itemTransactionDate");
  var selectedCount = 0;
  var selectFilterDate = document.querySelector("#filterDate");
  var SELECT_FILTER_CATEGORY = document.querySelector("#filterCategory"); //selectFilterCategory = document.querySelector("#filterCategory");

  var selectFilterSubCategory = document.querySelector("#filterSubCategory");
  var globaleTotalDebit = 0;
  var globaleTotalCredit = 0;
  var globalTotal = 0; // CREATIONDE LA COLLECTION DES COMPTES

  var ArrayCount = [];

  _counts.DATA_COUNT.forEach(function (itemCount) {
    // Récuperation les transactions de chaque comptes
    var transactions = _transactions.DATA_TRANSACTIONS.filter(function (DATA_TRANSACTIONS) {
      return DATA_TRANSACTIONS.countId === itemCount.id;
    }); // Création des comptes


    var count = new _Count.Count(itemCount.id, itemCount.libelle, transactions); // Ajout des comptes dans la collection

    ArrayCount.push(count);
  });
  /************************FONCTIONS****************************/
  // Filtre les transactions par date


  function filterByDate(date) {}

  function filterByCategory(categoryName) {
    var transactionCountSelected = ArrayCount[selectedCount].transactions;
    var transactionsfiltred = transactionCountSelected.filter(function (transactionCountSelected) {
      return transactionCountSelected.category === categoryName;
    }); //console.log(transactionsfiltred);

    return transactionsfiltred;
  } //charge les filtres


  function loadSelectFilter(select, options) {
    options.forEach(function (option) {
      var opt = document.createElement("option");
      opt.value = option.id;
      opt.textContent = option.libelle;
      select.appendChild(opt);
    });
    return select;
  } //AFFICHE LES TRANSACTION


  function showTransactions(transactions) {
    sumTotalTransactions(transactions);
    TRANSACTIONS_LISTE.removeChild(TRANSACTIONS_LISTE.firstChild);
    var arrayTransactionsHtml = document.createElement("div");
    transactions.forEach(function (item) {
      //console.log(item);
      arrayTransactionsHtml.appendChild((0, _function.CreateTransaction)(item));
    });
    TRANSACTIONS_LISTE.appendChild(arrayTransactionsHtml);
    AMOUN_TOTAL.innerHTML = globalTotal;
    AMOUN_IN_TOTAL.innerHTML = globaleTotalCredit;
    AMOUN_OUT_TOTAL.innerHTML = globaleTotalDebit;
  } //INITIALISATION


  function init() {
    selectFilterDate = loadSelectFilter(selectFilterDate, _filterDate.DATA_FILTER_DATE);
    SELECT_FILTER_CATEGORY = loadSelectFilter(SELECT_FILTER_CATEGORY, _categories.DATA_CATEGORIES);
    /*
    ArrayCount[0].transactions.forEach(function (item) {
      createTransaction(item);
    })
      */

    showTransactions(ArrayCount[selectedCount].transactions);
  }

  function filterTransactionsByCategory() {
    var selectedIndex = SELECT_FILTER_CATEGORY.value;
    /* A FAIRE
    selectFilterSubCategory = loadSelectFilter(
      selectFilterSubCategory,
      DATA_CATEGORIES[selectedIndex]["subcategories"]
    );*/

    var transactionsfiltred;

    if (selectedIndex === "0") {
      transactionsfiltred = ArrayCount[selectedCount].transactions;
    } else {
      transactionsfiltred = filterByCategory(_categories.DATA_CATEGORIES[selectedIndex].libelle);
    } //console.log(transactionsfiltred);


    showTransactions(transactionsfiltred);
  }

  function sumTotalTransactions(transactions) {
    globaleTotalDebit = 0;
    globaleTotalCredit = 0;
    globalTotal = 0;
    transactions.forEach(function (item) {
      globaleTotalDebit += item.debit;
      globaleTotalCredit += item.credit;
      console.log("Débit", item.debit, "Crédit:", item.credit);
    });
    globalTotal = globaleTotalCredit - globaleTotalDebit; //arrayTransactions.transactions.credit;
  }
  /************************MAIN****************************/


  init();
  /********************EVENT LISTENER **********************/

  /* ADDLISTERNER FILTER CATEGORIE */

  SELECT_FILTER_CATEGORY.addEventListener("change", filterTransactionsByCategory);
  /* ADDLISTERNER FILTER SUB CATEGORY */

  selectFilterSubCategory.addEventListener("change", function () {
    var selectedValue = selectFilterSubCategory.value; //console.log(selectedValue);
  });
  /* ADDLISTERNER FILTER DATE */

  selectFilterDate.addEventListener("change", function () {
    var selectedValue = _filterDate.DATA_FILTER_DATE.value; //console.log(selectedValue);
  });
});