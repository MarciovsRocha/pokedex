import { NamedAPIResource } from "./namedapiresource.model";

export class Region{
  constructor(
    public id?: number
    , public locations?: NamedAPIResource
  ){}
}
