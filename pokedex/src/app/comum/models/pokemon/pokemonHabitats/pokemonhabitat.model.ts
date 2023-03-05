import { Name, NamedAPIResource } from "../../utility";

// endpoint {base_url}/pokemon-habitat/{id or name}
// type
export class PokemonHabitat{
  constructor(
    public id?: number
    , public name?: string
    , public names?: Name[]
    , public pokemon_species?: NamedAPIResource[] // PokemonSpecies
  ){}
}
