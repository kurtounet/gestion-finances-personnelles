"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Count = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Count = function Count(id, libelle, ArrayTransactions) {
  _classCallCheck(this, Count);

  this.id = id;
  this.libelle = libelle;
  this.transactions = ArrayTransactions;
};

exports.Count = Count;