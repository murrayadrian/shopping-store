import styled from "styled-components"
import { v } from "styles/variables"
import cate2 from "assets/category-2.jpg"
import { Card, CardContainer } from "components/Card"


const Container = styled(CardContainer)`
  width : ${v.contentWidth};
  height: ${v.category.h};
  margin: 0 auto;
  margin-top: 90px;
`

export const Category = () => {
  return (
    <Container columngap={24}>
      <Card img={cate2}/>
      <CardContainer rowgap={24} columngap={24}>
        <Card img={cate2}  isSale={true}/>
        <Card img={cate2}/>
        <Card img={cate2}/>
        <Card img={cate2}/>
      </CardContainer>
    </Container>
  )
}


