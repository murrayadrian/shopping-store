import styled from "styled-components"
import { v } from "styles/variables"
import pic from "assets/category-1.jpg"
export const TopMain = () => {
  return (
    <StyledTopMain>
      <Product>
        <Content>
          <h2>Collections</h2>
          <p>you can explore ans shop many differnt collection
            from various barands here.</p>
          <button>Shop Now</button>
        </Content>
        <ImageProduct>
          <img src={pic} alt=""/>
        </ImageProduct>
      </Product>
    </StyledTopMain>
  )
}

const StyledTopMain = styled.div`
  width : ${v.contentWidth};
  height: ${v.topmain.h};
  border: 1px solid green;
  margin: 0 auto;
  text-align: center;
  margin-top: 90px;
`
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const ImageProduct = styled.div`
  img{
    width:424px;
    height: 542px;
  }
`