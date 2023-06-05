import styled from "styled-components"
import { v } from "styles/variables"
export const Header = () => {
  return (
    <StyledHeader>Header</StyledHeader>
  )
}
const StyledHeader = styled.div`
  width : ${v.contentWidth};
  height: ${v.header.h};
  border: 1px solid red;
  margin: 0 auto;
  text-align: center;
`
