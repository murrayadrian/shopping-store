import styled from "styled-components"
import { v } from "styles/variables"
import iconpayment from "assets/icons_payment.jpg"
import { FlexContainer, GridContainer } from "components/Common"
import {ReactComponent as ArrowUp} from "assets/arrow-upward.svg"

export const BottomFooter = () => {
  return (
    <div style={{ width: '100%', background: 'black' }}>
      <StyledBottomFooter>
        <h4>© 2023 VINH , Inc.</h4>
        <GridContainer size={4} columngap={20}>
          <img src={iconpayment} alt="img" />
        </GridContainer>
        <FlexContainer gap={10}>
          <div style={{cursor:'pointer'}}>Send To Top</div>
          <ArrowUp style={{width:'20px',height:'20px', fill:"white",cursor:'pointer'}}/>
        </FlexContainer>
      </StyledBottomFooter>
    </div>
  )
}


const StyledBottomFooter = styled.div`
  width : ${v.contentWidth};
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: space-between;
  color: white;
`