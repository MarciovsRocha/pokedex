import { NamedAPIResource } from "./namedapiresource.model";

// type
export class Description{
  constructor(
    public description?: string
    , public language?: NamedAPIResource // Language
  ){}
}
