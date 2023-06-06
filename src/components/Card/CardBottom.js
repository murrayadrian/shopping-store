import styled from "styled-components"


export const CardBottom = ({product}) => {
  return (
    <SCardBottom>
        <h4 style={{textAlign:'left'}}>{product.name}</h4>
        <ProductInfo>
            <p>{product.category}</p>
            <p>${product.price}</p>
        </ProductInfo>
    </SCardBottom>
  )
}
const SCardBottom = styled.div`
    display: flex;
    flex-direction: column;
`
const ProductInfo = styled.div`
    display: flex;
    justify-content: space-between;
`