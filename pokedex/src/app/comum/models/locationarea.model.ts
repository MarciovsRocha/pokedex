import { Name } from "./name.model";
import { NamedAPIResource } from "./namedapiresource.model";
import { PokemonEncounter } from "./pokemonencounter.model";

export class LocationArea{
  constructor(
    public id?: number
    , public name?: string
    , public game_index?: number
    , public location?: NamedAPIResource
    , public names?: Name[]
    , public pokemon_encounter?: PokemonEncounter[]
  ){}
}
