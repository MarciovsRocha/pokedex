import { NamedAPIResource } from "../../namedapiresource.model";
import { ContestName } from "./contestname.model";

// endpoint {base_url}/contest-type/{id or name}
// type
export class ContestType{
  constructor(
    public id?: number
    , public name?: string
    , public berry_flavor?: NamedAPIResource // BerryFlavor
    , public names?: ContestName[]
  ){}
}
