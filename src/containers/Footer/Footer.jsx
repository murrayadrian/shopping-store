import styled from "styled-components"
import { v } from "styles/variables"

export const Footer = () => {
    return (
      <StyledFooter>Footer</StyledFooter>
    )
}

const StyledFooter = styled.div`
width : ${v.containerWidth};
height: ${v.footer.h};
border: 1px solid red;
margin: 0 auto;
text-align: center;
`
  