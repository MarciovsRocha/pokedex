import { NamedAPIResource } from "./namedapiresource.model";

// type
export class FlavorText{
  constructor(
    public flavor_text?: string
    , public language?: NamedAPIResource // Language
    , public version?: NamedAPIResource // version
  ){}
}
