import styled from 'styled-components'

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${props => props.height},
    calc(25vw / ${props => props.height})
  );
  grid-template-columns: repeat(${props => props.height}, 1fr);
  grid-gap: 1px;
  border: 2px solid #333;
  max-width: 25vw;
  background: #111;
`