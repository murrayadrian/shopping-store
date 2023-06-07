import { FlexContainer } from "components/Common"
import styled from "styled-components"


export const CardBottom = ({product}) => {
  return (
    <FlexContainer direction="column">
        <Title>{product.name}</Title>
        <FlexContainer justify="space-between">
            <p>{product.category}</p>
            <p>${product.price}</p>
        </FlexContainer>
    </FlexContainer>
  )
}

const Title = styled.h4`
    text-align: left;
`