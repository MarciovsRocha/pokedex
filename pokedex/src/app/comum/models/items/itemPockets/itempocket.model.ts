import { Name, NamedAPIResource } from "../../utility";

// endpoint {base_url}/item-pocket/{id or name}
// type
export class ItemPocket{
  constructor(
    public id?: number
    , public name?: string
    , public categories?: NamedAPIResource[] // ItemCategory
    , public names?: Name[]
  ){}
}
