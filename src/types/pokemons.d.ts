export type PokemonListProps = {
  name: string
  url: string
}

export type PokemonsListResponse = {
  next: string
  previous: string
  results: PokemonListProps[]
}
export type PokemonTypesVariant =
  | 'bug'
  | 'dark'
  | 'dragon'
  | 'electric'
  | 'fairy'
  | 'fighting'
  | 'ghost'
  | 'grass'
  | 'ground'
  | 'ice'
  | 'normal'
  | 'poison'
  | 'rock'
  | 'psychic'
