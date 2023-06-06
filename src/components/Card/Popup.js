import styled from "styled-components"

export const Popup = ({ name, qty }) => {
    return (
        <StyledPopup>
            {name && qty ?
                <>
                    <div>{name}</div>
                    <div>{qty} Product</div>
                </> :
                <>
                    <div>icon</div>
                    <div>shop now</div>
                </>
            }
        </StyledPopup>
    )
}

export const StyledPopup = styled.div`
    position: absolute;
    display: none;
    bottom: 0;
    left: 0;
    justify-content: space-between;
    background-color: black;
    color: white;
    padding: 16px 12px;
    width: 100%;
`