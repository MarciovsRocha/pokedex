import { Description, NamedAPIResource } from "../../utility";
import { GrowthRateExperienceLevel } from "./growthrateexperiencelevel.model";

// endpoint {base_url}/growth-rate/{id or name}
// type
export class GrowthRate{
  constructor(
    public id?: number
    , public name?: string
    , public formula?: string
    , public descriptions?: Description[]
    , public levels?: GrowthRateExperienceLevel[]
    , public pokemon_species?: NamedAPIResource[] // PokemonSpecies
  ){}
}
