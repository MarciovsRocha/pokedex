import { NamedAPIResource } from "../../namedapiresource.model";

// type
export class BerryFlavorMap{
  constructor(
    public potency?: number
    , public flavor?: NamedAPIResource
  ){}
}
