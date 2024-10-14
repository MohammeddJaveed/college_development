function totalCost(basket, prices) {
    let total = 0;
    for (let product in basket) {
        if (prices[product]!==undefined) { 
            total += basket[product] * prices[product];
        }
    }
    alert("Basket total ="+total)
    return total;
}
alert(totalCost({'apple':4,'pinapple':10},{'apple':4,'pinapple':100}))