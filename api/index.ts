import { ProductInfoType } from '@/Types/ProductInfo'
import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:4000',
})

function fetchProducts() {
  return instance.get('/products')
}

function fetchProductById(id: number) {
  return instance.get(`/products/${id}`)
}

function createCartItem({ id, name, price, imageUrl }: ProductInfoType) {
  return instance.post('/carts', {
    id,
    name,
    price,
    imageUrl,
  })
}

function fetchCarts() {
  return instance.get('/carts')
}

function deleteCart(id: string) {
  return instance.delete(`/carts/${id}`)
}

export {
  fetchProducts,
  fetchProductById,
  createCartItem,
  fetchCarts,
  deleteCart,
}
