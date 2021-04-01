// let budget = 2500;
// let savingPriority = "low";

// let rent = 800;
// let utilities = 200;
// let newLaptop = 1200;

// let totalCosts = rent + utilities;
// let budgetLeft = budget - totalCosts;
// let buyLaptop = budgetLeft >= newLaptop;

// console.log("New Item Within Budget");
// console.log(buyLaptop);
// console.log("Postpone Purchase and Save Instead:");
// console.log(savingPriority === "high");

function count() {
    let budget = +document.getElementById("budget").value;
    let rent = +document.getElementById("rent").value;
    let utilities = +document.getElementById("utilities").value;
    let newPurchase = +document.getElementById("newPurchase").value;
    let descriptionPurchase = document.getElementById("descriptionPurchase").value;

    let totalCosts = rent + utilities;
    let budgetLeft = budget - totalCosts;
    let budgetLeftAfterPurchase = budgetLeft - newPurchase;
    let buyNewItem = budgetLeft >= newPurchase;

    if (budgetLeftAfterPurchase > 0) {
        alert("You have enough money to buy: " + descriptionPurchase + ". Savings after: " + budgetLeftAfterPurchase + "$");
    } else {
        alert("You don't have enough money to buy: " + descriptionPurchase + ". Savings after: " + budgetLeftAfterPurchase + "$");
    };
};