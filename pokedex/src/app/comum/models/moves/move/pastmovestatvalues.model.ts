import { NamedAPIResource, VerboseEffect } from "../../utility";

// type
export class PastMoveStatValues{
  constructor(
    public accuracy?: number
    , public effect_chance?: number
    , public power?: number
    , public pp?: number // power-points
    , public effect_entries?: VerboseEffect[]
    , public type?: NamedAPIResource // Type
    , public version_group?: NamedAPIResource // VersionGroup
  ){}
}
