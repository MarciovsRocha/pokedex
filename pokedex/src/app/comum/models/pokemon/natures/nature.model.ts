import { Name, NamedAPIResource } from "../../utility";
import { MoveBattleStylePreference } from "./movestylebattlepreference.model";
import { NatureStatChange } from "./naturestatchange.model";

// endpoint {base_url}/nature/{id or name}
// type
export class Nature{
  constructor(
    public id?: number
    , public name?: string
    , public decreased_stat?: NamedAPIResource // Stat
    , public increased_stat?: NamedAPIResource // Stat
    , public hates_flavor?: NamedAPIResource // BerryFlavor
    , public likes_flavor?: NamedAPIResource // BerryFlavor
    , public pokeathlon_stat_changes?: NatureStatChange[]
    , public move_battle_style_preferences?: MoveBattleStylePreference[]
    , public names?: Name[]
  ){}
}
