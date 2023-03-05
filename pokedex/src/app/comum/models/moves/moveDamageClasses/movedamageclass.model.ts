import { Description, Name, NamedAPIResource } from "../../utility";

// endpoint {base_url}/move-damage-class/{id or name}
// type
export class MoveDamageClass{
  constructor(
    public id?: number
    , public name?: string
    , public descriptions?: Description[]
    , public moves?: NamedAPIResource[] // Move
    , public names?: Name[]
  ){}
}
