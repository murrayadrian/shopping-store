import styled from 'styled-components'

export const Tag = ({tag}) => {
  return (
    <Stag>
      {tag ==="hot"?
        <Label bg='red'>{tag}</Label> : <Label>{tag}</Label>
      }
    </Stag>
  )
}

const Stag = styled.div`
  position: absolute;
  top: 20px;
  left: 0;
  button {
    background-color: black;
    color: white;
    padding: 2px 8px;
  }
`
const Label = styled.div`
  background-color: ${props=>props.bg || 'black'};
  color: white;
  padding: 3px 8px;
`