import styled from 'styled-components'

export const Tag = ({tag}) => {
  return (
    <Stag>
      {tag ==="hot"?
        <Hot>{tag}</Hot>:
        <Normal>{tag}</Normal>
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
const Hot = styled.div`
  background-color: red;
  color: white;
  padding: 3px 8px;
`
const Normal = styled.div`
  background-color: black;
  color: white;
  padding: 3px 8px;
`