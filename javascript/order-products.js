const orderProducts1 = document.getElementById('A-Z')
const orderProducst2 = document.getElementById('Z-A')
const initialState = document.getElementById('initialOrder')

const getOrderedProducstAsc = ()=>{
    fetch(`${mainRoute}/products/order?dir=ASC`)
        .then(response=>response.json())
        .then(data=>{
            productContainer.innerHTML = '';
            data.forEach(product=>{
                productContainer.innerHTML+=productCard(product)
            })
        })
        .catch(err=>console.log(err))
}

const getOrderedProducstDesc = ()=>{
    fetch(`${mainRoute}/products/order?dir=DESC`)
        .then(response=>response.json())
        .then(data=>{
            productContainer.innerHTML = '';
            data.forEach(product=>{
                productContainer.innerHTML+=productCard(product)
            })
        })
        .catch(err=>console.log(err))
}

orderProducts1.addEventListener('click',getOrderedProducstAsc)
orderProducst2.addEventListener('click',getOrderedProducstDesc)
initialState.addEventListener('click',getProducts)