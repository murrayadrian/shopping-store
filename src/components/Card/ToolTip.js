import styled from "styled-components"

export const ToolTip = ({ name, qty }) => {
    return (
        <StyledToolTip>
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
`