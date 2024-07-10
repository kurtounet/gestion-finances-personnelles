"use strict";

var _Category = require("./Models/Category.js");

var _Count = require("./Models/Count.js");

var _filterDate = require("../data/filterDate.js");

var _counts = require("../data/counts.js");

var _categories = require("../data/categories.js");

var _transactions = require("../data/transactions.js");

// import { Transaction } from "./Models/Transaction.js";
document.addEventListener("DOMContentLoaded", function (event) {
  // CREATIONDE LA COLLECTION DES COMPTES
  var ArrayCount = [];

  _counts.DATA_COUNT.forEach(function (itemCount) {
    // Récuperation les transactions de chaque comptes
    var transactions = _transactions.DATA_TRANSACTIONS.filter(function (DATA_TRANSACTIONS) {
      return DATA_TRANSACTIONS.countId === itemCount.id;
    }); // Création des comptes


    var count = new _Count.Count(itemCount.id, itemCount.libelle, transactions); // Ajout des comptes dans la collection

    ArrayCount.push(count);
  });

  var SIDE_BARE = document.querySelector("#sidebar");
  var MAIN = document.querySelector("#main");
  var TRANSACTIONS_LISTE = document.querySelector("#wrapper");
  var itemTransactionDate = document.querySelector("#itemTransactionDate");
  var selecteFilerDate = document.querySelector("#filterDate");
  var selecteFilerCategory = document.querySelector("#filterCategory");
  var selecteFilerSubCategory = document.querySelector("#filterSubCategory");
  /************************FONCTIONS****************************/
  //charge les filtres

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
    var arrayTransaction = [];
    transactions.forEach(function (transaction) {
      console.log(Object.values(transaction));
      arrayTransaction.push(Object.values(transaction));
    });
    console.log(arrayTransaction);
    new gridjs.Grid({
      columns: ["id", "date", "catégorie", "sous category", "Débit", "Crédit"],
      data: arrayTransaction
    }).render(document.getElementById("wrapper"));
  } //INITIALISATION


  function init() {
    selecteFilerDate = loadSelectFilter(selecteFilerDate, _filterDate.DATA_FILTER_DATE);
    selecteFilerCategory = loadSelectFilter(selecteFilerCategory, _categories.DATA_CATEGORIES);
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
    var selectedIndex = selecteFilerCategory.value;
    selecteFilerSubCategory = loadSelectFilter(selecteFilerSubCategory, _categories.DATA_CATEGORIES[selectedIndex]["subcategories"]);
    console.log(selectedIndex); // selectedValue;
  });
  selecteFilerSubCategory.addEventListener("change", function () {
    var selectedValue = FILTER_SUB_CATEGORY.value;
    console.log(selectedValue); // selectedValue;
  });
  selecteFilerDate.addEventListener("change", function () {
    var selectedValue = FILTER_SUB_CATEGORY.value;
    console.log(selectedValue); // selectedValue;
  });
});