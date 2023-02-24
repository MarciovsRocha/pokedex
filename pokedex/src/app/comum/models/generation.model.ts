import { NamedAPIResource } from "./namedapiresource.model";

export class Generation{
  constructor(
    public id?: number
    , public name?: string
    , public abilites?: NamedAPIResource
    , public names?: string[]
    , public main_regio?: NamedAPIResource
  ){}
}
