import styled from "styled-components"
import { v } from "styles/variables"
import cate2 from "assets/category-2.jpg"
import { FlexContainer, GridContainer } from "components/Common"
import { CardGeneric } from "components/Card"
import { ToolTip } from "components/Card/ToolTip"
import { Tag } from "components/Card/Tag"
import { StyledCardTop } from "components/Card/Card"


const product = {
  id: 1,
  image: cate2,
  name: "Joggers",
  category: "Dress",
  price: 53,
  qty: 50,
  tag: "sale"
}

export const Popular = () => {
  return (
    <AsideContainer>
    <h3>EXPLORE NEW AND POPULAR STYLES</h3>
    <Container justify="space-between">
      <CardGeneric
        top={
          <StyledCardTop h="100%">
            <img src={product.image} alt="img" />
            <Tag tag={product.tag} />
            <ToolTip name={product.name} qty={product.qty} />
          </StyledCardTop>
        }
        />
      <GridContainer size={2} rowgap={24} columngap={24}>
        {[...Array(4)].map((x, i) =>
          <CardGeneric
          key={i}
          top={
              <StyledCardTop w={312} h="312px" >
                <img src={product.image} alt="img" />
                <Tag tag={product.tag} />
                <ToolTip name={product.name} qty={product.qty} />
              </StyledCardTop>
            }
            />
            )}
      </GridContainer>
    </Container>
    </AsideContainer>
  )
}


const AsideContainer = styled.div`
  position:relative;
  display: block;
  h3{
    position: absolute;
    bottom:-40px;
    left: calc((100% - ${v.contentWidth})/2 - 40px);
    transform-origin: 0 0;
    transform: rotate(-90deg);
    background: #FFFFFF;
    color: black;
    font-size: 34px;
    line-height: 40px;
    font-weight: 400;
    width:648px;
    text-align: left;
  }
`
const Container = styled(FlexContainer)`
 width: ${v.contentWidth};
 height: 648px;
 margin: 0 auto;
`