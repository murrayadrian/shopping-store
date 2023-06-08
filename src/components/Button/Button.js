import { FlexContainer } from "components/Common";
import styled from "styled-components";

export const LinkButton = ({ icon, text }) => {
    return (
        <>
            {icon && text ?
                <ButtonContainer>
                    {icon}
                    <div>{text}</div>
                </ButtonContainer> :
                <ButtonContainer>
                    <div>{text}</div>
                </ButtonContainer>
            }
        </>
    )
}

const ButtonContainer = styled(FlexContainer)`
  align-items: center;
  justify-content: center;
  color: #FF6F61;
  font-weight: 600;
  font-size: 24px;  
  line-height: 28px;
  svg {
    margin-right: 14.5px;
    width: 30px;
    height: 30px;
    fill: #FF6F61;
  }
`