	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Apple",
		vegetarian: true,
		glutenFree: true,
        dairyFree: true,
        organic: true,
		price: 1.05
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
        dairyFree: false,
        organic: true,
		price: 3.29
	},
	{
		name: "Cake",
		vegetarian: true,
		glutenFree: false,
        dairyFree: false,
        organic: false,
		price: 18
	},
	{
		name: "Chicken",
		vegetarian: false,
		glutenFree: true,
        dairyFree: true,
        organic: true,
		price: 17.58
	},
	{
		name: "Eggs",
		vegetarian: true,
		glutenFree: true,
        dairyFree: true,
        organic: true,
		price: 6.99
	},
	{
		name: "Ice Cream",
		vegetarian: true,
		glutenFree: true,
        dairyFree: false,
        organic: false,
		price: 4.39
	},
	{
		name: "Pasta",
		vegetarian: true,
		glutenFree: false,
        dairyFree: true,
        organic: true,
		price: 8.99
	},
	{
		name: "Pizza",
		vegetarian: false,
		glutenFree: false,
        dairyFree: false,
        organic: false,
		price: 9.99
	},
	{
		name: "Potatoes",
		vegetarian: true,
		glutenFree: true,
        dairyFree: true,
        organic: true,
		price: 4.97
	},
	{
		name: "Rice",
		vegetarian: true,
		glutenFree: true,
        dairyFree: true,
        organic: true,
		price: 16.99
	},
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restrictions) {
    let products = new Set();

    // Add all products to the set
    for (let i = 0; i < prods.length; i++) {
        products.add(prods[i]);
    }

	// Convert the Set to an array
	const productsArray = Array.from(products);

	// Sort the array based on the 'price' property of each product
	productsArray.sort((a, b) => a.price - b.price);

	// Recreate the Set with the sorted products
	products = new Set(productsArray);

    // Remove the ones that don't meet the restriction
    restrictions.forEach ((restriction) => {
        for (let i = 0; i < prods.length; i++) {

            if ((restriction == "vegetarian") 
                && (prods[i].vegetarian == false)
                && (products.has(prods[i]))){
                    products.delete(prods[i]);

            } else if ((restriction == "gluten-free") 
                && (prods[i].glutenFree == false)
                && (products.has(prods[i]))){
                    products.delete(prods[i]);

            } else if ((restriction == "lactose-intolerant") 
                && (prods[i].dairyFree == false)
                && (products.has(prods[i]))){
                    products.delete(prods[i]);

            } else if ((restriction == "organic") 
                && (prods[i].organic == false)
                && (products.has(prods[i]))){
                    products.delete(prods[i]);
            }

        }
    });

    // Convert the set to an array (expected return type)
    let products_array = [];
    products.forEach ((product) => { products_array.push(product); });

	// Sort array
	products_array.sort((a, b) => a.price - b.price);

    console.log(products_array);
	return products_array;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	let totalPrice = 0;
	for (let i = 0; i < products.length; i++) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice.toFixed(2);
}

export { products, restrictListProducts, getTotalPrice };