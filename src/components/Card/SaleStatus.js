import styled from 'styled-components'

export const SaleStatus = ({isSale}) => {
  return (
    <SSaleStatus>
        {isSale && <button>SALE</button>}
    </SSaleStatus>
  )
}

const SSaleStatus = styled.div`
  position: absolute;
  top: 20px;
  left: 0;
  button {
    background-color: black;
    color: white;
    padding: 2px 8px;
  }
`
