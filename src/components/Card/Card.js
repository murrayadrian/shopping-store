import styled from 'styled-components'
import { StyledPopup } from './Popup'
import { CardBottom } from "./CardBottom"
import { SaleStatus } from "./SaleStatus"
import { Popup } from "./Popup"


export const CardBanner = ({ product }) => {
  return (
    <StyledCard>
      <img src={product.image} alt="img" />
      <SaleStatus isSale={product.isSale} />
      <Popup name={product.name} qty={product.qty} />
    </StyledCard>
  )
}

export const CardProduct = ({ product }) => {
  return (
    <SCardProduct>
      <StyledCard>
        <img src={product.image} alt="img" />
        <SaleStatus isSale={product.isSale} />
        <Popup />
      </StyledCard>
      <CardBottom product={product} />
    </SCardProduct>
  )
}

const StyledCard = styled.div`
  position: relative;
  &:hover ${StyledPopup} {
    display: flex;
  }
  img {
    width: 100%;
    height: 100%;
  }
`
const SCardProduct = styled.div`
  display: flex;
  flex-direction: column;
`