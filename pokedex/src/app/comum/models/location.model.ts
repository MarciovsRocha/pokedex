import { Name } from "./name.model";
import { NamedAPIResource } from "./namedapiresource.model";
import { GenerationGameIndex } from "./generationgameindex.model";

export class Location{
  constructor(
    public id?: number
    , public name?: string
    , public region?: NamedAPIResource
    , public names?: Name[]
    , public game_indices?: GenerationGameIndex[]
    , public areas?: NamedAPIResource
  ){}
}
