import { ProductInfoType } from '@/Types/ProductInfo'
import { deleteCart } from '@/api'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function CartDetail({
  productInfo,
  style,
}: {
  productInfo: ProductInfoType
  style: any
}) {
  const router = useRouter()
  const { id, name, price, imageUrl } = productInfo
  const handleRemove = async (did: string) => {
    const res = await deleteCart(did)
    if (res.status === 200) {
      alert(`${res.data.name} 삭제가 되었습니다.`)
      // UI 갱신
      router.replace(router.asPath)
    }
  }

  return (
    <div>
      <div key={id} className={style}>
        <Image src={imageUrl} alt={name} width={150} height={120}></Image>
        <div>name: {name}</div>
        <div>price: {price}</div>
        <button onClick={() => handleRemove(id)}>삭제하기</button>
      </div>
    </div>
  )
}
