import React from 'react'
import PokemonProfile from '../../components/PokemonProfile'

import { PokemonDetailsPageContainer } from './styles'

const PokemonDetail: React.FC = () => {
  return (
    <PokemonDetailsPageContainer>
      <PokemonProfile />
    </PokemonDetailsPageContainer>
  )
}

export default PokemonDetail
