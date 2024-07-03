export default function CartInfo({
  totalPrice,
  totalNum,
}: {
  totalPrice: number
  totalNum: number
}) {
  return (
    <>
      <div>총 가격: {totalPrice}</div>
      <div>총 수량: {totalNum}</div>
    </>
  )
}
