"use strict"

let table = document.getElementById('table');
let product = document.getElementById('product')
let quantity = document.getElementById('quantity');
let price = document.getElementById('price');
let tbody = document.getElementById('tbody');



let data = [];
let productArray = [];
let quantityArray = [];
let priceArray = [];

let rows = table.rows;


for (let i = 0; i < rows.length; i++) {
    let cells = rows[i].cells;
    let rowData = [];
    for (let j = 0; j < cells.length; j++) {
        rowData.push(cells[j].innerText);
    }
    data.push(rowData);
}

console.log(data);
product.addEventListener('click', function (){
    // let tbody = table.getElementsByTagName("tbody")[0];
    // let rows = tbody.getElementsByTagName("tr")[0];
    // let cols = rows.getElementsByTagName("td");
    // console.log(cols);
})

let products = data.slice(1).map(row => row[0]);
let quantities = data.slice(1).map(row => Number(row[1]));
let prices = data.slice(1).map(row => Number(row[2]));


product.addEventListener("click", function (){
    products.sort();
    console.log(products);
})

// quantity.addEventListener("click", function (){
//     let sortedRows = Array.from(table.rows)
//         .slice(1)
//         .sort((rowA,rowB) => {
//             return rowA.cells[1].innerHTML - rowB.cells[1].innerHTML
//         })
//     table.tBodies[0].append(...sortedRows);
// })

// price.addEventListener("click", function (){
//     prices.sort((a, b) => a - b);
//     console.log(prices);
// })



quantity.addEventListener("click", function (){
    let sortedRows = Array.from(table.rows)
        .slice(1)
        .sort((rowA,rowB) => {
            return rowA.cells[1].innerHTML - rowB.cells[1].innerHTML
        })
    table.tBodies[0].append(...sortedRows);
})

price.addEventListener("click", function (){
    let sortedRows = Array.from(table.rows)
        .slice(1)
        .sort((rowA,rowB) => {
            return rowA.cells[2].innerHTML - rowB.cells[2].innerHTML
        })
    table.tBodies[0].append(...sortedRows);
})

