import styled from "styled-components"
import { v } from "styles/variables"
import icon from "assets/filter-icon.svg"
import topimg from "assets/top-img.jpg"
export const GridProducts = () => {
  return (
    <StyledGridProducts>
      <h2>Or subscribe to the newsletter</h2>
      <FilterWrapper>
        <GridContainer>
          <div>All products</div>
          <div>T-shirt</div>
          <div>Hoodies</div>
          <div>Jacket</div>
        </GridContainer>
        <FilterButton>
          <img src={icon} alt="img"/>
          <div>Filter</div>
        </FilterButton>
      </FilterWrapper>
      <GridContainer>
        <Card>
          <TopProduct>
            <img src={topimg} alt=""/>
          </TopProduct>
          <Title>Adicolor Classics Joggers</Title>
          <BottomProduct>
              <p>Dress</p>
              <p>$53.85</p>
          </BottomProduct>
        </Card>
        <Card>
          <TopProduct>
            <img src={topimg} alt=""/>
          </TopProduct>
          <Title>Adicolor Classics Joggers</Title>
          <BottomProduct>
              <p>Dress</p>
              <p>$53.85</p>
          </BottomProduct>
        </Card>
        <Card>
          <TopProduct>
            <img src={topimg} alt=""/>
          </TopProduct>
          <Title>Adicolor Classics Joggers</Title>
          <BottomProduct>
              <p>Dress</p>
              <p>$53.85</p>
          </BottomProduct>
        </Card>
        <Card>
          <TopProduct>
            <img src={topimg} alt=""/>
          </TopProduct>
          <Title>Adicolor Classics Joggers</Title>
          <BottomProduct>
              <p>Dress</p>
              <p>$53.85</p>
          </BottomProduct>
        </Card>
        <Card>
          <TopProduct>
            <img src={topimg} alt=""/>
          </TopProduct>
          <Title>Adicolor Classics Joggers</Title>
          <BottomProduct>
              <p>Dress</p>
              <p>$53.85</p>
          </BottomProduct>
        </Card>
        <Card>
          <TopProduct>
            <img src={topimg} alt=""/>
          </TopProduct>
          <Title>Adicolor Classics Joggers</Title>
          <BottomProduct>
              <p>Dress</p>
              <p>$53.85</p>
          </BottomProduct>
        </Card>
        <Card>
          <TopProduct>
            <img src={topimg} alt=""/>
          </TopProduct>
          <Title>Adicolor Classics Joggers</Title>
          <BottomProduct>
              <p>Dress</p>
              <p>$53.85</p>
          </BottomProduct>
        </Card>
        <Card>
          <TopProduct>
            <img src={topimg} alt=""/>
          </TopProduct>
          <Title>Adicolor Classics Joggers</Title>
          <BottomProduct>
              <p>Dress</p>
              <p>$53.85</p>
          </BottomProduct>
        </Card>
       
      </GridContainer>
    </StyledGridProducts>
  )
}

const StyledGridProducts = styled.div`
width : ${v.contentWidth};
height: ${v.grid.h};
border: 1px solid blue;
margin: 0 auto;
text-align: center;
`
const FilterWrapper = styled.div`
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
const Card = styled.div`
  display: flex;
  flex-direction: column;
`
const TopProduct = styled.div`
  img{
    width: 100%;
    height: 100%;
  }
`
const BottomProduct = styled.div`
  display: flex;
  justify-content: space-between;
`
const Title = styled.h4`
  text-align: left;
`