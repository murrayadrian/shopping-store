import styled from "styled-components"
import { v } from "styles/variables"
import brandBg from "assets/banner-bg.jpg"
import zara from "assets/zara-logo.png"
import { FlexContainer } from "components/Common"
export const BrandBanner = () => {
  return (
    <StyledBrandBanner>
      <div><img src={brandBg} alt="" /></div>
      <Content direction="column" gap={20}>
        <h1 style={{color:'white'}}>ZARA</h1>
        <p style={{color:'#FF6F61', fontSize:'26px', fontWeight:400}}>Lustrous yet understated. The new evening<br/>
          wear collection exclusively offered at the<br/>
          reopened Giorgio Armani boutique in Los<br/>
          Angeles.</p>
        <button>See Collection</button>
      </Content>
    </StyledBrandBanner>
  )
}

const StyledBrandBanner = styled.div`
  width : 100%;
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
  right: 20%;
  button{
    padding: 19px 26px;
    width: 200px;
    &:hover {
      background-color: red;
    }
  }
`