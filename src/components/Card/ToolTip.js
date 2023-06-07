import { FlexContainer } from "components/Common"
import styled from "styled-components"
import { ReactComponent as Shoping } from "assets/shopping-icon.svg";

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
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" id="heart"><path d="M349.6 64c-36.4 0-70.718 16.742-93.6 43.947C233.117 80.742 198.8 64 162.4 64 97.918 64 48 114.221 48 179.095c0 79.516 70.718 143.348 177.836 241.694L256 448l30.164-27.211C393.281 322.442 464 258.61 464 179.095 464 114.221 414.082 64 349.6 64zm-80.764 329.257l-4.219 3.873-8.617 7.773-8.616-7.772-4.214-3.869c-50.418-46.282-93.961-86.254-122.746-121.994C92.467 236.555 80 208.128 80 179.095c0-22.865 8.422-43.931 23.715-59.316C118.957 104.445 139.798 96 162.4 96c26.134 0 51.97 12.167 69.11 32.545L256 157.661l24.489-29.116C297.63 108.167 323.465 96 349.6 96c22.603 0 43.443 8.445 58.686 23.778C423.578 135.164 432 156.229 432 179.095c0 29.033-12.467 57.459-40.422 92.171-28.784 35.74-72.325 75.709-122.742 121.991z" fill="white"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" id="search"><g data-name="Layer 2"><path d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" data-name="search" fill="white"></path></g></svg>
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
    .flex-hover {
        :hover {
        svg {
            fill: red;   
        }
        color: red;
        }
    }

`