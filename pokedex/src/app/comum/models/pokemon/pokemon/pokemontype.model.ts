import { NamedAPIResource } from "../../utility";

// type
export class PokemonType{
  constructor(
    public slot?: number
    , public type?: NamedAPIResource // Type
  ){}
}
