import { FlexContainer, GridContainer } from "components/Common"
import styled from "styled-components"

export const FilterMenu = ({categories, title}) => {
    return (
        <>
            <FlexContainer justify="space-between">
                <GridContainer size={4} columngap={20}>
                    <div>All products</div>
                    {categories.map((category, i) =>
                        <Category key={i}>{category}</Category>
                    )}
                </GridContainer>
                <ActionButton>{title}</ActionButton>
            </FlexContainer>
        </>
    )
}

const ActionButton = styled.div`
  color:white;
  background-color: black;
  background-clip: border-box;
  padding: 8px 12px;
    :hover {
      color:white;
      background: red;
    }
`
const Category = styled.div`
  :hover{
    color:red
  }
`