import { NamedAPIResource } from "../../utility";

// type
export class MoveBattleStylePreference{
  constructor(
    public low_hp_preference?: number
    , public high_hp_preference?: number
    , public move_battle_style?: NamedAPIResource // MoveBattleStyle
  ){}
}
