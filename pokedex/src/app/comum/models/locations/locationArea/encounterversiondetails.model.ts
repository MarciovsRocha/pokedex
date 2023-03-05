import { NamedAPIResource } from "../../utility";

// type
export class EncounterVersionDetails{
  constructor(
    public rate?: number
    , public version?: NamedAPIResource // Version
  ){}
}
