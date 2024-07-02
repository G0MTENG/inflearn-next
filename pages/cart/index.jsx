import React from 'react'
import { fetchCarts } from '@/api'
import styles from './index.module.css'
import ProductHeader from '@/components/ProductHeader'
import CartDetail from '@/components/cart/CartDetail'

export default function CardsPage({ carts }) {
  return (
    <div className={styles.cartsWrapper}>
      <ProductHeader title="장바구니 페이지" />
      {carts.map(ele => (
        <CartDetail productInfo={ele} style={styles.cartContainer} />
      ))}
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
