import styled from "styled-components"
import { v } from "styles/variables"
import brandBg from "assets/banner-bg.jpg"
import { FlexContainer } from "components/Common"
export const BrandBanner = () => {
  return (
    <StyledBrandBanner>
      <img src={brandBg} alt="" />
      <Content direction="column" gap={20}>
        <h1 style={{color:'white'}}>ZARA</h1>
        <p style={{color:'red'}}>Lustrous yet understated. The new evening
          wear collection exclusively offered at the
          reopened Giorgio Armani boutique in Los
          Angeles.</p>
        <button>See Collection</button>
      </Content>
    </StyledBrandBanner>
  )
}

const StyledBrandBanner = styled.div`
  width : ${v.containerWidth};
  position: relative;
  height: 100%;
  margin: 0 auto;
  text-align: left;
  img {
    width: 100%;
    height: 100%;
  }
`
const Content = styled(FlexContainer)`
  position: absolute;
  top:250px;
  right:100px;
  button{
    padding: 19px 26px;
    width: 200px;
    &:hover {
      background-color: red;
    }
  }
`