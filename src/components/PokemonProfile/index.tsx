import React from 'react'
import * as Type from '../../assets/images/pokemonTypes'
import { PokemonTypesVariant } from '../../types/pokemons'
import * as S from './styles'
export type PokemonProfileProps = {
  pokemonType: PokemonTypesVariant
}
const PokemonProfile = ({ pokemonType = 'rock' }: PokemonProfileProps) => {
  const type = 'rock'
  const TYPE_ICON = Type[type]
  return (
    <S.ProfileContainer pokemonType={pokemonType}>
      <header className="profile__header">
        <div className="name__id">
          <span className="pokemon__name">Aurorus</span>
          <span className="pokemon__id">#699</span>
        </div>
        <div className="pokemon__type__box">
          <div className="pokemon__type__image__box">
            <img src={TYPE_ICON} className="pokemon__type__image" />
          </div>
          <span className="pokemon_type_text"> {type}</span>
        </div>
      </header>
      <div className="profile__picture">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/699.png" />
      </div>
      <div className="pokemon_profile_data">
        <div className="pokemon_profile_info">
          <span className="pokemon_profile_info_title">Altura</span>
          <span className="pokemon_profile_info_text">8.03m</span>
        </div>
        <div className="pokemon_profile_info">
          <span className="pokemon_profile_info_title">Peso</span>
          <span className="pokemon_profile_info_text">90.22kg</span>
        </div>
        <div className="pokemon_profile_info">
          <span className="pokemon_profile_info_title">Habilidades</span>
          <span className="pokemon_profile_info_text">
            snow-warning, refrigerate
          </span>
        </div>
      </div>
    </S.ProfileContainer>
  )
}

export default PokemonProfile
