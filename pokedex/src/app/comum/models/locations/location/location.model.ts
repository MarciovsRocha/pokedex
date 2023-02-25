import { Name, NamedAPIResource, GenerationGameIndex } from "../../utility";

// endpoint {base_url}/location/{id or name}
// type
export class Location{
  constructor(
    public id?: number
    , public name?: string
    , public region?: NamedAPIResource // Region
    , public names?: Name[]
    , public game_indices?: GenerationGameIndex[]
    , public areas?: NamedAPIResource[] // LocationArea
  ){}
}
