// endpoint {base_url}/egg-group/{id or name}

import { Name, NamedAPIResource } from "../../utility";

// type
export class EggGroup{
  constructor(
      public id?: number
      , public name?: string
      , public names?: Name[]
      , public pokemon_species?: NamedAPIResource[] // PokemonSpecies
  ){}
}
