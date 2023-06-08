import styled from "styled-components"
import { v } from "styles/variables"
import cate2 from "assets/category-2.jpg"
import { GridContainer } from "components/Common"
import { CardGeneric } from "components/Card"
import { ToolTip } from "components/Card/ToolTip"
import { Tag } from "components/Card/Tag"
import { StyledCardTop } from "components/Card/Card"


const product = {
  id: 1,
  image: cate2,
  name: "Joggers",
  category: "Dress",
  price: 53,
  qty: 50,
  tag: "sale"
}

export const Category = () => {
  return (
    <Container size={2} columngap={12}>
      <CardGeneric
        top={
          <StyledCardTop>
            <img src={product.image} alt="img" />
            <Tag tag={product.tag} />
            <ToolTip name={product.name} qty={product.qty} />
          </StyledCardTop>
        }
      />
      <GridContainer size={2} rowgap={12} columngap={12}>
        {[...Array(4)].map((x, i) =>
          <CardGeneric
            key={i}
            top={
              <StyledCardTop>
                <img src={product.image} alt="img" />
                <Tag tag={product.tag} />
                <ToolTip name={product.name} qty={product.qty} />
              </StyledCardTop>
            }
          />
        )}
      </GridContainer>
    </Container>
  )
}

const Container = styled(GridContainer)`
  width : ${v.contentWidth};
  height: auto;
  margin: 0 auto;
  
`