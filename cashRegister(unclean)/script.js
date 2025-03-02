let price = 19.5;
let cid = [
  ['PENNY', 0.5],
  ['NICKEL', 0],
  ['DIME', 0],
  ['QUARTER', 0],
  ['ONE', 0],
  ['FIVE', 0],
  ['TEN', 0],
  ['TWENTY', 0],
  ['ONE HUNDRED', 0]
];

const cash = document.getElementById("cash");
const purchaseBtn = document.getElementById("purchase-btn");
const changeDue = document.getElementById("change-due");


const makeChange = () => {
  if (cash.value < price ){
alert("Customer does not have enough money to purchase the item")
return;
    }
      let amountDue = cash.value - price;
      let changeGiven = [];
      const DENOMINATIONS = {
        "HUNDRED": 10000,
        "TWENTY": 2000,
        "TEN": 1000,
        "FIVE": 500,
        "ONE": 100,
        "QUARTER": 25,
        "DIME": 10,
        "NICKEL": 5,
        "PENNY": 1
    };
    amountDue = Math.round(amountDue * 100);
    let cashRegister = cid.map(([denom, amount]) =>  [denom, Math.round(amount * 100)]);
     cashRegister.sort((a, b) => DENOMINATIONS[b[0]] - DENOMINATIONS[a[0]]);

    let totalCashInDrawer = cashRegister.reduce((sum, [, amount]) => sum + amount, 0);

        if (totalCashInDrawer === amountDue) {
        let filteredDrawer = cashRegister.filter(([, amount]) => amount > 0); // Remove empty denominations
        let formattedChange = filteredDrawer.map(([denom, amount]) => `${denom}: $${(amount / 100).toFixed(2)}`).join(", ");
        changeDue.innerText = `Status: CLOSED - ${formattedChange}`;
        return
    }

     for (let [denom, available] of cashRegister) {
        let denomValue = DENOMINATIONS[denom]; 
        let amountToGive = 0;

         while (amountDue >= denomValue && available > 0) {
            amountDue -= denomValue;
            available -= denomValue;
            amountToGive += denomValue;
        }

        if (amountToGive > 0) {
            changeGiven.push(`${denom}: $${(amountToGive / 100).toFixed(2)}`);
        }
    }
 
    if (amountDue > 0) {
        changeDue.innerText = "Status: INSUFFICIENT_FUNDS";
    } else if (changeGiven.length === 0) {
        changeDue.innerText = "No change due - customer paid with exact cash";
    } else { 
        changeDue.innerText = `Status: OPEN ${changeGiven.join(", ")}`;
    }

}

purchaseBtn.addEventListener("click", makeChange);
