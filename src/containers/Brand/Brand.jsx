import styled from "styled-components"
import { v } from "styles/variables"

export const Brand = () => {
    return (
      <StyledBrand>Brand</StyledBrand>
    )
}

const StyledBrand = styled.div`
  width : ${v.contentWidth};
  height: ${v.brand.h};
  border: 1px solid red;
  margin: 0 auto;
  text-align: center;
`