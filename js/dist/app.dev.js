"use strict";

var _function = require("./function.js");

var _graph = require("./graph.js");

var _Count = require("./Models/Count.js");

var _filterDate = require("../data/filterDate.js");

var _counts = require("../data/counts.js");

var _categories = require("../data/categories.js");

var _transactions = require("../data/transactions.js");

document.addEventListener("DOMContentLoaded", function (event) {
  // const SIDE_BARE = document.querySelector("#sidebar");
  // const MAIN = document.querySelector("#main");
  // const itemTransactionDate = document.querySelector("#itemTransactionDate");
  var referenceToChart = document.querySelector("#mychart");
  var TRANSACTIONS_LISTE = document.querySelector("#wrapper");
  var AMOUN_TOTAL = document.querySelector("#amountTotal");
  var AMOUN_IN_TOTAL = document.querySelector("#amountInTotal");
  var AMOUN_OUT_TOTAL = document.querySelector("#amountOutTotal");
  var selectedCount = 0;
  var selectFilterDate = document.querySelector("#filterDate");
  var selectFilterCategory = document.querySelector("#filterCategory");
  var selectFilterSubcategory = document.querySelector("#filterSubcategory");
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
  // FILTRE PAR DATE
  //function filterByDate(date) {}
  //FILTRE PAR CATEGORIE


  function filterByCategory(categoryName) {
    var transactionCountSelected = ArrayCount[selectedCount].transactions;
    var transactionsfiltred = transactionCountSelected.filter(function (transactionCountSelected) {
      return transactionCountSelected.category === categoryName;
    }); //console.log(transactionsfiltred);

    return transactionsfiltred;
  } //CHARGER LES FILTRES


  function loadSelectFilter(select, options) {
    options.forEach(function (option) {
      var opt = document.createElement("option");
      opt.value = option.id;
      opt.textContent = option.libelle;
      select.appendChild(opt);
    });
    return select;
  } // PREPARE LE GRAPHE


  function prepareChart(transactions) {
    var ArrayLabelCategory = [];
    var ArraydataCategory = [];
    var transactionsfiltred = [];
    transactions.forEach(function (item) {
      ArrayLabelCategory.push(item.subcategory);

      if (item.credit < 0) {
        ArraydataCategory.push(item.credit);
      } else {
        ArraydataCategory.push(item.debit);
      } //data pour le graphe
      // 1.Filtrer les transactions par category
      // transactionsfiltred = filterByCategory(item.category.categoryName);
      // 2.Faire la somme des montants
      // 3.afficher le graphe
      // transactionsfiltred = filterByCategory(item.category.categoryName);
      // ArraydataCategory.push(item.amount);

    });
    /*
    transactions.forEach(function (item) {
      ArrayLabelCategory.push(item.category);
      //data pour le graphe
      // 1.Filtrer les transactions par category
      transactionsfiltred = filterByCategory(item.category.categoryName);
      // 2.Faire la somme des montants
      // 3.afficher le graphe
      // transactionsfiltred = filterByCategory(item.category.categoryName);
      // ArraydataCategory.push(item.amount);
    });*/

    referenceToChart.remove();
    console.log("prepareChart");
    var canvas = document.createElement("canvas");
    canvas.setAttribute("id", "mychart");
    document.getElementById("graphParent").appendChild(canvas);
    referenceToChart = document.querySelector("#mychart"); // Tableau pour les tests
    //ArrayLabelCategory = ["banane", "pomme", "poire", "cerise"];
    //ArraydataCategory = [1, 2, 3, 4];
    // showChart OK

    (0, _graph.showChart)(ArrayLabelCategory, ArraydataCategory);
  } //AFFICHE LES TRANSACTIONS


  function showTransactions(transactions) {
    sumTotalTransactions(transactions);
    prepareChart(transactions);
    TRANSACTIONS_LISTE.removeChild(TRANSACTIONS_LISTE.firstChild);
    var arrayTransactionsHtml = document.createElement("div");
    transactions.forEach(function (item) {
      //  console.log(item);
      arrayTransactionsHtml.appendChild((0, _function.CreateTransaction)(item));
    });
    TRANSACTIONS_LISTE.appendChild(arrayTransactionsHtml);
    AMOUN_TOTAL.innerHTML = globalTotal;
    AMOUN_IN_TOTAL.innerHTML = globaleTotalCredit;
    AMOUN_OUT_TOTAL.innerHTML = globaleTotalDebit;
  }

  function filterTransactionsByCategory() {
    var selectedIndex = selectFilterCategory.value;
    /* A FAIRE
    selectFilterSubcategory = loadSelectFilter(
      selectFilterSubcategory,
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
      globaleTotalCredit += item.credit; // console.log("Débit", item.debit, "Crédit:", item.credit);
    });
    globalTotal = globaleTotalCredit - globaleTotalDebit;
  } //INITIALISATION


  function init() {
    selectFilterDate = loadSelectFilter(selectFilterDate, _filterDate.DATA_FILTER_DATE);
    selectFilterCategory = loadSelectFilter(selectFilterCategory, _categories.DATA_CATEGORIES);
    showTransactions(ArrayCount[selectedCount].transactions);
  }
  /************************MAIN****************************/


  init();
  /********************EVENT LISTENER **********************/

  /* ADDLISTERNER FILTER CATEGORIE */

  selectFilterCategory.addEventListener("change", filterTransactionsByCategory);
  /* ADDLISTERNER FILTER SUB CATEGORY A FAIRE)*/
  // selectFilterSubcategory.addEventListener("change", function () {
  //   let selectedValue = selectFilterSubcategory.value;
  //   //console.log(selectedValue);
  // });

  /* ADDLISTERNER FILTER DATE (A FAIRE)*/

  selectFilterDate.addEventListener("change", function () {
    var selectedValue = _filterDate.DATA_FILTER_DATE.value; //console.log(selectedValue);
  });
});