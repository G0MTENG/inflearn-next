import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './ProductList.module.css'
import Link from 'next/link'
import { fetchProducts } from '@/api'

interface ProductType {
  id: string
  name: string
  price: string
  imageUrl: string
}

export default function ProductList() {
  const [products, setProducts] = useState<ProductType[]>()

  useEffect(() => {
    fetchProducts().then(res => {
      setProducts(res.data)
    })
  }, [])

  return (
    <ol>
      {products &&
        products.map(product => {
          return (
            <li key={product.id} className={styles.item}>
              <Link href={`/products/${product.id}`}>
                <div>
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={300}
                    height={250}
                  ></Image>
                </div>
                <div>{product.name}</div>
                <div>{product.price}</div>
              </Link>
            </li>
          )
        })}
    </ol>
  )
}
