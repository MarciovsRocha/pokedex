import { Name } from "../../name.model";
import { NamedAPIResource } from "../../namedapiresource.model";
import { FlavorBerryMap } from "./flavorberrymap.model";

// endpoint {base_url}/berry-flavor/{id or name}
// type
export class BerryFlavor{
  constructor(
  public id?: number
  , public name?: string
  , public berries?: FlavorBerryMap[]
  , public contest_type?: NamedAPIResource // ContestType
  , public names?: Name[]
  ){}
}
