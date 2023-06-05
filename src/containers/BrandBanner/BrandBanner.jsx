import styled from "styled-components"
import { v } from "styles/variables"

export const BrandBanner = () => {
    return (
      <StyledBrandBanner>BrandBanner</StyledBrandBanner>
    )
}

const StyledBrandBanner = styled.div`
width : ${v.containerWidth};
height: ${v.banner.h};
border: 1px solid black;
margin: 0 auto;
text-align: center;
`
  