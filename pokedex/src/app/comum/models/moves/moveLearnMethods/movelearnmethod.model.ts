import { Description, Name, NamedAPIResource } from "../../utility";

// endpoint {base_url}/move-learn-method/{id or name}
// type
export class MoveLearnMethod{
  constructor(
    public id?: number
    , public name?: string
    , public descriptions?: Description[]
    , public names?: Name[]
    , public version_groups?: NamedAPIResource[] // VersionGroup
  ){}
}
