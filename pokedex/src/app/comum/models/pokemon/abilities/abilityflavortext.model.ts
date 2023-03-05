import { NamedAPIResource } from "../../utility";

// type
export class AbilityFlavorText{
  constructor(
    public flavor_text?: string
    , public language?: NamedAPIResource // Language
    , public version_group?: NamedAPIResource // VersionGroup
  ){}
}
