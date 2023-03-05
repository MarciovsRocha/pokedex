import { Name } from "../../utility";

// endpoint {base_url}/encounter-method/{id or name}
// type
export class EncounterMethod{
  constructor(
    public id?: number
    , public name?: string
    , public order?: number
    , public names?: Name[]
  ){}
}
