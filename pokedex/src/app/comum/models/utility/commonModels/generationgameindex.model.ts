import { NamedAPIResource } from "./namedapiresource.model";

// type
export class GenerationGameIndex{
  constructor(
    public game_index?: number
    , public generation?: NamedAPIResource
  ){}
}
