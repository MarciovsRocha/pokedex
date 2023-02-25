import { NamedAPIResource } from "../../utility";

// endpoint {base_url}/machine/{id}
// type
export class Machine{
  constructor(
    public id?: number
    , public item?: NamedAPIResource // Item
    , public move?: NamedAPIResource // Move
    , public version_group?: NamedAPIResource // VersionGroup
  ){}
}
