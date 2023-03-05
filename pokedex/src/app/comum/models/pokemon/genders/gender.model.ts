// endpoint {base_url}/gender/{id or name}

import { NamedAPIResource } from "../../utility";
import { PokemonSpeciesGender } from "./pokemonspeciesgender.model";

// type
export class Gender{
  constructor(
    public id?: number
    , public name?: string
    , public pokemon_species_details?: PokemonSpeciesGender[]
    , public required_for_evolution?: NamedAPIResource[] // PokemonSpecies
  ){}
}
