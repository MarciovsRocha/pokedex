// endpoint {base_url}/move/{id or name}

import { AbilityEffectChange } from "../../pokemon";
import { APIResource, MachineVersionDetail, Name, NamedAPIResource, VerboseEffect } from "../../utility";
import { ContestCombosSet } from "./contestcombosets.model";
import { MoveFlavorText } from "./moveflavortext.model";
import { MoveMetaData } from "./movemetadata.model";
import { MoveStatChange } from "./movestatchange.model";
import { PastMoveStatValues } from "./pastmovestatvalues.model";

// type
export class Move{
  constructor(
    public id?: number
    , public name?: string
    , public accuracy?: number
    , public effect_chance?: number
    , public pp?: number // power-points
    , public priority?: number
    , public power?: number
    , public contest_combos?: ContestCombosSet
    , public contest_type?: NamedAPIResource // ContestType
    , public contest_effect?: APIResource // ContestEffect
    , public damage_class?: NamedAPIResource // MoveDamageClass
    , public effect_entries?: VerboseEffect[]
    , public effect_changes?: AbilityEffectChange[]
    , public learned_by_pokemon?: NamedAPIResource[] // Pokemon
    , public flavor_text_entries?: MoveFlavorText[]
    , public generation?: NamedAPIResource // Generation
    , public machines?: MachineVersionDetail[]
    , public meta?: MoveMetaData
    , public names?: Name[]
    , public past_values?: PastMoveStatValues[]
    , public stat_changes?: MoveStatChange[]
    , public super_contest_effect?: APIResource // SuperContestEffect
    , public target?: NamedAPIResource // MoveTarget
    , public type?: NamedAPIResource // Type
  ){}
}
