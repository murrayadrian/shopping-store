import styled from "styled-components"
import { v } from "styles/variables"
import { TopFooter } from "./TopFooter"
import { BottomFooter } from "./BottomFooter"

export const Footer = () => {
    return (
      <StyledFooter>
        <TopFooter/>
        <BottomFooter/>
      </StyledFooter>
    )
}

const StyledFooter = styled.div`
  width : 100%;
  background-color: ${v.primaryBg};
  height: auto;
  margin: 0 auto;
  text-align: center;
`
  