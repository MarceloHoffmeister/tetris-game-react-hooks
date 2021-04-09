import styled from 'styled-components'

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    20,
    10px
  );
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1px;
  border: 2px solid #333;
  background: #111;
`