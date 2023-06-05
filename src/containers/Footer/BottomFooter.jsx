import styled from "styled-components"
import { v } from "styles/variables"
import icon from "assets/filter-icon.svg"
import iconpayment from "assets/icons_payment.jpg"
export const BottomFooter = () => {
  return (
    <StyledBottomFooter>
      <h4>© 2023 VINH , Inc.</h4>
      <GridContainer>
        <img src={iconpayment} alt="img" />
      </GridContainer>
      <FilterButton>
        <div>Send To Top</div>
        <img src={icon} alt="img" />
      </FilterButton>
    </StyledBottomFooter>
  )
}


const StyledBottomFooter = styled.div`
  width : ${v.contentWidth};
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: space-between;
  `
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  column-gap: 20px;
`
const FilterButton = styled.div`
  display: flex;
  justify-content: center;
  background: black;
  color:white;
  align-items: center;
`