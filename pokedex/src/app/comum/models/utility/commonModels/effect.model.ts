import { NamedAPIResource } from "./namedapiresource.model";

// type
export class Effect{
  constructor(
    public effect?: string
    , public language?: NamedAPIResource // Language
  ){}
}
