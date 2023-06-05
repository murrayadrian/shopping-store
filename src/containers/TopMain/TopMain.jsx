import styled from "styled-components"
import { v } from "styles/variables"

export const TopMain = () => {
    return (
      <StyledTopMain>TopMain</StyledTopMain>
    )
}

const StyledTopMain = styled.div`
  width : ${v.containerWidth};
  height: ${v.topmain.h};
  border: 1px solid green;
  margin: 0 auto;
  text-align: center;
`

  