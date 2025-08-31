// (advanced) Multi-layer discount price calculation

// Simple discount math

function discount(quantityValue){
    let total;
    if(quantityValue <= 100){
        total = quantityValue * 100;
        return total;
    } else if(quantityValue <= 200){
        total = quantityValue * 90;
        return total;
    } else{
        total = quantityValue * 70;
        return total;
    }
}

console.log(discount(201));

// Advanced layer discount math [Suppose, you brought 110 prodcuts = 100(no discount) + 10(discount applicable)]

function layer_discount(quantityValue){
    let first100price = 100;
    let secondf100price = 90;
    let above200price = 70;
    let total;
    let firstpart;
    let secondpart;
    let remainingpart;
    if(quantityValue <= 100){
        total = quantityValue * first100price;
        return total;
    } else if(quantityValue <= 200){
        firstpart = first100price * 100;
        remainingpart = (quantityValue - 100) * secondf100price;
        total = firstpart + remainingpart;
        return total;
    } else{
        firstpart = first100price * 100;
        secondpart = secondf100price * 100;
        remainingpart = (quantityValue - 200) * above200price;
        total = firstpart + secondpart + remainingpart;
        return total;
4    }
}

console.log(layer_discount(210));