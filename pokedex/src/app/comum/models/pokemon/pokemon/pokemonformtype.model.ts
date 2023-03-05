import { NamedAPIResource } from "../../utility";

// type
export class PokemonFormType{
  constructor(
    public slot?: number
    , public type?: NamedAPIResource // type
  ){}
}
