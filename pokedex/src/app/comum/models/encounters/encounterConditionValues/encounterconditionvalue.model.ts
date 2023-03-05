import { Name, NamedAPIResource } from "../../utility";

// endpoint {base_url}/encounter-condition-value/{id or name}
// type
export class EncounterConditionValue{
  constructor(
    public id?: number
    , public name?: string
    , public condition?: NamedAPIResource
    , public names?: Name[]
  ){}
}
