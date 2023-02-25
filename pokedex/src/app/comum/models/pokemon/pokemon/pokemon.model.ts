import { Abilities } from "../abilities/abilites.model";

export class Pokemon{
  constructor(
    public id?: number
    , public name?: string
    , public base_experience?: number
    , public height?: number
    , public is_default?: boolean
    , public order?: number
    , public weight?: number
    , public abilities?: PokemonAbility[]
  ){}
}
