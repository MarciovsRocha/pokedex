import { Name } from "./name.model";
import { NamedAPIResource } from "./namedapiresource.model";

export class EncounterConditionValue{
  constructor(
    public id?: number
    , public name?: string
    , public condition?: NamedAPIResource
    , public names?: Name[]
  ){}
}
