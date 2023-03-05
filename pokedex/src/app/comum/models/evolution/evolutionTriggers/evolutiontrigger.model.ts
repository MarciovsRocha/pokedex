import { Name, NamedAPIResource } from "../../utility"

// endpoint {base_url}/evolution-trigger/{id or name}
// type
export class EvolutionTrigger{
  constructor(public id?: number
  , public name?: string
  , public names?: Name[]
  , public pokemon_species?: NamedAPIResource // PokemonSpecies
  ){}
}
