import { NamedAPIResource } from "../../namedapiresource.model";

// type
export class FlavorBerryMap{
  constructor(
    public potency?: number
    , public berry?: NamedAPIResource // berry
  ){}
}
