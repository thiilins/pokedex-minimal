import styled, { css } from 'styled-components'
export const HeaderContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 2.5rem;
    padding: 2rem 8rem;
    justify-content: space-between;
    background: ${theme.colors.header};
    & .logo {
      font-size: 2.5rem;
      display: flex;
      gap: 1rem;
      align-items: center;
      font-weight: 900;
      color: ${theme.colors.primaryText};
      & img {
        width: 5rem;
      }
    }
  `}
`
