let prices1 = [7, 1, 5, 3, 6, 4];
let prices2 = [7, 6, 4, 3, 1];

let maxProfit = function(prices) {
    let minPrice = Math.min(...prices);
    let maxProf = 0;
    let newPricesArrey = prices.slice(prices.indexOf(minPrice) + 1);
    newPricesArrey.forEach(function(price) {
        if (newPricesArrey.length > 0) {
            let maxPrice = Math.max(...newPricesArrey);
            if (maxPrice > minPrice) {
                let profit = maxPrice - minPrice;
                if (profit > maxProf) {
                    maxProf = profit;
                };
            };
        } else return 0;
    });
    return maxProf;

};

console.log(maxProfit(prices1)) // 5
console.log(maxProfit(prices2)) // 0