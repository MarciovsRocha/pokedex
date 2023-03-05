import { NamedAPIResource } from "../../utility";

// type
export class AbilityPokemon{
  constructor(
    public is_hidden?: boolean
    , public slot?: number
    , public pokemon?: NamedAPIResource // Pokemon
  ){}
}
