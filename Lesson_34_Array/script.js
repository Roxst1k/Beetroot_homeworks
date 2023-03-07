"use strict";

let shoppingList = [
    {
        productName : 'apple',
        quantity : 3,
        isBought : true,
        priceProductUnit : 10,
        totalPrice : (quantity, priceProductUnit) => {
            if (this.isBought){
                return quantity * priceProductUnit;
            } else {
                return 0;
            }
        }


    },
    {
        productName : 'meat',
        quantity : 1,
        isBought : false,
        priceProductUnit : 140,
        totalPrice : (quantity, priceProductUnit) => {
            if (this.isBought){
                return quantity * priceProductUnit;
            } else {
                return 0;
            }
        }

    },
    {
        productName : 'milk',
        quantity : 1,
        isBought : false,
        priceProductUnit : 50,
        totalPrice : (quantity, priceProductUnit) => {
            if (this.isBought){
                return quantity * priceProductUnit;
            } else {
                return 0;
            }
        }

    },
    {
        productName : 'juice',
        quantity : 2,
        isBought : true,
        priceProductUnit : 40,
        totalPrice : (quantity, priceProductUnit) => {
            if (this.isBought){
                return quantity * priceProductUnit;
            } else {
                return 0;
            }
        }

    },
    {
        productName : 'bread',
        quantity : 2,
        isBought : false,
        priceProductUnit : 20,
        totalPrice : (quantity, priceProductUnit) => {
            if (this.isBought){
                return quantity * priceProductUnit;
            } else {
                return 0;
            }
        }

    },

]


getShoppingList(shoppingList);
// addNewBought('milk');
// getShoppingList(shoppingList);
// console.log(deleteProduct('milk',shoppingList));

function getShoppingList(shoppingList) {
    let boughtItem = [];
    let unBoughtItem = [];
    shoppingList.forEach(item => {
        if (item.isBought) {
            boughtItem.push(item.productName);
        }else {
            unBoughtItem.push(item.productName);
        }
    });
    console.log(`You already bought: ${boughtItem}`);
    console.log(`You need to buy: ${unBoughtItem}`);
}

function addNewBought (productName) {
    for (let i = 0; i <= shoppingList.length; i++){
        if (shoppingList[i].productName === productName) {
            shoppingList[i].isBought = true;
            console.log(`${productName} has been bought`);
            return;
        }
    }
}

function deleteProduct(productName, shoppingList) {
    let upgradeShoppingList = shoppingList.filter(item => item.productName !== productName);
    if (upgradeShoppingList.length === shoppingList.length) {
        console.log(`${productName} not found in the shopping list`);
    } else {
        console.log(`${productName} removed from shopping list`);
    }
    return upgradeShoppingList;
}


