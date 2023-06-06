import React from 'react'
import styled from 'styled-components'

const Status = styled.div`
  position: absolute;
  top: 20px;
  left: 0;
  button {
    background-color: black;
    color: white;
    padding: 2px 8px;
  }
`
const Popup = styled.div`
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
const ImageWrapper = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  position: relative;
  background-image: url(${props=>props.img});
  background-size: cover;
  background-repeat: no-repeat;
  &:hover ${Popup} {
    display: flex;
  }
`
export const Card = ({ width, height, img, isSale }) => {
  return (
      <ImageWrapper width={width} height={height} img={img}>
        <Status>
          {isSale && <button>SALE</button>}
        </Status>
        <Popup>
          <div>Pant</div>
          <div>200 Product</div>
        </Popup>
      </ImageWrapper>
  )
}