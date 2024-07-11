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
  var itemTransactionDate = document.querySelector("#itemTransactionDate");
  var selectedCount = 0;
  var selectFilterDate = document.querySelector("#filterDate");
  var SELECT_FILTER_CATEGORY = document.querySelector("#filterCategory"); //selectFilterCategory = document.querySelector("#filterCategory");

  var selectFilterSubCategory = document.querySelector("#filterSubCategory"); // CREATIONDE LA COLLECTION DES COMPTES

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
    });
    console.log(transactionsfiltred);
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
  } //Affiche les transactions


  function showTransactions(transactions) {
    var arrayTransactions = document.createElement("div");
    transactions.forEach(function (item) {
      console.log(item);
      arrayTransactions.appendChild((0, _function.CreateTransaction)(item)); //console.log(Object.values(transaction));
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
  /************************MAIN****************************/


  init();
  /********************EVENT LISTENER **********************/

  SELECT_FILTER_CATEGORY.addEventListener("change", function () {
    var selectedIndex = SELECT_FILTER_CATEGORY.value;
    selectFilterSubCategory = loadSelectFilter(selectFilterSubCategory, _categories.DATA_CATEGORIES[selectedIndex]["subcategories"]);
    var transactionsfiltred = filterByCategory(_categories.DATA_CATEGORIES[selectedIndex]["libelle"]);
    showTransactions(transactionsfiltred); //console.log(selectedIndex); // selectedValue;
  });
  selectFilterSubCategory.addEventListener("change", function () {
    var selectedValue = selectFilterSubCategory.value;
    console.log(selectedValue);
  });
  selectFilterDate.addEventListener("change", function () {
    var selectedValue = _filterDate.DATA_FILTER_DATE.value;
    console.log(selectedValue);
  });
});