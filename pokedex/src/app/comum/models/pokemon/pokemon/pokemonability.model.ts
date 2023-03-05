import { NamedAPIResource } from "../../utility";

// type
export class PokemonAbility{
  constructor(
    public is_hidden?: boolean
    , public slot?: number
    , public ability?: NamedAPIResource // Ability
  ){}
}
