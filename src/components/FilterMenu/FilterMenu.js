import { FlexContainer, GridContainer } from "components/Common"
import styled from "styled-components"

export const FilterMenu = ({categories, title}) => {
    return (
        <>
            <MenuContainer justify="space-between">
                <GridContainer size={4} columngap={20}>
                    <div>All products</div>
                    {categories.map((category, i) =>
                        <Category key={i}>{category}</Category>
                    )}
                </GridContainer>
                <ActionButton>{title}</ActionButton>
            </MenuContainer>
        </>
    )
}

const MenuContainer = styled(FlexContainer)`
  align-items: center;
  margin-bottom: 10px;
`
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