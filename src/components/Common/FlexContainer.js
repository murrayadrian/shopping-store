import styled from "styled-components";

export const FlexContainer=styled.div`
    display: flex;
    flex-direction: ${props=>props.direction ||"row"};
    justify-content: ${props=>props.justify};
    gap: ${props=>props.gap}px
`