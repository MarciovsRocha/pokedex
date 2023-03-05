import { NamedAPIResource } from "../../utility";

// type
export class PalParkEncounterSpecies{
  constructor(
    public base_score?: number
    , public rate?: number
    , pokemon_species?: NamedAPIResource // PokemonSpecies
  ){}
}
