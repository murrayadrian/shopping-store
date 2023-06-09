import styled from 'styled-components'

export const Tag = ({ tag }) => {
  if (tag !== null && tag !== "") {
    if (tag === "hot") {
      return (
        <Stag>
          <Label bg="red">{tag.toUpperCase()}</Label>
        </Stag>
      )
    } else {
      return (
        <Stag>
          <Label>{tag.toUpperCase()}</Label>
        </Stag>
      )
    }
  } else {
    return;
  }
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
  background-color: ${props => props.bg || 'black'};
  color: white;
  width: 52px;
  height:24px;
  padding: 4px;
`