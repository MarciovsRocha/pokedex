import { BerryFlavorMap } from "./berryflavormap.model";
import { NamedAPIResource } from "../../namedapiresource.model";

// endpoint {base_url}/berry/{id or name}
// type
export class Berry{
  constructor(
    public id?: number
    , public name?: string
    , public growth_time?: number
    , public max_harvest?: number
    , public natural_gift_power?: number
    , public size?: number
    , public smoothness?: number
    , public soil_druness?: number
    , public firmness?: NamedAPIResource
    , public flavors?: BerryFlavorMap[]
    , public item?: NamedAPIResource // Item
    , public natural_gift_type?: NamedAPIResource // Type
  ){}
}
