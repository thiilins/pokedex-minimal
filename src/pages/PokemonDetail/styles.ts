import styled, { css } from 'styled-components'

export const PokemonDetailsPageContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: 2rem 4rem;
    min-width: 100%;
    /* background-color: ${theme.colors.typeColors.rock}60; */
  `}
`
