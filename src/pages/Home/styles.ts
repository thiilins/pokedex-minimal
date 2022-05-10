import styled from 'styled-components'

export const HomePageContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(25rem, 1fr));
  grid-gap: 2rem;
  padding-inline-start: 0;
  padding: 5rem;
`
