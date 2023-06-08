import { FlexContainer } from "components/Common"
import styled from "styled-components"
import { ReactComponent as Shoping } from "assets/shopping-bag.svg";
import { ReactComponent as Heart } from "assets/heart.svg";
import { ReactComponent as Search } from "assets/search.svg";

export const ToolTip = ({ name, qty }) => {
    return (
        <StyledToolTip>
            {name && qty ?
                <>
                    <div>{name}</div>
                    <div>{qty} Product</div>
                </> :
                <>
                    <FlexContainer gap={10}>
                        <Heart/>
                        <Search/>
                    </FlexContainer>
                    <FlexContainer gap={10} className="flex-hover">
                        <Shoping fill="white" />
                        <div>Shop Now</div>
                    </FlexContainer>
                </>
            }
        </StyledToolTip>
    )
}

export const StyledToolTip = styled.div`
    position: absolute;
    display: none;
    bottom: 0;
    left: 0;
    justify-content: space-between;
    background-color: black;
    color: white;
    padding: 16px 12px;
    width: 100%;
    box-sizing: border-box;
    svg{
        width:20px;
        height: 19px;
        fill:white;
    }
    .flex-hover {
        :hover {
        svg {
            fill: red;   
        }
        color: red;
        }
    }

`