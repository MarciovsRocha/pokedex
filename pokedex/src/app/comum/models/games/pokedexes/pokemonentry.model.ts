import { NamedAPIResource } from "../../utility";

// type
export class PokemonEntry{
  constructor(
    public entry_number?: number
    , public pokemin_species?: NamedAPIResource // PokemonSpecies
  ){}
}
