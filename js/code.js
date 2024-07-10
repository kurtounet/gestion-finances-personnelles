new gridjs.Grid({
  columns: ["Name", "Email", "Phone Number"],
  data: [
    ["John", "john@example.com", "(353) 01 222 3333"],
    ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
    ["Eoin", "eoin@gmail.com", "0097 22 654 00033"],
    ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
    ["Afshin", "afshin@mail.com", "(353) 22 87 8356"],
  ],
}).render(document.getElementById("wrapper"));





 function createTransaction(transaction) {
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




  
// TRANSACTIONS.forEach((element) => {
//   console.log(element);
//   // createTransaction(element);
// });
 



  //TRANSACTIONS_LISTE.appendChild(itemTransaction);

  /*
  let ArrayCategory = [];
  DATA_CATEGORIES.forEach((item) => {
    //console.log(item);
    ArrayCategory.push(new Category(item.id, item.libelle, item.subcategories));
  });
*/
});
