import { NamedAPIResource } from "./namedapiresource.model";
import { APIResource } from "./apiresource.model";

// type
export class MachineVersionDetail{
  constructor(
    public machine?: APIResource // Machine
    , public version_group?: NamedAPIResource // VersionGroup
  ){}
}
