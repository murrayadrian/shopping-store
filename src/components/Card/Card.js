import styled from 'styled-components'
import { StyledToolTip } from './ToolTip'
import { CardBottom } from "./CardBottom"
import { ToolTip } from "./ToolTip"
import { Tag } from './Tag'
import { FlexContainer } from 'components/Common'
import instagram from 'assets/instagram.svg'
import ns from 'assets/06.jpg'
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
    <FlexContainer direction ="column">
      <StyledCard>
        <img src={product.image} alt="img" />
        <Tag tag={product.tag} />
        <ToolTip />
      </StyledCard>
      <CardBottom product={product} />
    </FlexContainer>
  )
}
export const CardInstagram = () => {
  return (
    <SCardInstagram>
      <img src={ns} alt=""/>
      <img className="instaImg"src={instagram} alt=""/>
    </SCardInstagram>
  )
}

const SCardInstagram = styled.div`
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .instaImg{
    display: none;
    position: absolute;
    inset:0;
    margin:auto;
    width: 50px;
    height: 50px;
    z-index: 10;
  }
  &:hover .instaImg{
    display: block;
  }
`

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