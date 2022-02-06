const productContainer = document.getElementById('products-container')
const categoriesContainer = document.getElementById('categories-container')

const mainRoute = 'https://back-1.herokuapp.com/api'

const productCard = (product)=>{
  return(
    `<div id='product-card-container' class="position-relative col my-5 mx-auto d-flex justify-content-center">
        <div class="card" style="width: 18rem;">
          <img 
             src="${(product.url_image !== 'null' && product.url_image)?product.url_image:"https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-no-image-available-icon-flat.jpg"}" 
             class="card-img-top img-fluid" 
             alt="${product.name}"
           />
          <div class=" card-body d-flex align-items-center justify-content-center flex-column">
            <p class="card-text">${product.name}</p>
            <p>$/${product.price}</p>
            <button class='btn btn-dark btn-outline-light'>Comprar</button>
          </div>
          <div id='triangle-effect' class='position-absolute'></div>
        </div>
      </div>`
  )
}

const getProducts = () => {
    fetch(`${mainRoute}/products`)
        .then(response=>response.json())
        .then(data=>{
          let categoriesArr = []
          productContainer.innerHTML= ''
            data.forEach(product=>{
              if( !categoriesArr.includes(product.category_name) ){
                productContainer.innerHTML+= `<div style='height:1px;' class='bg-light w-100'></div>
                                              <h1 class='text-light text-center'>${product.category_name.toUpperCase()}</h1>`
                categoriesArr.push(product.category_name) 
              }
              productContainer.innerHTML += productCard(product)
            })
        })
        .catch(error=>console.log(error))
}

const getCategories = () =>{
  fetch(`${mainRoute}/categories`)
    .then(response=>response.json())
    .then(data=>{
      data.forEach(category=>{
        categoriesContainer.innerHTML+=`<li id='${category.id}' onClick="filterByCategory(${category.id})"><a class="dropdown-item" href="#">${category.name}</a></li>`
      })
    })
    .catch(err=>console.log(err))
}

document.addEventListener('loadstart',getProducts())
document.addEventListener('loadstart',getCategories())