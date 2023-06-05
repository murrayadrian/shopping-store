import styled from "styled-components"
import { v } from "styles/variables"

export const Newsletter = () => {
    return (
      <StyledNewsletter>Newsletter</StyledNewsletter>
    )
}


const StyledNewsletter = styled.div`
width : ${v.containerWidth};
height: ${v.newsletter.h};
background-color: ${v.secondaryBg};
border: 1px solid red;
margin: 0 auto;
text-align: center;
`
  