import React, { useEffect, useState } from 'react'
import PokemonCard from '../../components/PokemonCard'
import { api } from '../../services/api'
import { PokemonListProps, PokemonsListResponse } from '../../types/pokemons'
import * as S from './styles'

const Home = () => {
  const [pokemons, setPokemons] = useState<PokemonListProps[]>(
    [] as PokemonListProps[]
  )
  const [loadPokemon] = useState<string>('?limit=100&offset=0')
  useEffect(() => {
    api.get<PokemonsListResponse>(loadPokemon).then(({ data }) => {
      setPokemons(data.results)
    })
  }, [loadPokemon])
  return (
    <S.HomePageContainer>
      {pokemons.map(({ name, url }) => {
        return <PokemonCard key={name} name={name} url={url} />
      })}
    </S.HomePageContainer>
  )
}

export default Home
