import styled from "styled-components"
import { v } from "styles/variables"
import SearchIcon from "assets/header-icon.svg";
import AccountIcon from "assets/account-icon.svg"
import ShoppingIcon from "assets/shopping-icon.svg"
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
            <div className="imageWrapper">
              <img src={AccountIcon} alt="img" />
            </div>
            <div>Account</div>
          </div>
          <div className="shopping">
            <div className="imageWrapper">
              <img src={ShoppingIcon} alt="img" />
            </div>
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
  border: 1px solid red;
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: space-between;
  img{
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