import { Name } from "../../utility/commonModels/name.model";
import { NamedAPIResource } from "../../utility/commonModels/namedapiresource.model";

// endpoint {base_url}/berry-firmness/{id or name}
// type
export class BerryFirmness{
  constructor(
    public id?: number
    , public name?: string
    , public berries?: NamedAPIResource[] // berry
    , public names?: Name[]
  ){}
}
