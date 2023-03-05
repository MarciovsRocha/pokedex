import { NamedAPIResource } from "../../utility";

// type
export class PokemonMoveVersion{
  constructor(
    public move_learn_method?: NamedAPIResource // MoveLearnMethod
    , public version_group?: NamedAPIResource // VersionGroup
    , public level_learned_at?: number
  ){}
}
