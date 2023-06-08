import styled from 'styled-components'
import { StyledToolTip } from './ToolTip'
import { FlexContainer } from 'components/Common'
import instagram from 'assets/instagram.svg'
import ns from 'assets/06.jpg'

export const CardGeneric = ({ top, bottom }) => {
  return(
  <>
    {top && bottom ?
      <FlexContainer direction="column">
        <StyledCardTop>
          {top}
        </StyledCardTop>
        {bottom}
      </FlexContainer>:
      <>
        <StyledCardTop>
          {top}
        </StyledCardTop>
        {bottom}
      </>
    }
  </>
  )
}

export const CardInstagram = () => {
  return (
    <SCardInstagram>
      <img src={ns} alt="" />
      <img className="instaImg" src={instagram} alt="" />
    </SCardInstagram>
  )
}

const SCardInstagram = styled.div`
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .instaImg{
    display: none;
    position: absolute;
    inset:0;
    margin:auto;
    width: 50px;
    height: 50px;
    z-index: 10;
  }
  &:hover .instaImg{
    display: block;
  }
`

const StyledCardTop = styled.div`
  position: relative;
  &:hover ${StyledToolTip} {
    display: flex;
  }
  img {
    width: 100%;
    height: 100%;
  }
`