import styled from "styled-components"


export const CardBottom = ({product}) => {
  return (
    <SCardBottom>
        <Title style={{}}>{product.name}</Title>
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
const Title = styled.h4`
    text-align: left;
`