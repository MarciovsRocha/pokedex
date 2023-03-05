import { NamedAPIResource, VersionEncounterDetail } from "../../utility";

// endpoint {base_url}/pokemon/{id or name}/encounters
// type
export class LocationAreaEncounter{
  constructor(
    public location_area?: NamedAPIResource // LocationArea
    , public version_details?: VersionEncounterDetail[]
  ){}
}
