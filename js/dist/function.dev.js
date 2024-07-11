"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadSelectFilter = loadSelectFilter;
exports.CreateTransaction = CreateTransaction;

function loadSelectFilter(select, options) {
  options.forEach(function (option) {
    var opt = document.createElement("option");
    opt.value = option.id;
    opt.textContent = option.libelle;
    select.appendChild(opt);
  });
  return select;
}

function CreateTransaction(transaction) {
  var itemTransaction = document.createElement("section");
  itemTransaction.classList.add("itemTransaction");
  itemTransaction.innerHTML = "\n  <p id=\"itemTransactionDate\">".concat(transaction.date, "</p>\n  <p id=\"itemTransactionCategory\">").concat(transaction.category, "</p>\n  <p id=\"itemTransactionCategory\">").concat(transaction.subcategory, "</p>\n  <p class=\"amountOut\" id=\"itemTransactionDebit\">").concat(transaction.debit, "</p>\n  <p class=\"amountIn\" id=\"itemTransactionCredit\">").concat(transaction.credit, "</p>  \n  <div class=\"btn-edit-delete\">\n    <img\n      id=transaction\n      class=\"imageEditTransaction\"\n      src=\"assets/images/edit.png\"\n      alt=\"Modifier\"\n    />\n    <img\n      id=\"delete\"\n      class=\"imageDeleteTransaction\"\n      src=\"assets/images/trash.png\"\n      alt=\"supprimer\"\n    />\n  </div>\n  <p id=\"itemTransactionCredit\"></p>\n  ");
  return itemTransaction;
}