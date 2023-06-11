import styled from 'styled-components'
import { StyledToolTip } from './ToolTip'
import { FlexContainer } from 'components/Common'
import PropTypes from 'prop-types';

export const CardGeneric = ({ top, bottom }) => {
  return(
  <>
    {top && bottom ?
      <FlexContainer direction="column" gap={5}>
        {top}
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

export const Card = ((props) => {
  const {
    className,
    headStyle = {},
    title,
    extra,
    bodyStyle = {},
    children,
    ...others
  } = props;

  const body = (
    <div>{children}</div>
  )
  return (
    <div>
      {body}
    </div>
  )
})
Card.propTypes = {
  className: PropTypes.string,
  title: PropTypes.node,
  extra: PropTypes.node,
  cover: PropTypes.node,
  children: PropTypes.node
}




export const SCardInstagram = styled.div`
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

export const StyledCardTop = styled.div`
  position: relative;
  height: ${props=>props.h};
  width: ${props => props.w}px;
  box-sizing: border-box;
  &:hover ${StyledToolTip} {
    display: flex;
  }
  img {
    width: 100%;
    height: 100%;
  }
`