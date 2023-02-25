// endpoint {base_url}/version-group/{id or name}

import { NamedAPIResource } from "../../utility";

// type
export class VersionGroup{
  constructor(
    public id?: number
    , public name?: string
    , public order?: number
    , public generation?: NamedAPIResource // Generation
    , public move_learn_methods?: NamedAPIResource[] // MoveLearnMethods
    , public pokedexes?: NamedAPIResource[] // Pokedex
    , public regions?: NamedAPIResource[] // Region
    , public versions?: NamedAPIResource[] // Version
  ){}
}
