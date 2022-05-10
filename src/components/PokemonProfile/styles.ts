import styled, { css } from 'styled-components'
import { PokemonProfileProps } from '.'
import pokeball from '../../assets/images/pokeball.svg'
export const ProfileContainer = styled.section<PokemonProfileProps>`
  ${({ theme, pokemonType }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    height: 100%;
    max-width: 50vw;
    padding: 1rem 2rem;
    border-radius: ${theme.borders.medium};
    background-color: ${theme.colors.typeColors[pokemonType]};
    background-image: url(${pokeball});
    background-repeat: no-repeat;
    background-size: 60rem;
    background-position: bottom -10rem right -10rem;
    background;
    & .profile__header {
      display: flex;
      color: ${theme.fonts.colors.primaryText};
      align-items: center;
      justify-content: space-between;
      & .name__id {
        display: flex;
        gap: 0.5rem;
        font-size: ${theme.fonts.size.medium};
        & .pokemon__name {
          font-weight: ${theme.fonts.weight.bold};
        }
      }
      & .pokemon__type__box {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem 1rem;
        color: ${theme.colors.primaryText};
        background-color: ${theme.colors.background};
        border-radius: ${theme.borders.medium};
        & .pokemon_type_text {
          text-transform: capitalize;
          font-size: ${theme.fonts.size.small};
        }
        & .pokemon__type__image__box {
          background-color: ${theme.colors.typeColors[pokemonType]};
          border-radius: ${theme.borders.large};
          width: 3rem;
          height: 3rem;
          display: flex;
          align-items: center;
          padding: 0.2rem;
          justify-content: center;
          & img {
            max-width: 2.5rem;
            max-height: 2.5rem;
            object-fit: cover;
          }
        }
      }
    }
    & .profile__picture {
      & img {
        object-fit: fill;
      }
    }
    & .pokemon_profile_data {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 2rem;
      color: ${theme.fonts.colors.primaryText};
      & .pokemon_profile_info {
        display: flex;
        flex-direction: column;
        align-items: center;
        & .pokemon_profile_info_title {
          font-weight: ${theme.fonts.weight.bold};
          font-size: ${theme.fonts.size.xxsmall};
        }
        & .pokemon_profile_info_text {
          font-weight: ${theme.fonts.weight.regular};
          font-size: ${theme.fonts.size.xsmall};
        }
      }
    }
  `}
`
