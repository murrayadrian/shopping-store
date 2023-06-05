import styled from "styled-components"
import { v } from "styles/variables"

export const GridProducts = () => {
  return (
    <StyledGridProducts>GridProducts</StyledGridProducts>
  )
}

const StyledGridProducts = styled.div`
width : ${v.contentWidth};
height: ${v.grid.h};
border: 1px solid blue;
margin: 0 auto;
text-align: center;
`