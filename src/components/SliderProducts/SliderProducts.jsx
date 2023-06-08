import styled from "styled-components"
import { v } from "styles/variables"
import topimg from "assets/slider-img.jpg"
import { CardGeneric } from "components/Card"
import { GridContainer } from "components/Common"
import { CardBottom } from "components/Card/CardBottom"
import { Tag } from "components/Card/Tag"
import { ToolTip } from "components/Card/ToolTip"
import { FilterMenu } from "components/FilterMenu"

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
      tag: "hot",
    },
    {
      id: 3,
      image: topimg,
      name: "Adicolor Classics Joggers",
      category: "Jacket",
      price: 53,
      qty: 50,
      tag: "sale",
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
const categories = [...new Set((data.products).map(item => item.category))]

export const SliderProducts = () => {
  return (
    <StyledSliderProducts>
      <h2>Best Sellers</h2>
      <FilterMenu categories={categories} title='Show All'/>
      <GridContainer size={4} columngap={0}>
        {(data.products).map((product, i) =>
          <CardGeneric
            key={i}
            top={
              <>
                <img src={product.image} alt="img" />
                <Tag tag={product.tag} />
                <ToolTip name={product.name} qty={product.qty} />
              </>
            }
            bottom={<CardBottom product={product}/>}
          />
        )}
      </GridContainer>
    </StyledSliderProducts>
  )
}

const StyledSliderProducts = styled.div`
  width : ${v.contentWidth};
  height: auto;
  margin: 0 auto;
  text-align: center;
  padding: 100px 0px;
`

