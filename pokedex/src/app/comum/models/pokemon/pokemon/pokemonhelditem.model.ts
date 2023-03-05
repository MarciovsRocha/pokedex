import { NamedAPIResource } from "../../utility";
import { PokemonHeldItemVersion } from "./pokemonhelditemversion.model";

// type
export class PokemonHeldItem{
  constructor(
    public item?: NamedAPIResource // Item
    , public version_details?: PokemonHeldItemVersion[]
  ){}
}
