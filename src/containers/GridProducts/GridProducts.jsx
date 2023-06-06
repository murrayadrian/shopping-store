import styled from "styled-components"
import { v } from "styles/variables"
import icon from "assets/filter-icon.svg"
import topimg from "assets/top-img.jpg"
import { GridContainer } from "components/Common"
import { CardProduct } from "components/Card"


const product = {
  id: 1,
  image: topimg,
  name: "Adicolor Classics Joggers",
  category: "Dress",
  price: 53,
  qty: 50,
  tag: "hot"
}


export const GridProducts = () => {
  return (
    <StyledGridProducts>
      <h2>Or subscribe to the newsletter</h2>
      <FilterWrapper>
        <GridContainer size={4} columngap={20} rowgap={30}>
          <div>All products</div>
          <div>T-shirt</div>
          <div>Hoodies</div>
          <div>Jacket</div>
        </GridContainer>
        <FilterButton>
          <img src={icon} alt="img" />
          <div>Filter</div>
        </FilterButton>
      </FilterWrapper>

      <GridContainer size={4} columngap={20} rowgap={30}>
        {[...Array(8)].map((x,i) =>
          <CardProduct product={product} key={i}/>
        )}
      </GridContainer>
    </StyledGridProducts>
  )
}

const StyledGridProducts = styled.div`
width : ${v.contentWidth};
height: auto;
border: 1px solid blue;
margin: 0 auto;
text-align: center;
margin-bottom: 90px;
`
const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const FilterButton = styled.div`
  display: flex;
  justify-content: center;
  background: black;
  color:white;
  align-items: center;
`