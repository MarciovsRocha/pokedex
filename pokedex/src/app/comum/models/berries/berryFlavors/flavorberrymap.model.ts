import { NamedAPIResource } from "../../utility/commonModels/namedapiresource.model";

// type
export class FlavorBerryMap{
  constructor(
    public potency?: number
    , public berry?: NamedAPIResource // berry
  ){}
}
