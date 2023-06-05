import styled from "styled-components"
import { v } from "styles/variables"
import SearchIcon from "assets/header-icon.svg";
import AccountIcon from "assets/account-icon.svg"
import ShoppingIcon from "assets/shopping-icon.svg"
export const Header = () => {
  return (
    <StyledHeader>
      <div class="imageWrapper">
        <img src={SearchIcon} alt="img" />
      </div>
      <div style={{fontSize:"42px"}}>Vinh Store</div>
      <div class="right-header">
        <div className="account">
          <div class="imageWrapper">
            <img src={AccountIcon} alt="img" />
          </div>
          <div>Account</div>
        </div>
        <div className="shopping">
          <div class="imageWrapper">
            <img src={ShoppingIcon} alt="img" />
          </div>
          <div>Shopping</div>
        </div>
      </div>
    </StyledHeader>
  )
}
const StyledHeader = styled.div`
  width : ${v.contentWidth};
  height: ${v.header.h};
  border: 1px solid red;
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: space-between;
  img{
    width:20px;
    height: 19px;
  }
  line-height: ${v.header.h};
  .right-header{
    display: flex;
    gap: 24.5px;
    
    .account, .shopping {
      display: flex;
      gap: 10.5px;
    }
  }
`
