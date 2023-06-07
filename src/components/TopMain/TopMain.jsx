import styled from "styled-components"
import { v } from "styles/variables"
import pic from "assets/category-1.jpg"
import { FlexContainer } from "components/Common"
import { Container } from "components/Common/Container"

export const TopMain = () => {
  return (
    <Container>
      <StyledTopMain>
        <FlexContainer justify="space-between">
          <FlexContainer direction="column" gap={10}>
            <h2>Collections</h2>
            <p>you can explore ans shop many differnt collection
              from various barands here.</p>
            <button>Shop Now</button>
          </FlexContainer>
          <div style={{ width: '424px', height: '542px' }}>
            <img src={pic} alt="" />
          </div>
        </FlexContainer>
      </StyledTopMain>
    </Container>
  )
}

const StyledTopMain = styled.div`
  width : ${v.contentWidth};
  height: auto;
  border: 1px solid green;
  margin: 0 auto;
  text-align: center;
  margin-top: 20px;
`