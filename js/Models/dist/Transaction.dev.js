"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Transaction = function Transaction(countId, date, category, libelle, debit, credit) {
  _classCallCheck(this, Transaction);

  this.countId = countId;
  this.date = date;
  this.category = category;
  this.libelle = libelle;
  this.debit = debit;
  this.credit = credit;
};