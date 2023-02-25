import { NamedAPIResource } from "../../namedapiresource.model";

// type
export class ContestName{
  constructor(
    public name?: string
    , public color?: string
    , public language?: NamedAPIResource // Language
  ){}
}
