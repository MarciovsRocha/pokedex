import { Name, NamedAPIResource } from "../../utility"
import { PokemonEncounter } from "./pokemonencounter.model";
import { EncounterMethodRate } from "./encountermethodrate.model";

// endpoint {base_url}/location-area/{id or name}
// type
export class LocationArea{
  constructor(
    public id?: number
    , public name?: string
    , public game_index?: number
    , public encounter_method_rates?: EncounterMethodRate[]
    , public location?: NamedAPIResource // Location
    , public names?: Name[]
    , public pokemon_encounter?: PokemonEncounter[]
  ){}
}
