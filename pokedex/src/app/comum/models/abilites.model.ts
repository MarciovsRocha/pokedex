import { NamedAPIResource } from "./namedapiresource.model";

export class Abilities{
  constructor(
    public id?: number
    , public name?: string
    , public is_main_series?: boolean
    , public generation?: NamedAPIResource
    , 
  ){}
}
