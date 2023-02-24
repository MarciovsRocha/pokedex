import { NamedAPIResource } from "./namedapiresource.model";

export class GenerationGameIndex{
  constructor(
    public game_index?: number
    , public generation?: NamedAPIResource
  ){}
}
