import { Name, NamedAPIResource } from "../../utility";

// endpoint {base_url}/region/{id or name}
// type
export class Region{
  constructor(
    public id?: number
    , public locations?: NamedAPIResource[] // Location
    , public name?: string
    , public names?: Name[]
    , public main_generation?: NamedAPIResource // Generation
    , public pokedexes?: NamedAPIResource[] // Pokedex
    , public version_groups?: NamedAPIResource[] // VersionGroup
  ){}
}
