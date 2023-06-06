import styled from "styled-components"
import { v } from "styles/variables"
import cate2 from "assets/category-2.jpg"
import { GridContainer } from "components/Common"
import { CardBanner } from "components/Card"

const product = {
  id: 1,
  image: cate2,
  name: "Joggers",
  category: "Dress",
  price: 53,
  qty: 50,
  isSale: true
}

const Container = styled(GridContainer)`
  width : ${v.contentWidth};
  height: ${v.category.h};
  margin: 0 auto;
  margin-top: 90px;
`

export const Category = () => {
  return (
    <Container size={2} columngap={24}>
      <CardBanner product={product}></CardBanner>
      <GridContainer size={2} rowgap={24} columngap={24}>
        <CardBanner product={product}></CardBanner>
        <CardBanner product={product}></CardBanner>
        <CardBanner product={product}></CardBanner>
        <CardBanner product={product}></CardBanner>
      </GridContainer>
    </Container>
  )
}


