import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
export const CardContainer = styled(Link)`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    border-radius: 4rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: ${theme.colors.cardColor};
    padding: ${theme.spacings.base};
    & .pokemon__data {
      font-size: ${theme.fonts.size.large};
      text-transform: capitalize;
      display: flex;
      gap: 1rem;
      color: ${theme.colors.primaryText};
      & .pokemon__id {
        color: ${theme.colors.secondaryText};
      }
    }
    & .pokemon__image {
      width: 20rem;
    }
  `}
`
