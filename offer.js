//  For a given array with prices of 5 items : [200, 645, 300, 900, 50]
// All Items have an offer of 10% Off on them. change the array to store final price after applying offer.
let items = [250, 645, 300, 900, 50];

for(let i = 0; i < items.length; i++){
    let offer = items[i] / 10;
    items[i] -=offer
}
console.log(items);