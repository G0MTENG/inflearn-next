import { ProductInfoType } from '@/Types/ProductInfo'
import Image from 'next/image'
import styles from './ProductInfo.module.css'
import { useRouter } from 'next/router'
import { createCartItem } from '@/api'

export default function ProductInfo({
  productInfo,
}: {
  productInfo: ProductInfoType
}) {
  const { name, price, imageUrl } = productInfo
  const router = useRouter()
  const handleAddCart = async () => {
    // 1. 장바구니에 아이템을 담는 API 함수 호출
    const res = await createCartItem(productInfo)
    alert(`${res.data.name}이(가) 장바구니에 추가됨`)
    // 2. 장바구니 페이지로 이동
    router.push('/cart')
  }

  return (
    <div className={styles.container}>
      <Image src={imageUrl} alt="상세 이미지" width={300} height={250}></Image>
      <div>Name: {name}</div>
      <div>Price: {price}</div>

      <button onClick={handleAddCart}>장바구니 담기</button>
    </div>
  )
}
