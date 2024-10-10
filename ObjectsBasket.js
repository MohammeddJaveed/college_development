function totalCost(basket, prices) {
    let total = 0;
    for (let product in basket) {
        if (prices.hasOwnProperty(product)) { 
            total += basket[product] * prices[product];
        }
    }
    return total;
}

const basket = {
    apple: 3,
    banana: 5,
    grapes: 2
};

const prices = {
    apple: 3.4,
    banana: 2,
    grapes: 1
};

const total = totalCost(basket, prices);
console.log(`Total cost of the basket: ${total}`);