import { Name, NamedAPIResource } from "../../utility";

// endpoint {base_url}/pokemopn-color/{id or name}
// type
export class PokemonColor{
  constructor(
    public id?: number
    , public name?: string
    , public names?: Name[]
    , public pokemon_species?: NamedAPIResource[] // PokemonSpecies
  ){}
}
