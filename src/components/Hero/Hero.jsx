import styled from "styled-components"
import { v } from "styles/variables"
import pic from "assets/category-1.jpg"
import { FlexContainer, GridContainer } from "components/Common"
import { Container } from "components/Common/Container"
import { ReactComponent as Shopping } from "assets/shopping-icon.svg";

export const Hero = () => {
  return (
    <Container>
      <StyledHero>
        <GridContainer size={2}>
          <FlexContainer direction="column" gap={30} align="center">
            <Title>Collections</Title>
            <p style={{fontWeight: 400,fontSize: '30px'}}>You Can Explore Ans Shop Many Differnt Collection<br/>
              From Various Barands Here.</p>
            <ButtonContainer justify='center'gap={10} bg="black">
              <Shopping fill="white" />
              <div style={{fontWeight:400, fontSize:'29px'}}>Shop Now</div>
            </ButtonContainer>
          </FlexContainer>
          <ImageContainer/>
        </GridContainer>
      </StyledHero>
    </Container>
  )
}

const StyledHero = styled.div`
  width : ${v.contentWidth};
  height: auto;
  margin: 0 auto;
  padding: 100px 0px;
`
const ButtonContainer = styled(FlexContainer)`
  align-items: center;
  padding: 19px 26px;
  width: 223px;
  color:white;
  :hover{
    background-color: red;
  }
`
const ImageContainer = styled.div`
  width: 424px;
  height: 542px;
  background-image: url(${pic});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 100px 0px 100px 0px;
  position:relative;
  :after {
    content:"";
    position:absolute;
    top: 20px;
    right: -20px;
    width: 424px;
    height: 542px;
    border: 2px solid black;
    border-radius: 100px 0px 100px 0px;
  }
`
const Title = styled.h2`
  font-size: 74px;
  font-weight: 300;
`