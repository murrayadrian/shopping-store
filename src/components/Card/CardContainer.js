import styled from 'styled-components'

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    column-gap: ${props=>props.columngap}px;
    row-gap: ${props=>props.rowgap}px;
`
