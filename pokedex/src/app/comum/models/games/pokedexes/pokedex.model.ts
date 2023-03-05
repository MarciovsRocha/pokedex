import { Description, Name, NamedAPIResource } from "../../utility";
import { PokemonEntry } from "./pokemonentry.model";

// endpoint {base_url}/pokedex/{id or name}
// type
export class Pokedex{
  constructor(
    public id?: number
    , public name?: string
    , public is_main_series?: boolean
    , public descriptions?: Description[]
    , public names?: Name[]
    , public pokemon_entries?: PokemonEntry[]
    , public region?: NamedAPIResource // Region
    , public version_groups?: NamedAPIResource[] // VersionGroup
  ){}
}
