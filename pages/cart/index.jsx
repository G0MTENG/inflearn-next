import React from 'react'
import { fetchCarts } from '@/api'
import styles from './index.module.css'
import ProductHeader from '@/components/ProductHeader'
import CartDetail from '@/components/cart/CartDetail'
import CartInfo from '@/components/cart/CartInfo'

export default function CardsPage({ carts }) {
  let totalPrice = carts.reduce((acc, cur) => acc + +cur.price, 0)
  return (
    <div className={styles.cartsWrapper}>
      <ProductHeader title="장바구니 페이지" />
      {carts.map(ele => (
        <CartDetail
          key={ele.id}
          productInfo={ele}
          style={styles.cartContainer}
        />
      ))}
      <CartInfo totalPrice={totalPrice} totalNum={carts.length}></CartInfo>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetchCarts()
  return {
    props: {
      carts: res.data,
    },
  }
}
