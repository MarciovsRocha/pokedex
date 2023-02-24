import { NamedAPIResource } from "./namedapiresource.model";

export class Encounter{
  constructor(
    public min_level?: number
    , public max_level?: number
    , public condition_values?: NamedAPIResource
    , public chance?: number
    , public method?: NamedAPIResource
  ){}
}
