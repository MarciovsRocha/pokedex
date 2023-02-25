import { NamedAPIResource } from "./namedapiresource.model";

export class Name{
  constructor(
    public name?: string
    , public language?: NamedAPIResource
  ){}
}
