import { Name } from "./name.model";
import { NamedAPIResource } from "./namedapiresource.model";

export class EncounterCondition{
  constructor(
    public id?: number
    , public name?: string
    , public names?: Name[]
    , public values?: NamedAPIResource[]
  ){}
}
