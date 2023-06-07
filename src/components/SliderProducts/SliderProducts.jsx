import styled from "styled-components"
import { v } from "styles/variables"
import topimg from "assets/slider-img.jpg"
import { CardProduct } from "components/Card"
import { FlexContainer, GridContainer } from "components/Common"

const data = {
  "products": [
    {
      id: 1,
      image: topimg,
      name: "Adicolor Classics Joggers",
      category: "T-Shirt",
      price: 53,
      qty: 50,
      tag: "hot",
    },
    {
      id: 2,
      image: topimg,
      name: "Adicolor Classics Joggers",
      category: "Hoodies",
      price: 53,
      qty: 50,
      tag: "sale",
    },
    {
      id: 3,
      image: topimg,
      name: "Adicolor Classics Joggers",
      category: "Jacket",
      price: 53,
      qty: 50,
      tag: "hot",
    },
    {
      id: 4,
      image: topimg,
      name: "Adicolor Classics Joggers",
      category: "Jacket",
      price: 53,
      qty: 50,
      tag: "hot",
    },
  ]
}
const categories = [...new Set((data.products).map(item=>item.category))]

export const SliderProducts = () => {
  return (
    <StyledSliderProducts>
      <h2>Best Sellers</h2>
      <FlexContainer justify="space-between">
        <GridContainer size={4} columngap={20}>
          <div>All products</div>
          {categories.map((category, i)=>
            <Category key={i}>{category}</Category>
          )}
        </GridContainer>
        <FilterButton>
          <div className="show">Show All</div>
        </FilterButton>
      </FlexContainer>
      <GridContainer size={4} columngap={20}>
        {data.products.map((product, i) =>
          <CardProduct key={i} product={product} />
        )}
      </GridContainer>
    </StyledSliderProducts>
  )
}

const StyledSliderProducts = styled.div`
  width : ${v.contentWidth};
  height: auto;
  border: 1px solid red;
  margin: 0 auto;
  text-align: center;
  margin-top:90px;
`

const FilterButton = styled.div`
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