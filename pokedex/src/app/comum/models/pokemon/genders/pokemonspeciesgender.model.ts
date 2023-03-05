import { NamedAPIResource } from "../../utility";

// type
export class PokemonSpeciesGender{
    constructor(
        public rate?: number
        , public pokemon_species?: NamedAPIResource[] // PokemonSpecies
    ){}
}
