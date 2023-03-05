import { Name, NamedAPIResource } from "../../utility";
import { AwesomeName } from "./awesomename.model";

// endpoint {base_url}/pokemon-shape/{id or name}
// type
export class PokemonShape{
  constructor(
    public id?: number
    , public name?: string
    , public awesome_names?: AwesomeName[]
    , public names?: Name[]
    , public pokemon_species?: NamedAPIResource[] // PokemonSpecies
  ){}
}
