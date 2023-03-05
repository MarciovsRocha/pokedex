import { NamedAPIResource } from "../../utility";

// type
export class MoveFlavorText{
  constructor(
     public flavor_text?: string
     , public language?: NamedAPIResource // Language
     , public version_group?: NamedAPIResource // VersionGroup
  ){}
}
