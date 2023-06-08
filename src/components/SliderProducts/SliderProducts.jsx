import styled from "styled-components"
import { v } from "styles/variables"
import topimg from "assets/slider-img.jpg"
import { CardGeneric } from "components/Card"
import { GridContainer } from "components/Common"
import { CardBottom } from "components/Card/CardBottom"
import { Tag } from "components/Card/Tag"
import { ToolTip } from "components/Card/ToolTip"
import { FilterMenu } from "components/FilterMenu"

const product = {
  id: 1,
  image: topimg,
  name: "Joggers",
  category: "T-Shirt",
  price: 53,
  qty: 50,
  tag: "hot",
}

export const SliderProducts = () => {
  return (
    <StyledSliderProducts>
      <h2>Best Sellers</h2>
      <FilterMenu categories={['T-shirt', 'Hoodies', 'Jacket']} title='Show All' />
      <GridContainer size={4} columngap={20}>
        {[...Array(4)].map((x, i) =>
          <CardGeneric
            key={i}
            top={
              <>
                <img src={product.image} alt="img" />
                <Tag tag={product.tag} />
                <ToolTip />
              </>
            }
            bottom={<CardBottom product={product} />}
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

