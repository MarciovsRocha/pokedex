import { Name } from "../commonModels";

// endpoint {base_url}/language/{id or name}
export class Language{
  constructor(
    public id?: number
    , public name?: string
    , public official?: boolean
    , public iso639?: string
    , public iso3166?: string
    , public names?: Name[]
  ){}
}
