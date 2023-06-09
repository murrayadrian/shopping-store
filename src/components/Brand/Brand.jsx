import styled from "styled-components"
import { v } from "styles/variables"
import logo1 from "assets/brand-1.jpg"
import logo2 from "assets/brand-2.jpg"
import logo3 from "assets/brand-3.jpg"
import logo4 from "assets/brand-4.jpg"
import logo5 from "assets/brand-5.jpg"
export const Brand = () => {
    return (
      <StyledBrand>
        <img src={logo1} alt=""/>
        <img src={logo2} alt=""/>
        <img src={logo3} alt=""/>
        <img src={logo4} alt=""/>
        <img src={logo5} alt=""/>
      </StyledBrand>
    )
}

const StyledBrand = styled.div`
  width : ${v.contentWidth};
  height: auto;
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: space-between;
  padding: 100px 0px;
  img{
    width: 200px;
    height: 70px
  }
`