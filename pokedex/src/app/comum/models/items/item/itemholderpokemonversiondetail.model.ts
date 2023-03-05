import { NamedAPIResource } from "../../utility";

// type
export class ItemHolderPokemonVersionDetail{
  constructor(
    public rarity?: number
    , public version?: NamedAPIResource // Version
  ){}
}
