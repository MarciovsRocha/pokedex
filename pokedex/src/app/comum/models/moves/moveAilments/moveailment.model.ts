import { Name, NamedAPIResource } from "../../utility";

// endpoint {base_url}/move-ailment/{id or name}
// type
export class MoveAilment{
  constructor(
    public id?: number
    , public name?: string
    , public moves?: NamedAPIResource[] // Move
    , public names?: Name[]
  ){}
}
