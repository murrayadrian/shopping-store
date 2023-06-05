import styled from "styled-components"
import { v } from "styles/variables"
import Category2 from "assets/category-2.jpg"
export const Category = () => {
  return (
    <StyledCategory>
      <GridItem>
        <img src={Category2} alt=""/>
      </GridItem>
      <GridContainer>
        <GridItem>
          <img src={Category2} alt=""/>
        </GridItem>
        <GridItem>
        <img src={Category2} alt=""/>
        </GridItem>
        <GridItem>
        <img src={Category2} alt=""/>
        </GridItem>
        <GridItem>
        <img src={Category2} alt=""/>
        </GridItem>
      </GridContainer>
    </StyledCategory>
  )
}


const StyledCategory = styled.div`
  width : ${v.contentWidth};
  height: ${v.category.h};
  margin: 0 auto;
  text-align: center;
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 10px;
  margin-top: 90px;
`
const GridItem = styled.div`
  img{
    width: 100%;
    height: 100%;
  }
  border: 1px solid red;
`
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 10px;
  row-gap: 10px;
`