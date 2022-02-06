// we're using the "productContainer" variable from the "fetching-data.js" file

const filterByCategory = (categoryID)=>{
    fetch(`${mainRoute}/products/${categoryID}`)
        .then(response=>response.json())
        .then(data=>{
            productContainer.innerHTML = '';
            data.forEach(product =>{
                productContainer.innerHTML+=productCard(product)
            })
        })   
}