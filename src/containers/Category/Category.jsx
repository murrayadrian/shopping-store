import styled from "styled-components"
import { v } from "styles/variables"

export const Category = () => {
    return (
      <StyledCategory>Category</StyledCategory>
    )
  }

  
const StyledCategory = styled.div`
width : ${v.contentWidth};
height: ${v.category.h};
border: 1px solid yellow;
margin: 0 auto;
text-align: center;
`