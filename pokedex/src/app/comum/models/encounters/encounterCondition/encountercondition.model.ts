import { Name, NamedAPIResource } from "../../utility";

// endpoint {base_url}/encounter-condition/{id or name}
// type
export class EncounterCondition{
  constructor(
    public id?: number
    , public name?: string
    , public names?: Name[]
    , public values?: NamedAPIResource[]
  ){}
}
