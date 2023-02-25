import { NamedAPIResource } from "./namedapiresource.model";

// type
export class VerboseEffect{
  constructor(
    public effect?: string
    , public short_effect?: string
    , public language?: NamedAPIResource // Language
  ){}
}
