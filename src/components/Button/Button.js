import styled from "styled-components";

const StyledButton = styled.button`
    width: ${props=>props.width};
    height: ${props=>props.height};
    background: ${props=>props.background};
    gap: ${props=>props.gap};
    padding: ${props=>props.padding};
`

export const Button = ({width, height, background, gap, padding, children}) => {
    return <StyledButton
        width={width}
        height={height}
        background={background}
        gap={gap}
        padding={padding}>
            {children}
        </StyledButton>
}