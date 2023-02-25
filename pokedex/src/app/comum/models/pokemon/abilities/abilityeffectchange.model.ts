import { Effect, NamedAPIResource } from "../../utility";

// type
export class AbilityEffectChange{
  constructor(
    public effect_entries?: Effect[]
    , public version_group?: NamedAPIResource // VersionGroup
  ){}
}
