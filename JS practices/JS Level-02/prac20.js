// Use add and multiplication to calculate cloth requirements

function clothPrice(shirtQuantity, pantQuantity, shoeQuantity){
    let shirtPirce = 500;
    let pantPrice = 300;
    let shoePrice = 900;

    let shirtTotalPrice = shirtPirce * shirtQuantity;
    let pantTotalPrice = pantPrice * pantQuantity;
    let shoeTotalPrice = shoePrice * shoeQuantity;

    let totalPriceCloth = shirtTotalPrice + pantTotalPrice + shoeTotalPrice;

    return totalPriceCloth;
}

console.log(clothPrice(4, 2, 1));