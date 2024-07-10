"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Category = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Category = function Category(id, libelle, subcategories) {
  _classCallCheck(this, Category);

  this.id = id;
  this.libelle = libelle;
  this.subcategories = subcategories;
};

exports.Category = Category;