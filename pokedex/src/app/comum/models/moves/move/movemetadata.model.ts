import { NamedAPIResource } from "../../utility";

// type
export class MoveMetaData{
  constructor(
     public ailment?: NamedAPIResource // MoveAilment
     , public category?: NamedAPIResource // MoveCategory
     , public min_hits?: number
     , public max_hits?: number
     , public min_turns?: number
     , public max_turns?: number
     , public drain?: number
     , public healing?: number
     , public crit_hate?: number
     , public ailment_chance?: number
     , public flinch_chance?: number
     , public stat_chance?: number
  ){}
}
