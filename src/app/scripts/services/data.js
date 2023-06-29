const URL_API = "http://localhost:3000/"

export const endpoints = {
    urlProducts: `${URL_API}products?_expand=category`,
    urlCategories: `${URL_API}categories`,
    urlUsers: `${URL_API}users`
}