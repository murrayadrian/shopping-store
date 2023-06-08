import styled from "styled-components"

export const Circle = ({radius, thick, children}) => {
  return (
    <StyledCircle radius={radius} thick={thick}>Circle</StyledCircle>
  )
}

const StyledCircle = styled.div`
  width: ${props=>props.radius};
  height: ${props=>props.radius};
  border-radius: 50%;
  border : ${props=> props.thick ? `1px solid ${props.thick}` : "none"};
`