import { Description, Name, NamedAPIResource } from "../../utility";

// endpoint {base_url}/item-attribute/{id or name}
// type
export class ItemAttribute{
  constructor(
    public id?: number
    , public name?: string
    , public items?: NamedAPIResource[] // Item
    , public names?: Name[]
    , public descriptions?: Description[]
  ){}
}
