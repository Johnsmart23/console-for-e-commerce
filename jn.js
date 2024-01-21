console.log("Welcome to Smart Gadget");
console.log("At Smart Gadget we offer you the very best");

//items available
const availableItems = {
    IPhone_13: { price: 750000 },
    Samsung_S10: { price: 150000 },
    Oramio_airpod: { price: 5000 },
    Infinix_Hot30: { price: 90000 },
    Hp_Laptop: { price: 230400 }
};
//cart
const shoppingCart = [];

//display available item
function displayAvailableItems() {
    console.log("Available Items:");
    for (const item in availableItems) {
        console.log(`${item}: #${availableItems[item].price}`);
    }
    console.log("\n");
}
//add to cart
function addItemToCart(item) {
    if (availableItems[item]) {
        shoppingCart.push(availableItems[item]);
        console.log(`${item} added to the cart.`);
    } else {
        console.log(`${item} is not available.`);
    }
}
//calculate cart
function calculateTotalCost() {
    const totalCost = shoppingCart.reduce((acc, item) => acc + item.price, 0);
    return totalCost;
}

displayAvailableItems();

//add item to cart
addItemToCart("Samsung_S10");
addItemToCart("Hp_Laptop");

console.log("\nItems in the Cart:");
for (const item of shoppingCart) {
    console.log(`${Object.keys(availableItems).find(key => availableItems[key] === item)}: #${item.price}`);
}

//total cost
const totalCost = calculateTotalCost();
console.log("\nTotal cost for the items in the cart:", totalCost);
