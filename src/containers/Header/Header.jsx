import styled from "styled-components"
import { v } from "styles/variables"
import SearchIcon from "assets/header-icon.svg";
import { ReactComponent as Account } from "assets/account.svg"
import { ReactComponent as ShoppingBag } from "assets/shopping-bag.svg"
import { Container } from "components/Common/Container";
export const Header = () => {
  return (
    <Container>
      <StyledHeader>
        <div className="imageWrapper">
          <img src={SearchIcon} alt="img" />
        </div>
        <div style={{ fontSize: "42px" }}>Vinh Store</div>
        <div className="right-header">
          <div className="account">
            <div><Account/></div>
            <div>Account</div>
          </div>
          <div className="shopping"> 
            <div><ShoppingBag/></div>
            <div>Shopping</div>
          </div>
        </div>
      </StyledHeader>
    </Container>
  )
}
const StyledHeader = styled.div`
  width : ${v.contentWidth};
  height: auto;
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: space-between;
  svg{
    width:20px;
    height: 19px;
  }
  line-height: 59px;
  .right-header{
    display: flex;
    gap: 24.5px;
    
    .account, .shopping {
      display: flex;
      gap: 10.5px;
    }
  }
`