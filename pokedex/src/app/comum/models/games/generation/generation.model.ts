import { Name, NamedAPIResource } from "../../utility";

// endpoint {base_url}/generation/{id or name}
// type
export class Generation{
  constructor(
    public id?: number
    , public name?: string
    , public abilities?: NamedAPIResource[] // ability
    , public names?: Name[]
    , public main_region?: NamedAPIResource // region
    , public moves?: NamedAPIResource[] // Move
    , public pokemon_species?: NamedAPIResource[] // PokemonSpecies
    , public types?: NamedAPIResource[] // Type
    , public version_groups?: NamedAPIResource[] // VersionGroup
  ){}
}
