import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8000/api" })

// Attach a token if it exists
API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token')
    if (token) req.headers.Authorization = token
    return req
})

// Auth
export const loginUser = (data) => API.post("/users/login", data)
export const signupUser = (data) => API.post("/users/signUp", data)

// Products

export const getProducts = () => API.get('/products')
export const getProductById = (id) => API.get(`/products/${id}`)
export const createProduct = (data) => API.post('/products', data)
export const updateProduct = (id, data) => API.put(`/products/${id}`, data)
export const deleteProduct = (id) => API.delete(`/products/${id}`)
// Orders

export const createOrder = (data) => API.post('/order/createOrder', data)
export const getOrders = () => API.get('/orders')
export const getAllOrders = () => API.get('/orders')
// Reviews

export const getProductReviews = (id) => API.get(`/review/${id}`)












// axios.get("http://localhost:8000/api/products")
// .then((res)=>{
//     console.log(res.data)
// })
// .catch(err=>{
//     console.log(err.message)
// })

// Do axios.post, put etc: HOMEWORK