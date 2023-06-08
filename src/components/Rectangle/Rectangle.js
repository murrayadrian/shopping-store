import styled from "styled-components"

export const Rectangle = ({w, h, br, bg}) => {
  return (
    <StyledRectangle>Rectangle</StyledRectangle>
  )
}


const StyledRectangle = styled.div`
    width: ${props=>props.w};
    height: ${props=>props.h};
    border-radius: ${props=>props.br};
    background-color: ${props=>props.secondary ? "#EEEEEE" : "#FFFFFF" };
`