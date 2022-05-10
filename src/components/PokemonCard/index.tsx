import React from 'react'

import { PokemonListProps } from '../../types/pokemons'
import * as S from './styles'
const PokemonCard = ({ name, url }: PokemonListProps) => {
  function getId(url: string) {
    return url.replace('v2', '').replace(/\D/g, '')
  }
  const id = getId(url)

  return (
    <S.CardContainer to="/">
      <div className="pokemon__data">
        <span className="pokemon__name">{name}</span>
        <span className="pokemon__id">#{id}</span>
      </div>
      <img
        className="pokemon__image"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
      />
    </S.CardContainer>
  )
}

export default PokemonCard
