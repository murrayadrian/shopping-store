import styled from "styled-components"
import { v } from "styles/variables"

export const SliderProducts = () => {
    return (
      <StyledSliderProducts>SliderProducts</StyledSliderProducts>
    )
}

const StyledSliderProducts = styled.div`
width : ${v.contentWidth};
height: ${v.slider.h};
border: 1px solid red;
margin: 0 auto;
text-align: center;
`