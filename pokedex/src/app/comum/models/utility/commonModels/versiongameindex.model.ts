import { NamedAPIResource } from "./namedapiresource.model";

// type
export class VersionGameIndex{
  constructor(
    public game_index?: number
    , public version?: NamedAPIResource // version
  ){}
}
