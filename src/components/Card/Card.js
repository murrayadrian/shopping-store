import styled from 'styled-components'
import { StyledToolTip } from './ToolTip'
import { CardBottom } from "./CardBottom"
import { ToolTip } from "./ToolTip"
import { Tag } from './Tag'


export const CardBanner = ({ product }) => {
  return (
    <StyledCard>
      <img src={product.image} alt="img" />
      <Tag tag={product.tag} />
      <ToolTip name={product.name} qty={product.qty} />
    </StyledCard>
  )
}

export const CardProduct = ({ product }) => {
  return (
    <SCardProduct>
      <StyledCard>
        <img src={product.image} alt="img" />
        <Tag tag={product.tag} />
        <ToolTip />
      </StyledCard>
      <CardBottom product={product} />
    </SCardProduct>
  )
}

const StyledCard = styled.div`
  position: relative;
  &:hover ${StyledToolTip} {
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