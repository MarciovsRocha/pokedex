import { NamedAPIResource } from "../../utility/commonModels/namedapiresource.model";

// type
export class BerryFlavorMap{
  constructor(
    public potency?: number
    , public flavor?: NamedAPIResource
  ){}
}
