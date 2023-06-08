import styled from "styled-components"
import { v } from "styles/variables"
import pic from "assets/category-1.jpg"
import { FlexContainer, GridContainer } from "components/Common"
import { Container } from "components/Common/Container"
import { ReactComponent as Shoping } from "assets/shopping-icon.svg";

export const TopMain = () => {
  return (
    <Container>
      <StyledTopMain>
        <GridContainer size={2}>
          <FlexContainer direction="column" gap={30} align="center">
            <h2 style={{ fontSize: '50px' }}>Collections</h2>
            <p>You can explore ans shop many differnt collection
              from various barands here.</p>
            <ButtonContainer justify='center'gap={10} bg="black">
              <Shoping fill="white" />
              <div>Shop Now</div>
            </ButtonContainer>
          </FlexContainer>
          <ImageContainer>
            <img src={pic} alt="" />
          </ImageContainer>
        </GridContainer>
      </StyledTopMain>
    </Container>
  )
}

const StyledTopMain = styled.div`
  width : ${v.contentWidth};
  height: auto;
  margin: 0 auto;
  padding: 100px 0px;
`
const ButtonContainer = styled(FlexContainer)`
  align-items: center;
  padding: 8px 12px;
  width: 150px;
  color:white;
  :hover{
    background-color: red;
  }
`
const ImageContainer = styled(FlexContainer)`
  align-self: center;
  width: 300px;
  height: 300px;
`