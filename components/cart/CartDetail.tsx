import { ProductInfoType } from '@/Types/ProductInfo'
import Image from 'next/image'

export default function CartDetail({
  productInfo,
  style,
}: {
  productInfo: ProductInfoType
  style: any
}) {
  const { id, name, price, imageUrl } = productInfo
  return (
    <div>
      <div key={id} className={style}>
        <Image src={imageUrl} alt={name} width={150} height={120}></Image>
        <div>name: {name}</div>
        <div>price: {price}</div>
      </div>
    </div>
  )
}
