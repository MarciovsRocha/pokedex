import { Name, NamedAPIResource } from "../../utility";

// endpoint {base_url}/item-category/{id or name}
// type
export class ItemCategory{
  constructor(
    public id?: number
    , public name?: string
    , public items?: NamedAPIResource[] // Item
    , public names?: Name[]
    , public pocket?: NamedAPIResource // ItemPocket
  ){}
}
