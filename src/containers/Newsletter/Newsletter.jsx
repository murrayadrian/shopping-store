import styled from "styled-components"
import { v } from "styles/variables"
import topimg from "assets/newsletter-img.jpg"

export const Newsletter = () => {
    return (
      <StyledNewsletter>
        <h2>Follow products and discounts on Instagram</h2>
        <GridContainer>
          <ProductImage>
            <img src={topimg} alt=""/>
          </ProductImage>
          <ProductImage>
            <img src={topimg} alt=""/>
          </ProductImage>
          <ProductImage>
            <img src={topimg} alt=""/>
          </ProductImage>
          <ProductImage>
            <img src={topimg} alt=""/>
          </ProductImage>
          <ProductImage>
            <img src={topimg} alt=""/>
          </ProductImage>
          <ProductImage>
            <img src={topimg} alt=""/>
          </ProductImage>
        </GridContainer>
        <h4>@vinh.official</h4>
      </StyledNewsletter>
    )
}


const StyledNewsletter = styled.div`
width : ${v.contentWidth};
height: ${v.newsletter.h};
background-color: ${v.secondaryBg};
border: 1px solid red;
margin: 0 auto;
text-align: center;
display: flex;
flex-direction: column;
`
const ProductImage = styled.div`
  img{
    width: 100%;
    height: 100%;
  }
`
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  column-gap: 20px;
`