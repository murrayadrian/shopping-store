import styled from 'styled-components'

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(${props=>props.size}, auto);
    column-gap: ${props=>props.columngap}px;
    row-gap: ${props=>props.rowgap}px;
    margin: ${props=>props.margin};
`
