import { findProducts, getProducts } from "../services/products"
import { inputSearch, productsContainer } from "./domElements";

export const printProducts = async (categoryId = null) => {
    const data = await getProducts();
    const categoriesFiltered = data.filter(product => {
        return categoryId ? product.category.id === Number(categoryId) : product
    });
    renderProducts(categoriesFiltered)
}

export const printProductsFinder = async () => {
    const dataFinder = await findProducts(inputSearch.value)
    renderProducts(dataFinder)
    console.log(dataFinder)
}

const renderProducts = (array) => {
    productsContainer.innerHTML = '';
    array.forEach(product => {
        productsContainer.innerHTML += `
        <section class="main__products-container__product">
                <h2 class="main__products-container__product--title">${product.category.name}</h2>
                <img src="${product.imageURL}" alt="">
                <p class="main__products-container__product--item">
                    Producto:
                    <span>${product.name}</span>
                </p>
                <p class="main__products-container__product--item">
                    Precio:
                    <span>${product.price}</span>
                </p>
                <p class="main__products-container__product--item">Cantidad:
                    <span>${product.amount}</span>
                </p>
                <div class="icons-btn">
                   <span class="material-symbols-outlined icon-delete" data-id="${product.id}">delete</span>
                   <span class="material-symbols-outlined icon-edit"  data-id="${product.id}">edit</span>
                </div>
                
        </section>
        `
    });
    btnEdtitDelete();
   
}

export const btnEdtitDelete = () => {
    
    const deleteProduct = productsContainer.querySelectorAll('.icon-delete')
    const editProduct = productsContainer.querySelectorAll('.icon-edit')
    const containerBtn = productsContainer.querySelector('.icons-btn')
    
    return containerBtn;
}

// export const btnEdtitDelete = () => {
    
//     productsContainer.addEventListener('click', (e) => {
//        const deleteProduct = e.target.closest('.icon-delete')
//        console.log(deleteProduct)
//     })
// }