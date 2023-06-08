import styled from "styled-components"
import { v } from "styles/variables"
import topimg from "assets/top-img.jpg"
import {GridContainer } from "components/Common"
import { CardGeneric } from "components/Card"
import { Tag } from "components/Card/Tag"
import { ToolTip } from "components/Card/ToolTip"
import { CardBottom } from "components/Card/CardBottom"
import { FilterMenu } from "components/FilterMenu"


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
      <FilterMenu categories={['T-shirt','Hoodies','Jacket']} title='Filter'/>

      <GridContainer size={4} columngap={20} rowgap={30}>
        {[...Array(8)].map((x,i) =>
          <CardGeneric
            key={i}
            top={
              <>
                <img src={product.image} alt="img" />
                <Tag tag={product.tag} />
                <ToolTip/>
              </>
            }
            bottom={<CardBottom product={product}/>}
          />
        )}
      </GridContainer>
    </StyledGridProducts>
  )
}

const StyledGridProducts = styled.div`
  width : ${v.contentWidth};
  height: auto;
  margin: 0 auto;
  text-align: center;
  padding: 100px 0px;
`