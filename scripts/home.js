//import {productCategories} from "../data/products";

let result = "";

productCategories.forEach((product) => {
	result += `
					<div><a href=""><img src="${product.imageSrc}" alt=""></a> <span>${product.categoryName}</span> </div>
	`
})

document.querySelector(".js").innerHTML = result

console.log("hello")