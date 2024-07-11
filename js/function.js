export function loadSelectFilter(select, options) {
  options.forEach(function (option) {
    let opt = document.createElement("option");
    opt.value = option.id;
    opt.textContent = option.libelle;
    select.appendChild(opt);
  });
  return select;
}

export function CreateTransaction(transaction) {
  const itemTransaction = document.createElement("section");
  itemTransaction.classList.add("itemTransaction");
  itemTransaction.innerHTML = `
  <p id="itemTransactionDate">${transaction.date}</p>
  <p id="itemTransactionCategory">${transaction.category}</p>
  <p id="itemTransactionDebit">${transaction.debit}</p>
  <p id="itemTransactionCredit">${transaction.credit}</p>  
  <div class="btn-edit-delete">
    <img
      id=transaction
      class="imageEditTransaction"
      src="assets/images/edit.png"
      alt="Modifier"
    />
    <img
      id="delete"
      class="imageDeleteTransaction"
      src="assets/images/trash.png"
      alt="supprimer"
    />
  </div>
  <p id="itemTransactionCredit"></p>
  `;

  return itemTransaction;
}
