import { fetchProductById } from '@/api'
import ProductHeader from '@/components/ProductHeader'
import ProductInfo from '@/components/product-detail/ProductInfo'
import { ProductInfoType } from '@/Types/ProductInfo'

export default function ProductDetailPage({
  productInfo,
  error,
}: ProductPageProps) {
  if (error) return <div>{error}</div>

  if (productInfo) {
    return (
      <>
        <ProductHeader title="상세 정보 페이지" />
        <ProductInfo productInfo={productInfo}></ProductInfo>
      </>
    )
  }
}
export async function getServerSideProps(context: productContextType) {
  const id = +context.params.id
  if (isNaN(id)) {
    return { props: { error: 'bad excess' } }
  }

  const { data } = await fetchProductById(id)
  return {
    props: {
      productInfo: data,
    },
  }
}

interface ProductPageProps {
  productInfo?: ProductInfoType
  error?: string
}

interface productContextType {
  params: {
    id: string
  }
}
