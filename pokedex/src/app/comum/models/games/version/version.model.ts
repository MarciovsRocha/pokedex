import { Name, NamedAPIResource } from "../../utility";

// endpoint {base_url}/version/{id or name}
// type
export class version{
  constructor(
    public id?: number
    , public name?: string
    , public names?: Name[]
    , public version_group?: NamedAPIResource // VersionGroup
  ){}
}
