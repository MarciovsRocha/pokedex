import { NamedAPIResource } from "./namedapiresource.model";

// type
export class VersionGroupFlavorText{
  constructor(
    public text?: string
    , public language?: NamedAPIResource // Language
    , public version_group?: NamedAPIResource // VersionGroup
  ){}
}
