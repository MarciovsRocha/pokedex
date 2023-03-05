import { NamedAPIResource } from "../../utility";

// type
export class PokemonHeldItemVersion{
  constructor(
    public version?: NamedAPIResource // Version
    , public rarity?: number
  ){}
}
