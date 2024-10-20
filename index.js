categoryList = document.querySelector(".categoryList")
alCat = []
products = document.querySelector(".product");
products.innerHTML = '';

displayProduct = async (allCheckCat = []) => {
    products.innerHTML = '';
    product = await fetch("https://fakestoreapi.com/products")
    finalProduct = await product.json()
    finalProduct.forEach(element => {

        //category data
        if (!alCat.includes(element.category)) {
            categoryList.innerHTML += `
            <label for="">
                <input type="checkbox" onclick = 'categoryFilter()' value="${element.category}" id="">${element.category}
            </label>`;
            alCat.push(element.category)

        }
        //product data
        if (allCheckCat.length == 0) {
            allCheckCat = alCat;
        }
        if (allCheckCat.includes(element.category)) {
            products.innerHTML += `
            <div class="productItem">
                <img src="${element.image}" alt="">
                <h4>catagory: ${element.category}</h4>
                <p>
                    Price Rs. ${element.price} | ${element.rating.rate}  
                </p>
                <h3>${element.title}</h3>
            </div>`
        };
    });
}
let categoryFilter = () => {
    let checkBox = document.querySelectorAll("input[type=checkbox]")
    let checkData = [];
    checkBox.forEach((e) => {
        if (e.checked) {
            checkData.push(e.value)
        }
    })
    displayProduct(checkData);
}
displayProduct();


// dummy comment