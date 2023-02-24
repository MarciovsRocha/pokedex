import { NamedAPIResource } from "./namedapiresource.model";
import { Encounter } from "./encounter.model";

export class VersionEncounterDetail{
  constructor(
    public version?: NamedAPIResource
    , public max_chance?: number
    , public encounter_details?: Encounter[]
  ){}
}
