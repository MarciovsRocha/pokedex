import { Name } from "./name.model";
import { NamedAPIResource } from "./namedapiresource.model";

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
