import { NamedAPIResource } from "../../utility";

// endpoint {base_url}/ability/{id or name}
// type
export class Abilities{
  constructor(
    public id?: number
    , public name?: string
    , public is_main_series?: boolean
    , public generation?: NamedAPIResource
    ,
  ){}
}
