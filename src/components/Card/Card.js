import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 10px;
  row-gap: 10px;
`

export const Card = ({children}) => {
  return (
    <StyledCard>{children}</StyledCard>
  )
}
