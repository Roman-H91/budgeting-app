console.log("Savings percentage: 'high' = 30%, 'medium' = 20%, 'low' = 10%");

function count() {
    let budget = +document.getElementById("budget").value;
    let rent = +document.getElementById("rent").value;
    let utilities = +document.getElementById("utilities").value;
    let newPurchase = +document.getElementById("newPurchase").value;
    let descriptionPurchase = document.getElementById("descriptionPurchase").value;
    let el = document.getElementsByName("saving");

    let totalCosts = rent + utilities;
    let budgetLeft = budget - totalCosts;
    let budgetBeforeSaving = budgetLeft - newPurchase;
    let budgetAfterSaving;

    for (let i = 0; i < el.length; i++) {
        if (el[i].checked) {
            if (el[i].value === "high") {
                budgetAfterSaving = budgetBeforeSaving - (budgetBeforeSaving / 100 * 30);
            } else if (el[i].value === "medium") {
                budgetAfterSaving = budgetBeforeSaving - (budgetBeforeSaving / 100 * 20);
            } else if (el[i].value === "low") {
                budgetAfterSaving = budgetBeforeSaving - (budgetBeforeSaving / 100 * 10);
            }
        }
    };

    if (budgetAfterSaving > 0) {
        alert("You have enough money to buy: " + descriptionPurchase + ". Savings after: " + budgetAfterSaving + "$");
    } else {
        alert("You don't have enough money to buy: " + descriptionPurchase + ". Savings after: " + budgetAfterSaving + "$");
    };
};
