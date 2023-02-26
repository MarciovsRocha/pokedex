import { Description, NamedAPIResource } from "../../utility";

// endpoint {base_url}/move-category/{id or name}
// type
export class MoveCategory{
  constructor(
    public id?: number
    , public name?: string
    , public moves?: NamedAPIResource[] // Move
    , public descriptions?: Description[]
  ){}
}
