import { NamedAPIResource } from "../../utility";
import { EncounterVersionDetails } from "./encounterversiondetails.model";

// type
export class EncounterMethodRate{
  constructor(
    public encounter_method?: NamedAPIResource // EncounterMethod
    , public version_details?: EncounterVersionDetails[]
  ){}
}
