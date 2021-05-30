	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		lactosefree: true,
		nutfree: true,
		organic: false,
		price: 1.99
	},
	{
		name: "organic brocoli",
		lactosefree: true,
		nutfree: true,
		organic: true,
		price: 2.49
	},
	{
		name: "tomato",
		lactosefree: true,
		nutfree: true,
		organic: false,
		price: 1.49
	},
	{
		name: "organic tomato",
		lactosefree: true,
		nutfree: true,
		organic: true,
		price: 3.99
	},
	{
		name: "yogurt",
		lactosefree: false,
		nutfree: true,
		organic: false,
		price: 2.00
	},
	{
		name: "white bread",
		lactosefree: false,
		nutfree: true,
		organic: false,
		price: 2.35
	},
    {
		name: "cereals",
		lactosefree: false,
		nutfree: false,
		organic: false,
		price: 2.99
	},
	{
		name: "almond granola",
		lactosefree: true,
		nutfree: false,
		organic: false,
		price: 3.25
	},
	{
		name: "milk chocolate",
		lactosefree: false,
		nutfree: false,
		organic: false,
		price: 3.25
	},
	{
		name: "salmon",
		lactosefree: true,
		nutfree: true,
		organic: true,
		price: 10.00
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "lactosefree") && (prods[i].lactosefree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "nutfree") && (prods[i].nutfree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "organic") && (prods[i].organic == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}

		product_names.sort(function(a, b) {
		var priceA, priceB;
		for(let i = 0; i<products.length; i++){
			if(products[i].name===a){
				priceA = products[i].price;
			}else if(products[i].name === b){
				priceB = products[i].price;
			}
		}
         return priceA-priceB;
	});
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(priceList) {
/*  	var totalPrice=0;
	let prodList=[];
	var prod;
	
		for(let i = 0; i<chosenProducts.length; i++){
		prod = chosenProducts[i].split(" ")[0];
		prodList.push(prod);
		}
	    for (let i=0; i<products.length; i+=1) {
		if (prodList.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}  */
	totalPrice = 0;
/*	for (let i=0; i<products.length; i+=1) {
 		
			totalPrice += products[i].price;
		} 
	}*/
		for (let i=0; i<priceList.length; i+=1) {

		totalPrice += priceList[i];
		}	
	
	return totalPrice;
}
