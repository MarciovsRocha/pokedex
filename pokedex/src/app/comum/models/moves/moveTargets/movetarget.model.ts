// endpoint {base_url}/move-target/{id or name}

import { Description, Name, NamedAPIResource } from "../../utility";

// type
export class MoveTarget{
  constructor(
    public id?: number
    , public name?: string
    , public descriptions?: Description[]
    , public moves?: NamedAPIResource[] // Move
    , public names?: Name[]
  ){}
}
