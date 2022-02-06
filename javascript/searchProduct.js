const form = document.getElementById('product-search')
const input = form.querySelector('input')

// we're using the "producContainer" variable from the "fetching-data.js" document


form.onsubmit = (e)=>{
    e.preventDefault()
    const { value } = input
    if(value == ''){
        getProducts()
    }else{
        fetch(`${mainRoute}/products`,{
            method:'post',
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                productName:value
            })
        })
            .then(res=>res.json())
            .then(data=>{
                productContainer.innerHTML = '';
                if(data.msg){
                    productContainer.innerHTML = `<h1 class='text-center text-light'>${data.msg}</h1>`
                }else{
                    data.forEach(product=>{
                        productContainer.innerHTML+=productCard(product)
                    })
                }
            })
            .catch(err=>console.log(err))
    }
}