import styled from "styled-components"
import { v } from "styles/variables"
import { GridContainer } from "components/Common"
import { CardInstagram } from "components/Card/Card"
import { Container } from "components/Common/Container"

export const Newsletter = () => {
  return (
    <Container>
      <StyledNewsletter>
        <h2>Follow products and discounts on Instagram</h2>
        <GridContainer size={6} columngap={20} margin='40px 0px'>
          {[...Array(6)].map((item, i) =>
            <CardInstagram key={i} />
          )}
        </GridContainer>
        <h4 style={{color:'red', fontSize:'24px'}}>@vinh.official</h4>
      </StyledNewsletter>
    </Container>
  )
}


const StyledNewsletter = styled.div`
  width : ${v.contentWidth};
  height: auto;
  background-color: ${v.secondaryBg};
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 100px 0px;
`